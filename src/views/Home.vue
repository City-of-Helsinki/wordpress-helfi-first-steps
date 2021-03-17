<template>
  <div>
    <QuestionForm
      v-if="currentQuestion"
      :question="currentQuestion"
      :questionIndex="currentQuestionIndex"
      @answer="onAnswer"
      @undo="onUndo"
    />
  </div>
</template>

<script>
import {computed, ref, watch} from '@vue/composition-api'

import {
  questions as QUESTIONS
} from '@/assets/configuration.yaml'

export default {
  name: 'Home',
  setup (props, context) {
    const initialQuestionId = QUESTIONS[0].id

    const answers = computed(() => {
      return context.root.$route.query
    })

    const currentQuestionId = ref(initialQuestionId)
    const currentQuestionIndex = computed(() => {
      return Object.keys(answers.value).length
    })
    const currentQuestion = computed(() => {
      if (!currentQuestionId.value) return
      return QUESTIONS.find(({id}) => id === currentQuestionId.value)
    })

    // Update current question id when answers change
    watch(() => answers.value, answers => {
      let newQuestionId = initialQuestionId
      while (newQuestionId && answers[newQuestionId]) {
        const question = QUESTIONS.find(
          ({id}) => id === newQuestionId
        )
        const answer = question.options.find(
          ({id}) => id === answers[newQuestionId]
        )
        newQuestionId = answer.next
      }
      currentQuestionId.value = newQuestionId
    }, {
      immediate: true,
      deep: true
    })

    // Finish when all questions have been answered
    watch(() => currentQuestionId.value, currentQuestionId => {
      if (!currentQuestionId) {
        const checklistItemIds = []
        for (const [questionId, answerId] of Object.entries(answers.value)) {
          const question = QUESTIONS.find(({id}) => id === questionId)
          const answer = question.options.find(({id}) => id === answerId)
          if (answer.checklist && answer.checklist.enable) {
            checklistItemIds.push(...answer.checklist.enable)
          }
        }

        // Replace is used so that when navigating back, the second-to-last
        // question is shown instead of being immediately completed.
        context.root.$router.replace({
          name: 'Result',
          query: {items: checklistItemIds.join(',')}
        })
      }
    }, {
      immediate: true
    })

    return {
      currentQuestionId,
      currentQuestion,
      currentQuestionIndex,
      onAnswer,
      onUndo
    }

    function onAnswer (answerId) {
      if (context.root.$route.query[currentQuestionId.value] !== answerId) {
        context.root.$router.push({
          query: {
            ...context.root.$route.query,
            [currentQuestionId.value]: answerId
          }
        })
      }
    }

    function onUndo () {
      context.root.$router.go(-1)
    }
  }
}
</script>

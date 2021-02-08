<template>
  <div :class="$style.component">
    <InfoBanner v-if="currentQuestionIndex === 0">
      <p>
        This is a step by step guide to help you understand the immigration
        process. It also explains which public authorities you need to contact
        before and/or upon your arrival.
      </p>
      <p>
        <strong>
          Using the guide is easy. Just answer 2-4(?) questions and get a handy
          checklist!
        </strong>
      </p>
    </InfoBanner>
    <div :class="$style.contentContainer">
      <QuestionNumber
        v-if="currentQuestionIndex > 0"
        :number="currentQuestionIndex + 1"
        :class="$style.questionNumber"
      />
      <QuestionPrompt
        :prompt="currentQuestion.prompt"
        :options="currentQuestion.options"
        @selectOption="onOptionSelected(currentQuestion.id, $event)"
      />
      <BackLink
        v-if="currentQuestionIndex > 0"
        :class="$style.backLink"
        @click.native="currentQuestionIndex--"
      >
        Previous question
      </BackLink>
    </div>
  </div>
</template>

<script>
import {computed, ref} from '@vue/composition-api'

export default {
  props: {
    questions: {
      type: Array,
      required: true,
      validator: questions => {
        return questions.every(question => {
          if (!question.prompt || !question.options) return false
          return question.options.every(option => {
            return !!option.id && !!option.label
          })
        })
      }
    }
  },
  setup ({questions}, {emit}) {
    const currentQuestionIndex = ref(0)
    const currentQuestion = computed(() => {
      return questions[currentQuestionIndex.value]
    })

    return {
      currentQuestion,
      currentQuestionIndex,
      onOptionSelected
    }

    function onOptionSelected (questionId, optionId) {
      emit('setAnswer', {questionId, optionId})
      if (currentQuestionIndex.value < questions.length - 1) {
        currentQuestionIndex.value++
      } else {
        emit('finish')
      }
    }
  }
}
</script>

<style module lang="scss">
.component {
  .contentContainer {
    padding: hds.$spacing-s hds.$spacing-s;
  }

  .questionNumber {
    margin-bottom: hds.$spacing-5-xl;
  }

  .backLink {
    margin-top: hds.$spacing-5-xl;
  }
}
</style>

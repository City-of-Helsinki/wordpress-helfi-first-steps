<template>
  <div>
    <InfoBanner>
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
    <div :class="$style.questionContainer">
      <QuestionPrompt
        :prompt="currentQuestion.prompt"
        :options="currentQuestion.options"
      />
    </div>
  </div>
</template>

<script>
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
  setup ({questions}) {
    return {
      currentQuestion: questions[0]
    }
  }
}
</script>

<style module lang="scss">
.questionContainer {
  padding: hds.$spacing-m hds.$spacing-s;
}
</style>

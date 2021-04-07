<template>
  <div :class="$style.component">
    <div :class="$style.infoBannerContainer">
      <InfoBanner v-if="isFirstQuestion">
        <p>
          This is a step by step guide to help you understand the immigration
          process. It also explains which public authorities you need to contact
          before and/or upon your arrival.
        </p>
        <p>
          <strong>
            Using the guide is easy. Just answer 2-7 questions and get a handy
            checklist!
          </strong>
        </p>
      </InfoBanner>
    </div>
    <div :class="$style.contentContainer">
      <QuestionNumber
        v-if="!isFirstQuestion"
        :number="questionIndex + 1"
        :class="$style.questionNumber"
      />
      <QuestionPrompt
        :prompt="question.prompt"
        :options="question.options"
        @selectOption="$emit('answer', $event)"
      />
      <BackLink
        v-if="!isFirstQuestion"
        :class="$style.backLink"
        @click.native="$emit('undo')"
      >
        Previous question
      </BackLink>
    </div>
  </div>
</template>

<script>
import {computed} from '@vue/composition-api'

export default {
  props: {
    question: {
      type: Object,
      required: true,
      validator: question => {
        if (!question.id || !question.prompt || !question.options) return false
        if (!question.options.every(option => {
          return !!option.id && !!option.label
        })) return false
        return true
      }
    },
    questionIndex: {
      type: Number,
      required: true
    }
  },
  setup (props, context) {
    const isFirstQuestion = computed(() => {
      return props.questionIndex === 0
    })

    return {
      isFirstQuestion
    }
  }
}
</script>

<style module lang="scss">
.component {
  .contentContainer {
    padding: hds.$spacing-s hds.$spacing-s;
  }

  .infoBannerContainer {
    margin-bottom: hds.$spacing-l;
  }

  .questionNumber {
    margin-bottom: hds.$spacing-5-xl;

    @media (max-width: hds.$breakpoint-m) {
      margin-bottom: 2 * hds.$spacing-5-xl;
    }
  }

  .backLink {
    margin-top: hds.$spacing-5-xl;

    @media (max-width: hds.$breakpoint-m) {
      margin-top: 2 * hds.$spacing-5-xl;
    }
  }
}
</style>

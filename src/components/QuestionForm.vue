<template>
  <div :class="$style.component">
    <div :class="$style.infoBannerContainer">
      <InfoBanner v-if="isFirstQuestion">
        <p>
          The First Steps Checklist is a personalised list of the first steps
          you need to take in association with your move to Finland.
        </p>
        <p>
          Each list has about a dozen steps. The first few focus on the
          necessary permits and registration for your specific situation. The
          others contain information on important steps like opening a bank
          account, buying home insurance and using healthcare.
        </p>
        <p>
          Start by answering the questions below. When you are finished, you
          will be able to save your personalised list as a PDF file or print it
          out.
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

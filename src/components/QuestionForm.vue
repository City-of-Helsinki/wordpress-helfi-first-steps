<template>
  <div :class="$style.component">
    <div :class="$style.infoBannerContainer">
      <InfoBanner v-if="isFirstQuestion">
        <p>
          The First Steps Checklist is a personalised list of the first steps you need to take, from
          registration to tasks associated with setting up your daily life.
        </p>
        <p>
          Start by answering the questions below. You will be able to save the list as a PDF file when
          you are finished.
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

<template>
  <div>
    <h2>
      {{ prompt }}
    </h2>
    <div :class="$style.answers">
      <AnswerButton v-for="option in options" :key="option.id" @click.native="$emit('selectOption', option.id)">
        {{ option.label }}
      </AnswerButton>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prompt: {type: String, required: true},
    options: {
      type: Array,
      required: true,
      validator: options => {
        return options.every(option => {
          return !!option.label
        })
      }
    }
  }
}
</script>

<style module lang="scss">
.answers {
  display: flex;
  flex-wrap: wrap;

  > * {
    flex-basis: 100%;
  }

  > * + * {
    margin-top: hds.$spacing-s;
  }

  @include mq.mq($from: hds.$breakpoint-l) {
    flex-wrap: nowrap;

    > * {
      flex-grow: 1;
    }

    > * + * {
      margin-top: 0;
      margin-left: hds.$spacing-s;
    }
  }
}
</style>

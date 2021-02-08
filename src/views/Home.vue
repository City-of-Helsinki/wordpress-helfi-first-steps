<template>
  <div>
    <QuestionForm
      :questions="$options.questions"
    />
  </div>
</template>

<script>
import configuration from '@/assets/configuration.json'

export default {
  name: 'Home',
  questions: configuration.questions
}
</script>

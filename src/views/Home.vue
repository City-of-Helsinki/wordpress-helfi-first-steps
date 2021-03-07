<template>
  <div>
    <QuestionForm
      :questions="$options.questions"
      @finish="$router.push({name: 'Result'})"
    />
  </div>
</template>

<script>
import configuration from '@/assets/configuration.yaml'

export default {
  name: 'Home',
  questions: configuration.questions
}
</script>

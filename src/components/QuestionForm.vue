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
        prompt="1. What is your citizenship?"
        :options="[{
          id: '1',
          label: 'EU/EEA citizen'
        }, {
          id: '2',
          label: 'Non-EU citizen'
        }, {
          id: '3',
          label: 'Nordic citizen'
        }]"
      />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style module lang="scss">
.questionContainer {
  padding: hds.$spacing-m hds.$spacing-s;
}
</style>

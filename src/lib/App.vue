<template>
  <div id="app" :class="$style.app">
    <TopBar />
    <router-view/>
  </div>
</template>

<script>
import {provide} from '@vue/composition-api'

export default {
  props: {
    pdfBaseUrl: {type: String, required: false, default: undefined},
    emailBaseUrl: {type: String, required: false, default: undefined},
    emailQueryKey: {type: String, required: false, default: undefined},
    questions: {type: Array, required: true},
    checklist: {type: Array, required: true}
  },
  setup (props) {
    provide('appOptions', {
      pdfBaseUrl: props.pdfBaseUrl,
      emailBaseUrl: props.emailBaseUrl,
      emailQueryKey: props.emailQueryKey,
      questions: props.questions,
      checklist: props.checklist
    })
  }
}
</script>

<style module lang="scss">
.app {
  @import '~@/styles/global';
}
</style>

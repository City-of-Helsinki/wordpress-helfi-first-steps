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
    emailQueryKey: {type: String, required: false, default: undefined}
  },
  setup (props) {
    provide('appOptions', {
      pdfBaseUrl: props.pdfBaseUrl,
      emailBaseUrl: props.emailBaseUrl,
      emailQueryKey: props.emailQueryKey
    })
  }
}
</script>

<style module lang="scss">
.app {
  @import '~@/styles/global';
}
</style>

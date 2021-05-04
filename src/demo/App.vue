<template>
  <div id="app" :class="$style.app">
    <TopBar />
    <router-view/>
  </div>
</template>

<script>
import {provide} from '@vue/composition-api'

export default {
  setup (props) {
    provide('appOptions', {
      pdfBaseUrl: '/pdf-base',
      emailBaseUrl: '/email-base',
      emailQueryKey: 'answers'
    })
  }
}
</script>

<style module lang="scss">
.app {
  @import '~@/styles/global';
}
</style>

<style lang="scss">
@import '~@demo/styles/fonts';
@import '~hds-core/lib/base';

body {
  margin: 0;
  font-family: hds.$font-default;
}

h1 {
  font-size: hds.$fontsize-heading-l;
}

h2 {
  font-size: hds.$fontsize-heading-m;
}

h3 {
  font-size: hds.$fontsize-heading-s;
}

h4 {
  font-size: hds.$fontsize-heading-s;
}

h5 {
  font-size: hds.$fontsize-heading-xs;
}

h6 {
  font-size: hds.$fontsize-heading-xxs;
}
</style>

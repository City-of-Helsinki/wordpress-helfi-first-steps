<template>
  <div id="app">
    <TopBar />
    <router-view/>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'

export default {
  components: {
    TopBar
  }
}
</script>

<style lang="scss">
@import '~@demo/styles/fonts';

body {
  margin: 0;
  font-family: hds.$font-default;
}
</style>

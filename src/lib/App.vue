<template>
  <div id="app" :class="$style.app">
    <TopBar />
    <router-view/>
  </div>
</template>

<style module lang="scss">
.app {
  @import '~@/styles/global';
}
</style>

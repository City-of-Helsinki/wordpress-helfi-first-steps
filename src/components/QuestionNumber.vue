<template>
  <h3 :class="$style.component">
    Question {{ number }}
  </h3>
</template>

<script>
export default {
  props: {
    number: {type: Number, required: true}
  }
}
</script>

<style module lang="scss">
.component {
  color: hds.$color-black-30;
}
</style>

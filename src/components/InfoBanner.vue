<template>
  <div :class="$style.component">
    <slot/>
  </div>
</template>

<script>
export default {

}
</script>

<style module lang="scss">
.component {
  padding: hds.$spacing-l hds.$spacing-s;
  background-color: hds.$color-coat-of-arms-light;
  // TODO: koro effect
}
</style>

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
@use "~hds-design-tokens/lib/all" as hds;

.component {
  padding: hds.$spacing-l hds.$spacing-s;
  background-color: hds.$color-coat-of-arms-light;
  // TODO: koro effect
}
</style>

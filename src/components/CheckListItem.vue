<template>
  <div :class="$style.component">
    <a :class="$style.toggle" v-if="$slots.heading">
      <slot name="heading" />
    </a>
    <div :class="$style.content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style module lang="scss">
.component {
  &:not(:last-child) {
    margin-bottom: hds.$spacing-m;
  }

  .toggle {
    display: block;
    padding: hds.$spacing-m;
    font-size: hds.$fontsize-heading-s;
    font-weight: bold;
    background-color: hds.$color-coat-of-arms-medium-light;
  }

  .content {
    padding: hds.$spacing-m;
    background-color: hds.$color-coat-of-arms-light;
  }
}
</style>

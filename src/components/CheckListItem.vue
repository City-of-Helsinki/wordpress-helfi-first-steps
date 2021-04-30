<template>
  <div :class="$style.component">
    <h3 :class="$style.toggle" v-if="$slots.heading">
      <slot name="heading" />
    </h3>
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
  position: relative;
  padding-left: calc(#{hds.$spacing-l + hds.$spacing-s} + #{2 * 2}px);

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: #{(72 - 32 - 4) / 2}px;
    width: hds.$spacing-l;
    height: hds.$spacing-l;
    border: 2px solid black;
    float: left;
  }

  &:not(:last-child) {
    margin-bottom: hds.$spacing-m;
  }

  .toggle {
    margin-bottom: 0;
    display: block;
    padding: hds.$spacing-m;
    font-weight: bold;
    background-color: hds.$color-coat-of-arms-medium-light;
  }

  .content {
    padding: hds.$spacing-m;
    background-color: hds.$color-coat-of-arms-light;
  }
}
</style>

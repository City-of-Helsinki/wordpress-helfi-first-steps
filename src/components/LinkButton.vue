<template>
  <button :class="$style.component">
    <slot/>
  </button>
</template>

<script>
export default {

}
</script>

<style module lang="scss">
.component {
  display: inline-block;
  align-items: center;
  border: 2px solid hds.$color-bus;
  padding: hds.$spacing-xs hds.$spacing-s;
  font-weight: bold;
  text-decoration: none;
  color: hds.$color-bus;
  cursor: pointer;
  // Reset button styles
  appearance: none;
  background-color: transparent;
  text-transform: none;

  &:hover {
    background-color: hds.$color-bus;
    color: hds.$color-white;
  }

  &:focus-visible {
    outline: solid 3px hds.$color-bus;
    outline-offset: 2px;
  }
}
</style>

<template>
  <a :class="$style.component">
    <slot/>
  </a>
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

  &:hover {
    background-color: hds.$color-bus;
    color: hds.$color-white;
  }
}
</style>

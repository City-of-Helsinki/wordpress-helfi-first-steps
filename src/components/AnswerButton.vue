<template>
  <a :class="$style.component">
    <slot/>
    <span :class="$style.icon" />
  </a>
</template>

<script>
export default {

}
</script>

<style module lang="scss">
.component {
  display: flex;
  align-items: center;
  padding: hds.$spacing-s hds.$spacing-m;
  font-weight: bold;
  text-decoration: none;
  color: hds.$color-white;
  background-color: hds.$color-bus;
  cursor: pointer;

  .icon {
    @extend .hds-icon;
    @extend .hds-icon--size-s;
    @extend .hds-icon--arrow-right;

    margin-left: auto;
    transform: translateX(0);
    transition: transform 0.2s ease-in-out;
  }

  &:hover .icon {
    transform: translateX(5px);
  }
}
</style>

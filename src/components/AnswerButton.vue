<template>
  <button :class="$style.component">
    <slot/>
    <span :class="$style.icon" />
  </button>
</template>

<script>
export default {

}
</script>

<style module lang="scss">
@use '~hds-core/lib/icons/icon';
@use '~hds-core/lib/icons/ui/icon-arrow-right';

.component {
  display: flex;
  align-items: center;
  padding: hds.$spacing-s hds.$spacing-m;
  font-weight: bold;
  text-decoration: none;
  color: hds.$color-white;
  background-color: hds.$color-bus;
  cursor: pointer;
  // Reset button styles
  appearance: none;
  text-transform: none;
  border: 0;

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

  &:hover {
    background-color: hds.$color-bus;
  }

  &:focus-visible {
    outline: solid 3px hds.$color-bus;
    outline-offset: 2px;
  }
}
</style>

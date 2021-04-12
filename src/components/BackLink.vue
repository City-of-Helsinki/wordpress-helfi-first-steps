<template>
  <a :class="$style.component">
    <span :class="$style.icon" />
    <slot/>
  </a>
</template>

<script>
export default {

}
</script>

<style module lang="scss">
@use '~hds-core/lib/icons/icon';
@use '~hds-core/lib/icons/ui/icon-arrow-left';

.component {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: hds.$fontsize-body-xl;
  color: hds.$color-black-30;
  cursor: pointer;
  user-select: none;

  .icon {
    @extend .hds-icon;
    @extend .hds-icon--size-s;
    @extend .hds-icon--arrow-left;

    margin-right: hds.$spacing-xs;
    transform: translateX(0);
    transition: transform 0.2s ease-in-out;
  }

  &:hover .icon {
    transform: translateX(-5px);
  }
}

</style>

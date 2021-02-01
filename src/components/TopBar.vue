<template>
  <div :class="$style.component">
    <img :src="$options.logoUrl" :class="$style.logo" />
    <div :class="$style.title">
      Welcome guide
    </div>
  </div>
</template>

<script>
import logoUrl from '@/assets/images/helsinki-fi.svg'

// TODO: use inline svg for logo and remove filter

export default {
  logoUrl
}
</script>

<style module lang="scss">
@use "~hds-design-tokens/lib/all" as hds;

.component {
  display: flex;
  align-items: center;
  padding: hds.$spacing-s;
  background-color: hds.$color-copper-dark;

  .logo {
    display: inline-block;
    margin-right: hds.$spacing-m;
    height: 40px;
    filter: invert(1) brightness(100);
  }

  .title {
    display: inline-block;
    line-height: 40px;
    font-size: hds.$fontsize-heading-m;
    font-weight: bold;
    color: white;
  }
}
</style>

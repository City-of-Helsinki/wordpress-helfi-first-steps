<template>
  <div :class="$style.component">
    <div :class="$style.content">
      <div>
        <slot/>
      </div>
      <KoroBorder color="#e6f4ff" bottom />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style module lang="scss">
.component {
  padding-bottom: 50px;
}

.content {
  position: relative;
  padding: hds.$spacing-l hds.$spacing-s;
  background-color: hds.$color-coat-of-arms-light;
}
</style>

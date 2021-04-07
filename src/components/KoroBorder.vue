<template>
  <div :class="[$style.component, top && $style.top, bottom && $style.bottom]">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="50">
      <defs>
        <pattern id="pattern" x="0" y="0" width="106" height="50" patternUnits="userSpaceOnUse" :fill="color">
          <path transform="scale(5.3)" d="M0,800h20V0c-5.1,0-5.1,6.4-10,6.4S4.9,0,0,0V800z"></path>
        </pattern>
      </defs>
      <rect fill="url(#pattern)" width="100%" height="50"></rect>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    top: {type: Boolean, required: false},
    bottom: {type: Boolean, required: false},
    color: {type: String, required: false, default: '#000000'}
  }
}
</script>

<style module lang="scss">
.component {
  position: absolute;
  left: 0;
  right: 0;
  height: 50px;

  &.bottom {
    bottom: 0;
    transform: scaleY(-1) translateY(-100%);
  }

  &.top {
    top: -50px;
  }
}
</style>

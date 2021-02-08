<template>
  <div>
    <div :class="$style.section">
      <h2>
        Digital and Population Data Services Agency (maistraatti)
      </h2>
      <CheckListItem>
        <span slot="heading">Register an address</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt
          ornare massa eget. Tristique senectus et netus et. Feugiat pretium nibh
          ipsum consequat nisl vel pretium lectus quam. Nunc consequat interdum
          varius sit amet. Justo donec enim diam vulputate ut pharetra.
        </p>
      </CheckListItem>
      <CheckListItem>
        <span slot="heading">Apply for a Finnish personal identity code</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt
          ornare massa eget. Tristique senectus et netus et. Feugiat pretium nibh
          ipsum consequat nisl vel pretium lectus quam. Nunc consequat interdum
          varius sit amet. Justo donec enim diam vulputate ut pharetra.
        </p>
      </CheckListItem>
    </div>
    <div :class="$style.section">
      <h2>
        Tax Administration
      </h2>
      <CheckListItem>
        <span slot="heading">Contact the Tax Administration</span>
        <p>
          Contact the Tax Administration (international taxation) at International House Helsinki. You need to bring along the following documents:
          <ul>
            <li>A passport or a valid photo ID</li>
            <li>an employment contract or a business ID (if you are an
            entrepreneur and if you already have one)</li>
          </ul>
          Opening hours: Mon–Fri 9:00–16:00
        </p>
      </CheckListItem>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style module lang="scss">
.section {
  & + & {
    margin-top: hds.$spacing-l;
  }
}
</style>

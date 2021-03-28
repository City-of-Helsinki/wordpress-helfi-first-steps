<template>
  <div>
    <div
      v-for="(section, index) in sections"
      :key="index"
      :class="$style.section">
      <h2 v-if="section.title">
        {{ section.title }}
      </h2>
      <CheckListItem
        v-for="item in section.items"
        :key="item.id"
      >
        <span
          v-if="item.heading"
          slot="heading"
        >
          {{ item.heading }}
        </span>
        <div v-html="item.content.html" />
      </CheckListItem>
    </div>
  </div>
</template>

<script>
import {computed} from '@vue/composition-api'

export default {
  props: {
    items: {
      type: Array,
      validator (items) {
        if (!Array.isArray(items)) return false
        if (items.find(item => !item.content || !item.content.html)) return false
        return true
      }
    }
  },
  setup (props) {
    const sections = computed(() => {
      const sections = [{
        title: null,
        items: []
      }]
      for (const item of props.items) {
        if (!sections.find(section => section.title === item.topic)) {
          sections.push({
            title: item.topic,
            items: []
          })
        }
        sections.find(section => section.title === item.topic).items.push(item)
      }
      return sections
    })
    return {
      sections
    }
  }
}
</script>

<style module lang="scss">
.section {
  & + & {
    margin-top: hds.$spacing-l;
  }
}
</style>

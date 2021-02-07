import Vue from 'vue'

const components = require.context('@/components', true)
components.keys().forEach(key => {
  const componentConfig = components(key)
  const componentName = key.split('/').pop().replace(/\.\w+$/, '')
  const component = componentConfig.default || componentConfig
  Vue.component(componentName, component)
})

import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import App from './App'
import router from '../router'

import '../register-global-components'

Vue.use(VueCompositionApi)

export {App as component}
export function mount (opts) {
  new Vue({
    router,
    render (createElement) {
      return createElement(App, {
        props: opts.props,
        on: opts.on,
        pdfBaseUrl: opts.pdfBaseUrl
      })
    }
  }).$mount(opts.el)
}

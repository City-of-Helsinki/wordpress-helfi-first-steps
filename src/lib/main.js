/* global Vue */

import App from './App'
import router from '../router'

import '../register-global-components'

export {App as component}
export function mount (opts) {
  new Vue({
    router,
    render (createElement) {
      return createElement(App, {
        props: opts.props,
        on: opts.on
      })
    }
  }).$mount(opts.el)
}

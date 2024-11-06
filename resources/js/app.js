// import './bootstrap';

import { createApp, h } from 'vue'
import { createInertiaApp, Link } from '@inertiajs/vue3'
import NProgress from 'nprogress'
import { router } from '@inertiajs/vue3'
import Layout from './Shared/Layout.vue'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    let page = pages[`./Pages/${name}.vue`]
    page.default.layout = page.default.layout || Layout
    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component('Link', Link)
      .mount(el)
  },
  progress: {
    color: 'red',
    showSpinner: true,
  }
})

router.on('start', () => NProgress.start())
router.on('finish', () => NProgress.done())


// npm install @inertiajs/vue3
// npm i vue@latest
// npm i @vitejs/plugin-vue
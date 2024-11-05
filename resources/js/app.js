// import './bootstrap';

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import NProgress from 'nprogress'
import { router } from '@inertiajs/vue3'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    return pages[`./Pages/${name}.vue`]
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
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
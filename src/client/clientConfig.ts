import {defineClientConfig} from '@vuepress/client'
// @ts-ignore
import CodeSwitcher from '../../components/CodeSwitcher.vue'

export default defineClientConfig({
    enhance({app}) {
        app.component('CodeSwitcher', CodeSwitcher)
    },
})

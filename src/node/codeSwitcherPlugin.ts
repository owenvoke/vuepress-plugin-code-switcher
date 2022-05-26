import type {Page, Plugin} from '@vuepress/core'
import {path} from '@vuepress/utils'
import {CodeSwitcherOptions} from '../shared';

export const codeSwitcherPlugin = (options: CodeSwitcherOptions): Plugin => ({
    name: 'vuepress-plugin-code-switcher',
    clientConfigFile: path.resolve(__dirname, '../client/clientConfig.js'),
    extendsPage: (page: Page): void => {
        // @ts-ignore
        page.codeSwitcherOptions = options
    }
})

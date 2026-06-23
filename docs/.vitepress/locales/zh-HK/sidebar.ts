import { DefaultTheme } from 'vitepress'
import { genMarkdowDocs } from '../../theme/utils/gen'

const lang = 'zh-HK'
const docsSidebar = genMarkdowDocs(lang, 'docs')

function withoutStandaloneAiTooling(items: DefaultTheme.SidebarItem[]): DefaultTheme.SidebarItem[] {
  return items.filter((item) => item.link !== '/docs/mcp')
}

export const sidebar: DefaultTheme.Sidebar = {
  [`/${lang}`]: { base: `/${lang}`, items: withoutStandaloneAiTooling(docsSidebar()) },
}

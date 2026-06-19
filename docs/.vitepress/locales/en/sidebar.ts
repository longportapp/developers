import { DefaultTheme } from 'vitepress'
import { genMarkdowDocs } from '../../theme/utils/gen'

const docsSidebar = genMarkdowDocs('en', 'docs')

function withoutStandaloneAiTooling(items: DefaultTheme.SidebarItem[]): DefaultTheme.SidebarItem[] {
  return items.filter((item) => item.link !== '/docs/cli' && item.link !== '/docs/mcp')
}

export const sidebar: DefaultTheme.Sidebar = withoutStandaloneAiTooling(docsSidebar())

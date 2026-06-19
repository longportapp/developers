import type { DefaultTheme } from 'vitepress'

export const nav = (): DefaultTheme.NavItem[] => {
  return [
    { text: 'Skill', link: '/skill', activeMatch: '^(/en)?/skill' },
    { text: 'CLI', link: '/docs/cli', activeMatch: '^(/en)?/docs/cli' },
    { text: 'MCP', link: '/docs/mcp', activeMatch: '^(/en)?/docs/mcp' },
    { text: 'SDK', link: '/sdk', activeMatch: '^(/en)?/sdk' },
    { text: 'Docs', link: '/docs', activeMatch: `^(/en)?/docs(?!/(cli|mcp))` },
  ]
}

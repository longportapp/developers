import { provide } from 'vue'
import { createHighlighter } from 'shiki/bundle/web'

// 模块级单例：SSG 渲染每个页面都会重新执行 Layout setup，
// 若在 setup 内创建会产生每页一个 Shiki 实例导致构建 OOM
let highlighterPromise: ReturnType<typeof createHighlighter> | undefined

export function useHighlighter() {
  highlighterPromise ??= createHighlighter({
    themes: ['vitesse-dark', 'vitesse-light'],
    langs: ['json'],
  })

  // 提供全局的代码高亮器
  provide('highlighter', highlighterPromise)

  return {
    highlighter: highlighterPromise,
  }
}

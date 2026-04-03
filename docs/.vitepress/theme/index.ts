import { watch, nextTick } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useRouter } from 'vitepress'

// @ts-ignore
import './custom.css'

/**
 * 触发指定元素的重新渲染动画
 * 通过强制重绘（Reflow）实现单页面应用中的 CSS 动画重置
 */
function triggerReflowAnimation(selector: string) {
  const el = document.querySelector(selector)
  if (el instanceof HTMLElement) {
    el.style.animation = 'none'
    void el.offsetHeight // 核心：强制重绘
    el.style.animation = ''
  }
}

export default {
  extends: DefaultTheme,
  setup() {
    const router = useRouter()

    // 仅在客户端环境运行
    if (typeof window !== 'undefined') {
      watch(
        () => router.route.path,
        () => {
          nextTick(() => triggerReflowAnimation('.vp-doc'))
        }
      )
    }
  }
} satisfies Theme
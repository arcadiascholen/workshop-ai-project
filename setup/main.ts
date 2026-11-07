import { defineAppSetup } from '@slidev/types'
import '../design-system/tokens.css'
import '../design-system/components/bundle.css'

// Slidev zet het thema met een klasse op <html>, het design system leest data-theme.
export default defineAppSetup(() => {
  if (typeof document === 'undefined') return
  const html = document.documentElement
  const sync = () => html.setAttribute('data-theme', html.classList.contains('dark') ? 'dark' : 'light')
  sync()
  new MutationObserver(sync).observe(html, { attributes: true, attributeFilter: ['class'] })
})

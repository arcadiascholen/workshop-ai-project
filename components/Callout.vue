<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'tip' | 'ai' | 'warning'
  title?: string
}>(), { variant: 'tip', title: 'Tip' })
</script>

<template>
  <div class="ai-callout" :class="{ 'ai-callout--ai': props.variant === 'ai', 'ai-callout--warning': props.variant === 'warning' }">
    <svg class="ai-icon" viewBox="0 0 24 24" aria-hidden="true">
      <g v-if="props.variant === 'ai'"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="3.5" r="1.5"/><circle cx="12" cy="20.5" r="1.5"/><circle cx="3.5" cy="12" r="1.5"/><circle cx="20.5" cy="12" r="1.5"/><path d="M12 5v4M12 15v4M5 12h4M15 12h4"/></g>
      <g v-else-if="props.variant === 'warning'"><path d="M12 3l9.5 17h-19z"/><path d="M12 10v4M12 17.5v.5"/></g>
      <g v-else><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/></g>
    </svg>
    <div>
      <p class="ai-callout__title">{{ props.title }}</p>
      <p><slot /></p>
    </div>
  </div>
</template>

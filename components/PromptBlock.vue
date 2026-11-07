<script setup lang="ts">
import { ref } from 'vue'

withDefaults(defineProps<{ label?: string }>(), { label: 'Prompt' })

const body = ref<HTMLElement>()
const copied = ref(false)

async function copy() {
  await navigator.clipboard.writeText(body.value?.textContent?.trim() ?? '')
  copied.value = true
  setTimeout(() => { copied.value = false }, 1500)
}
</script>

<template>
  <div class="ai-prompt">
    <div class="ai-prompt__bar">
      <span class="ai-prompt__label">{{ label }}</span>
      <button type="button" class="ai-prompt__copy" :data-copied="copied || undefined" @click="copy">
        <svg class="ai-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 0 1 1-1h10"/></svg>
        {{ copied ? 'Gekopieerd' : 'Kopieer' }}
      </button>
    </div>
    <pre ref="body" class="ai-prompt__body"><slot /></pre>
  </div>
</template>

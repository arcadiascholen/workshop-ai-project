<template>
  <div class="slidev-layout section">
    <p v-if="$frontmatter.eyebrow" class="ai-eyebrow">{{ $frontmatter.eyebrow }}</p>
    <slot />
  </div>
</template>

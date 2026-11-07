<script setup lang="ts">
import logo from '../design-system/assets/Logos/arcadia-logo.svg'
import logoDark from '../design-system/assets/Logos/arcadia-logo-dark.svg'
</script>

<template>
  <div class="slidev-layout cover">
    <img class="ai-logo--light cover__logo" :src="logo" alt="Arcadia">
    <img class="ai-logo--dark cover__logo" :src="logoDark" alt="Arcadia">
    <div class="cover__main">
      <div class="cover__text"><slot /></div>
      <AiNet class="cover__art" />
    </div>
  </div>
</template>

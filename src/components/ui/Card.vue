<template>
  <div class="bg-surface border-default rounded-md border p-6 shadow-sm">
    <slot name="header">
      <h2 class="text-brand mb-2 text-lg font-semibold">
        {{ title }}
      </h2>
    </slot>

    <div class="text-muted text-sm">
      <slot />
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      default: 'Card Title'
    }
  });
</script>

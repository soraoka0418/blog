<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="my-3">
    <h2 class="mb-2">{{ title }}</h2>
    <v-divider />
  </div>
</template>

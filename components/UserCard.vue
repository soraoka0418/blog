<script lang="ts" setup>
defineProps<{
  name: string;
  email: string;
}>();
</script>

<template>
  <v-card class="pa-3">
    <v-card-title>{{ name }}</v-card-title>
    <v-card-text>{{ email }}</v-card-text>
  </v-card>
</template>

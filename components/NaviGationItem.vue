<script setup lang="ts">
defineProps<{
  items: {
    link: string;
    icon: string;
  }[];
}>();
</script>

<template>
  <template v-for="item in items">
    <v-btn :to="item.link" class="mr-2">
      <v-icon> {{ item.icon }} </v-icon>
    </v-btn>
  </template>
</template>

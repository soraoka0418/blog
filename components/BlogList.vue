<script setup lang="ts">
defineProps<{
  blogs: {
    id: string;
    title: string;
  }[];
}>();
</script>

<template>
  <v-row>
    <template v-for="blog in blogs">
      <v-col cols="12" sm="4">
        <nuxt-link :to="`/${blog.id}`">
          <v-card height="150px" class="pa-5 ma-2">
            <v-card-text>{{ blog.title }}</v-card-text>
          </v-card>
        </nuxt-link>
      </v-col>
    </template>
  </v-row>
</template>

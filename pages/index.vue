<script setup>
const config = useRuntimeConfig();
const { data } = await useFetch("/blogs", {
  baseURL: config.baseURL,
  headers: {
    "X-MICROCMS-API-KEY": config.apiKey,
  },
});
</script>

<template>
  <v-row dense>
    <v-col cols="4">
      <template v-for="article in data.contents" :key="article.id">
        <nuxt-link :to="`/${article.id}`">
          <v-card class="pa-5">
            <v-card-text>{{ article.title }}</v-card-text>
          </v-card>
        </nuxt-link>
      </template>
    </v-col>
  </v-row>
</template>

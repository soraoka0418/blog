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
  <v-container>
    <v-row no-gutters>
      <template v-for="article in data.contents" :key="article.id">
        <v-col cols="12" sm="4">
          <nuxt-link :to="`/${article.id}`">
            <v-card height="150px" class="pa-5 ma-2">
              <v-card-text>{{ article.title }}</v-card-text>
            </v-card>
          </nuxt-link>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

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
  <BasePageTitle title="Learn MicroCMS" />
  <BlogList :blogs="data.contents" />
</template>

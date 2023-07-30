<script setup lang="ts">
const navItem = [
  {
    link: "/",
    icon: "mdi-book",
  },
  {
    link: "/user",
    icon: "mdi-account",
  },
  {
    link: "/count",
    icon: "mdi-counter",
  },
];
</script>
<template>
  <v-app-bar color="primary">
    <v-app-bar-title> Learn Nuxt3 </v-app-bar-title>
    <template v-slot:append>
      <NaviGationItem :items="navItem" />
    </template>
  </v-app-bar>
</template>

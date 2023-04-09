<script setup></script>
<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-title> Learn Nuxt3 </v-app-bar-title>
      <template v-slot:append>
        <v-btn :to="'/'" class="mr-2">
          <v-icon> mdi-book </v-icon>
        </v-btn>
        <v-btn :to="'/user'" class="mr-2">
          <v-icon> mdi-account </v-icon>
        </v-btn>
        <v-btn :to="'/count'" class="mr-2">
          <v-icon>mdi-counter </v-icon>
        </v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>

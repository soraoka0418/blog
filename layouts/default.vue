<script setup></script>
<template>
  <v-app>
    <v-app-bar color="primary">
      <!-- <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template> -->
      <v-app-bar-title> Nuxt3 Practice </v-app-bar-title>
      <template v-slot:append>
        <v-btn :to="'/'" class="mr-2">
          <v-icon> mdi-home </v-icon>
        </v-btn>
        <v-btn :to="'/user'">
          <v-icon> mdi-account </v-icon>
        </v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>

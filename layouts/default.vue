<script setup></script>
<template>
  <v-app>
    <v-app-bar color="primary">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title> Sora Blog </v-app-bar-title>
      <template v-slot:append>
        <v-btn :to="'/'">
          <v-icon> mdi-home </v-icon>
        </v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>

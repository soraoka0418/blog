<script lang="ts" setup>
defineProps<{}>();

const { count, increment, decrement, doubleCount } = useCounter();
</script>

<template>
  <v-card>
    <v-card-title class="my-5"> count: {{ count }} </v-card-title>
    <v-card-subtitle class="my-5">
      double count: {{ doubleCount }}
    </v-card-subtitle>

    <v-divider />
    <div class="d-flex justify-space-around my-5">
      <v-btn color="primary" :elevation="0" @click="increment">+</v-btn>
      <v-btn color="primary" :elevation="0" @click="decrement">-</v-btn>
    </div>
  </v-card>
</template>

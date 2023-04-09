<script setup>
const { count, increment, decrement, doubleCount } = useCounter();
</script>

<template>
  <v-container>
    <h3 class="my-5">Global counter</h3>
    <v-card width="350">
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

    <v-btn class="mt-5" color="primary" :to="'/count'" :elevation="0">
      Back
    </v-btn>
  </v-container>
</template>

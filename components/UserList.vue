<script setup lang="ts">
defineProps<{
  users: {
    name: string;
    email: string;
  }[];
}>();
</script>

<template>
  <h3>user List</h3>
  <v-row>
    <template v-for="user in users" :key="user.id">
      <v-col cols="4">
        <UserCard :name="user.name" :email="user.email" />
      </v-col>
    </template>
  </v-row>
</template>

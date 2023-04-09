<script setup lang="ts">
// server/apiからのdataは型がついてる
const { data: users } = await useFetch("/api/users");

// setupのなかはvalue
// console.log(users.value);

// transform　オプション
const { data: userNames } = await useFetch("/api/users", {
  transform: (res) => {
    return res.map((user) => {
      return user.name.toUpperCase();
    });
  },
});

// console.log(userNames.value);
</script>

<template>
  <v-container>
    <h2>Learn Use Fetch</h2>
    <h3 class="mt-10">user List</h3>
    <v-row>
      <template v-for="user in users" :key="user.id">
        <v-col cols="4">
          <v-card class="pa-3">
            <v-card-title>{{ user.name }}</v-card-title>
            <v-v-card-text>{{ user.email }}</v-v-card-text>
          </v-card>
        </v-col>
      </template>
    </v-row>
    <h4 class="mt-10">Transform UpperCase UserName List</h4>
    <v-row>
      <template v-for="userName in userNames">
        <v-col cols="4">
          <v-card class="pa-3">
            <v-card-title>{{ userName }}</v-card-title>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

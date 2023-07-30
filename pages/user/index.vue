<script setup lang="ts">
const { data: users } = await useFetch("/api/users");
</script>

<template>
  <BasePageTitle title="Learn Use Fetch" />
  <UserList :users="users" />
</template>

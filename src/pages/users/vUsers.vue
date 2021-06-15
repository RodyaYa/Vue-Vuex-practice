<template>
  <h1>
    Users
    <ul>
      <router-link :key="link" v-for="link in 5" :to="`/users/${link}`" tag="li"
        >{{ link }} user</router-link
      >
    </ul>
  </h1>
</template>

<script>
export default {
  name: "users",
};
</script>

<style scoped></style>

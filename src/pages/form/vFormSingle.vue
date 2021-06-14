<template>
  <div>This is {{ id }} Form</div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  mounted() {},
};
</script>

<style scoped></style>

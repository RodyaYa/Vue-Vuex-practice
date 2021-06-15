<template>
  <div>
    <div class="btn back" @click="$router.go(-1)">Back</div>
    This is user with id: {{ id }}
  </div>
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

<style scoped lang="scss">
.btn {
  cursor: pointer;
  text-align: center;
  padding: 3px 5px;
  border: 1px solid #ccc;
  border-radius: 3px;

  &:hover {
    background-color: #eaeaea;
  }
  &.back {
  }
  transition: 0.15s;
}
</style>

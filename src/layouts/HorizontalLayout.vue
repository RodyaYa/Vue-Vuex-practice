<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <div class="container" style="justify-content: flex-start">
        <b-navbar-brand>MyApp</b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Pages" right>
            <router-link tag="b-dropdown-item" to="/gallery">
              Gallery
            </router-link>
            <router-link tag="b-dropdown-item" to="/users"> Users </router-link>
            <router-link tag="b-dropdown-item" to="/blog"> Blog </router-link>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </div>
    </b-navbar>
    <b-container class="pt-5">
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {
  name: "v-navbar",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss"></style>

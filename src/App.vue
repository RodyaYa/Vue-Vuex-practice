<template>
  <div id="app">
    <component :is="layout">
      <b-container>
        <router-view />
      </b-container>
    </component>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import EmptyLayout from "./layouts/EmptyLayout";
import HorizontalLayout from "./layouts/HorizontalLayout";

export default {
  name: "App",
  components: {
    EmptyLayout,
    HorizontalLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },
};
</script>

<style lang="scss">
#app {
  box-sizing: border-box;
  font-family: Roboto;
}

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}
::-webkit-scrollbar-thumb {
  background: #212529;
}
::-webkit-scrollbar-thumb:hover {
  background: #212529;
}
::-webkit-scrollbar-track {
  background: #ffffff;
  box-shadow: inset 7px 10px 12px #f0f0f0;
}

body,
html {
  margin: 0;
}

.container {
  display: flex;
  height: 100%;
}

.body {
  padding: 15px;
}
</style>

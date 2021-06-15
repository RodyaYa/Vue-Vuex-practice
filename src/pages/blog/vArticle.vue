<template>
  <div>
    <b-button variant="outline" class="mb-3" @click="$router.go(-1)"
      >Back to blog</b-button
    >
    <b-card header-tag="nav">
      <template #header>
        <b-nav card-header tabs>
          <b-nav-item :active="!showAuthor" @click="switchNav">
            <b-icon icon="card-text"></b-icon> Article
          </b-nav-item>
          <b-nav-item :active="showAuthor" @click="switchNav">
            <b-icon icon="person-fill"></b-icon> Author
          </b-nav-item>
        </b-nav>
      </template>

      <div v-if="!showAuthor">
        <b-card-title>
          {{ article.title }}
        </b-card-title>
        <b-card-text>
          {{ article.body }}
        </b-card-text>
      </div>

      <div v-else>
        <b-card-title>
          Post created by: <strong> {{ article.user.username }}</strong>
        </b-card-title>
        <b-card-sub-title> AKA: {{ article.user.name }}</b-card-sub-title>
        <b-list-group class="mt-3">
          <b-list-group-item>
            <small>Email:</small> {{ article.user.email }}
          </b-list-group-item>
        </b-list-group>

        <div class="d-flex justify-content-center mt-4">
          <b-button
            variant="outline-primary"
            :href="`https://${article.user.website}`"
            >Visit author website</b-button
          >
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import { blogService } from "../../services/api/blog.service";

export default {
  name: "vArticle.vue",
  methods: {
    switchNav() {
      this.showAuthor = !this.showAuthor;
    },
  },
  data() {
    return {
      showAuthor: false,
      article: {},
    };
  },
  async mounted() {
    this.article = await blogService.getArticle(this.$route.params.id);
    console.log(this.article);
  },
};
</script>

<style scoped></style>

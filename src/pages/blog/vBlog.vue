<template>
  <div class="posts-page" ref="posts">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h1>Blog</h1>
      <small
        >posts amount: <strong>{{ postsCount }}</strong></small
      >
    </div>
    <div class="grid-box">
      <div class="grid-list">
        <b-card
          class="grid-item"
          v-for="article in getPosts"
          :key="article.id"
          @click="pushToArticlePage(article.id)"
        >
          <b-card-title>{{ article.title }}</b-card-title>
          <b-card-text>{{ article.body }}</b-card-text>
        </b-card>
      </div>
    </div>
    <b-button variant="outline" @click="localeGetPosts">Загрузить еще</b-button>
  </div>
</template>

<script>
export default {
  computed: {
    getPosts() {
      return this.$store.getters.getPosts;
    },
    postsCount() {
      return this.$store.getters.postsCount;
    },
  },
  methods: {
    localeGetPosts() {
      this.$store.dispatch("increasePostsLimit", 10);
      this.$store.dispatch("fetchPosts");
    },
    pushToArticlePage(id) {
      this.$router.push({ path: `/blog/${id}` });
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  async mounted() {
    const listElem = this.$refs.posts;
    if (listElem) {
      listElem.addEventListener("scroll", () => {
        if (
          listElem.scrollTop + listElem.clientHeight >=
          listElem.scrollHeight
        ) {
          this.$store.dispatch("increasePostsLimit", 10);
          this.$store.dispatch("fetchPosts");
        }
      });
    }
    this.$store.dispatch("fetchPosts");
  },
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 1000px) {
  .grid-list {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

.grid-box {
}

.grid-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
}

.grid-item {
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }

  transition: 0.15s;
}

.posts-page {
  padding: 15px 40px;
  min-width: 100%;
}

.article {
  cursor: pointer;
  padding: 15px 25px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;

  &__title {
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: bold;
  }

  &__body {
    font-size: 1.2rem;
  }

  &:hover {
    transform: scale(1.01) translateY(-5px);
    box-shadow: #959da533 0 3px 15px;
  }

  transition: 0.15s;
}

.btn {
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  margin-top: 2rem;
  padding: 15px 35px;
  border-radius: 5px;
  border: 1px solid #ccc;

  &:hover {
    background-color: #ccc;
  }
}
</style>

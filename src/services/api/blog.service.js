import { default as axios } from "axios";
import { JSON_API } from "../../config/config";

export const blogService = {
  getPosts: async (limit) => {
    const responce = await axios.get(`${JSON_API}/posts?_limit=${limit || 5}`);

    if (responce.status === 200) {
      return responce.data;
    }
  },
  getArticle: async (id) => {
    const article = await axios.get(`${JSON_API}/posts/${id}`);

    let user;

    if (article.status === 200) {
      user = await axios.get(`${JSON_API}/users/${article.data.userId}`);
    }

    if (user.status === 200) {
      return { ...article.data, user: user.data };
    }
  },
};

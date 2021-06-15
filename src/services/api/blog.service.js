import { default as axios } from "axios";
//import API_URL from '../../config/config'

const API_URL = "https://jsonplaceholder.typicode.com";

export const blogService = {
  getPosts: async (limit) => {
    const responce = await axios.get(`${API_URL}/posts?_limit=${limit || 5}`);

    if (responce.status === 200) {
      return responce.data;
    }
  },
  getArticle: async (id) => {
    const article = await axios.get(`${API_URL}/posts/${id}`);

    let user;

    if (article.status === 200) {
      user = await axios.get(`${API_URL}/users/${article.data.userId}`);
    }

    if (user.status === 200) {
      return { ...article.data, user: user.data };
    }
  },
};

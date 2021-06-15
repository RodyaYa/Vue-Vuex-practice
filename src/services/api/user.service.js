import { default as axios } from "axios";
import { JSON_API } from "../../config/config.js";

export const userService = {
  getUsers: async (limit) => {
    const responce = await axios.get(`${JSON_API}/users?_limit=${limit || 5}`);

    if (responce.status === 200) {
      return responce.data;
    }
  },
};

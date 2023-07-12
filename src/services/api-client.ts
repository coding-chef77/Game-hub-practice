import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8932cb63331d450f965664cff847b0d6",
  },
});
import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "47bd3c14d913476484f550d918e7fc5f",
  },
});
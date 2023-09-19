import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    "key": "ccbc91bd351c40f6be4dbaee64556b63",
  },
});

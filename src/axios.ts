import axios from "axios";

export default axios.create({
  baseURL: " https://randomuser.me/api/",
  headers: {
    "Content-type": "application/json",
  },
});
//npm i axios
import axios from "axios";

export default axios.create({
  baseURL: "https://ghibliapi.vercel.app",
  headers: {
    "Content-type": "application/json"
  }
});
import axios from "axios";

const usersAPI = axios.create({
  baseURL: "http://localhost:4000",
});

export default usersAPI;

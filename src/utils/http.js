import axios from "axios";
const requerest = axios.create({
  baseURL: "http://localhost:3000", // 设置默认的 baseURL
  timeout: 5000, // 设置默认的 timeout
});

export default requerest;

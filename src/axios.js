import axios from "axios";

const instance = axios.create({
  baseURL: "https://complaintmanag.hopeforchildrentrust.org/api",
  // headers: {
  //   Authorization:
  //     "Bearer " +
  //     JSON.parse(localStorage.getItem("user"))?.data?.uniqueToken?.token,
  // },
});
export default instance;

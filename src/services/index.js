import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export function serviceClient() {
  const axiosClient = axios.create({
    baseURL: BASE_URL ?? ``,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return axiosClient;
}

export default serviceClient;

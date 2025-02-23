import axiosClient from "./index";

export async function fetchProducts(params) {
  const response = await axiosClient().get("/products", { params });
  return response.data;
}

import { ref } from "vue";
import { defineStore } from "pinia";
import { fetchProducts } from "@/services/products.js";
import { useCurrencyFormatter } from "@/composables/useCurrencyFormatter.js";

export const useProductsStore = defineStore("products", () => {
  const products = ref([]);
  const { formatCurrency } = useCurrencyFormatter();

  const loadProducts = async () => {
    if (products.value.length > 0) return; // Check if products already have value

    const _products = await fetchProducts();
    products.value = _products.map((product) => ({
      ...product,
      price: formatCurrency(product.price),
    }));
  };

  return { products, loadProducts };
});

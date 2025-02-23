import { ref } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);

  const addProductToCart = (product) => {
    const existingProduct = cart.value.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  };

  const removeProductFromCart = (productId) => {
    const productIndex = cart.value.findIndex((item) => item.id === productId);
    if (productIndex !== -1) {
      if (cart.value[productIndex].quantity > 1) {
        cart.value[productIndex].quantity -= 1;
      } else {
        cart.value.splice(productIndex, 1);
      }
    }
  };

  return { cart, addProductToCart, removeProductFromCart };
});

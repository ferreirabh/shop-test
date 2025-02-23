<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div
      v-for="product in products"
      :key="product.id"
      class="border rounded-lg p-4 shadow-md rounded-full"
    >
      <img
        :src="product.image"
        alt="Product Image"
        class="w-full h-48 object-contain mb-4 rounded-lg"
      />
      <h2 class="text-xl font-bold mb-2">{{ product.title }}</h2>
      <p class="text-sm mb-2">{{ product.description }}</p>
      <div class="flex items-center mb-2">
        <StarIcon v-for="n in Math.round(product.rating.rate)" :key="n" />
      </div>
      <p class="font-bold">{{ product.price }}</p>
      <button
        @click="addToCart(product)"
        class="mt-2 bg-blue-500 text-white py-1 px-4 rounded w-full flex justify-between items-center"
      >
        Add to Cart
        <span
          v-if="getProductQuantity(product.id)"
          class="bg-white text-blue-500 rounded-full px-2 py-1 text-xs"
        >
          {{ getProductQuantity(product.id) }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

import { useProductsStore } from "@/stores/products.js";
import { useCartStore } from "@/stores/cart.js";
import StarIcon from "@/components/icons/StarIcon.vue";

const productsStore = useProductsStore();
const cartStore = useCartStore();
const { products } = storeToRefs(productsStore);
const { cart } = storeToRefs(cartStore);

const addToCart = (product) => {
  cartStore.addProductToCart(product);
};

const getProductQuantity = (productId) => {
  const productInCart = cart.value.find((item) => item.id === productId);
  return productInCart ? productInCart.quantity : 0;
};

onMounted(async () => {
  await productsStore.loadProducts();
});
</script>

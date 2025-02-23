<template>
  <div>
    <h1 class="text-3xl font-bold my-4">Your Cart</h1>
    <ul>
      <li v-for="item in cart" :key="item.id" class="mb-4 border-b pb-4">
        <div class="flex justify-between items-center">
          <img
            :src="item.image"
            alt="Product Image"
            class="w-16 h-16 object-contain mr-4 rounded-full"
          />
          <div class="flex-1">
            <h2 class="text-lg">{{ item.title }}</h2>
            <p class="font-bold">{{ item.price }}</p>
            <p class="text-sm">Quantity: {{ item.quantity }}</p>
          </div>
          <button @click="removeFromCart(item.id)" class="py-1 px-4">
            <TrashIcon class="text-red-500" />
          </button>
        </div>
      </li>
    </ul>
    <button
      @click="confirmPurchase"
      class="mt-4 bg-green-500 text-white py-2 px-4 rounded"
    >
      Confirm Purchase
    </button>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "@/stores/cart.js";
import TrashIcon from "@/components/icons/TrashIcon.vue";

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const removeFromCart = (productId) => {
  cartStore.removeProductFromCart(productId);
};

const confirmPurchase = () => {
  alert("Purchase confirmed!");
  // Add your purchase confirmation logic here
};
</script>

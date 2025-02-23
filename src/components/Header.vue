<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useCartStore } from "@/stores/cart.js";
import CartIcon from "./icons/CartIcon.vue";

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const cartItemCount = computed(() => {
  return cart.value.reduce((total, item) => total + item.quantity, 0);
});
</script>

<template>
  <header class="bg-blue-500 text-white p-4 flex justify-between items-center">
    <div>
      <RouterLink to="/products">
        <h1 class="text-2xl">Shop Test</h1>
      </RouterLink>
    </div>
    <RouterLink to="/cart">
      <CartIcon :cartItemCount="cartItemCount" />
    </RouterLink>
  </header>
</template>

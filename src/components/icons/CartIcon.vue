<template>
  <div class="relative">
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9"
      ></path>
    </svg>
    <span
      v-if="cartItemCount"
      class="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
      >{{ cartItemCount }}</span
    >
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  cartItemCount: {
    type: Number,
    required: true,
  },
});
</script>

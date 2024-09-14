<script setup>
// import { RouterLink } from "vue-router"; // No more needed for Vue 3 with VueRouter 4, already registered globally
import RouterLinkBtn from "../components/UI/RouterLinkBtn.vue";
import Heading from "@/components/UI/Heading.vue";

defineProps({
  title: {
    type: String,
  },
});
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLinkBtn toLink="new-user"> Add new user </RouterLinkBtn>
    </div>
    <Heading>{{ title }}</Heading>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  user: {
    type: Object,
  },
});

const emits = defineEmits(["c-update-active", "c-delete-user"]);

const userName = computed(() => {
  return `${props.user.lastName}, ${props.user.userName}`;
});

const statusText = computed(() => {
  return props.user.active;
});
</script>

<template>
  <tr>
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
      <p class="font-medium text-gray-900">
        {{ userName }}
      </p>
      <p class="text-gray-500">{{ props.user.email }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <p class="text-gray-900 font-bold">{{ props.user.company }}</p>
      <p class="text-gray-600">{{ props.user.jobTitle }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm">
      <label class="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          class="sr-only peer"
          :checked="props.user.active"
          @change="
            emits('c-update-active', {
              id: props.user.id,
              active: props.user.active,
            })
          "
        />
        <div
          class="relative w-11 h-6 bg-red-500 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 peer-checked:peer-focus:ring-green-300 peer-checked:dark:peer-focus:ring-green-800"
        ></div>
        <span
          class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          >{{ statusText ? "Active" : "Inactive" }}</span
        >
      </label>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <RouterLink
        :to="{ name: 'edit-user', params: { id: props.user.id } }"
        class="text-blue-400 hover:text-blue-500 mr-5"
        >Modify
      </RouterLink>
      <button
        class="text-red-500 hover:text-red-600"
        @click="emits('c-delete-user', props.user.id)"
      >
        Delete
      </button>
    </td>
  </tr>
</template>

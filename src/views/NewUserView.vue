<script setup>
import { FormKit } from "@formkit/vue";
import RouterLinkBtn from "../components/UI/RouterLinkBtn.vue";
import Heading from "@/components/UI/Heading.vue";

defineProps({
  title: {
    type: String,
  },
});

const handleClientSubmit = () => {
  // Formkit implements preventDefault() by default
  console.log("Warding...");
};
</script>

<template>
  <div>
    <div class="flex justify-end">
      <!-- <RouterLink to="/new-user">  -->
      <RouterLinkBtn toLink="home"> Back to Users list </RouterLinkBtn>
    </div>
    <Heading>{{ title }}</Heading>
    <!-- <h1 class="text-4xl font-extrabold text-gray-500">Add New User</h1> -->

    <div class="mx-auto mt-10 bg-gray-100 shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit
          type="form"
          submit-label="Add Client"
          :submit-attrs="{
            help: 'Click to save the user',
          }"
          @submit="handleClientSubmit"
        >
          <FormKit
            type="text"
            label="Name"
            placeholder="User name"
            validation="required"
            :validation-messages="{ required: 'User name is required' }"
            validation-visibility="submit"
          />
          <FormKit
            type="text"
            label="Last Name"
            placeholder="Last Name"
            validation="required"
            :validation-messages="{ required: 'User Last Name is required' }"
            validation-visibility="submit"
          />
          <FormKit
            type="email"
            label="Email"
            placeholder="Email"
            validation="required|email"
            :validation-messages="{ required: 'User Email is required' }"
            validation-visibility="submit"
          />
          <FormKit
            type="text"
            label="Phone #"
            placeholder="Phone: XXX-XXX-XXXX"
            validation="required|matches:/^\d{3}-\d{3}-\d{4}$/"
            :validation-messages="{ required: 'Phone # is required' }"
            validation-visibility="submit"
          />
          <FormKit type="text" label="Company" placeholder="Company" />
          <FormKit type="text" label="Job Title" placeholder="Job Title" />
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style>
.formkit-wrapper {
  max-width: 100%;
}
</style>

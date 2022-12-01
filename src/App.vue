<template>
  <div class="w-1/2 m-auto mt-24">
    <Button primary outline disclosure small @click="clickListener"
      >Button
      <template #icon>
        <font-awesome-icon :icon="['fa-regular', 'fa-circle']" size="xl" />
      </template>
    </Button>
  </div>
</template>
<script setup>
import Button from "./components/BaseButton.vue";
const clickListener = (event) => {
  console.log(event);
};
</script>

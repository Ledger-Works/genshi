<template>
  <div class="light inter-100">
    <Header
      type="large"
      leading-icon="arrow_back"
      :traling-icons="['attach_file', 'person', 'more_vert']"
      class="my-header"
    >
      <template #headline>
        Hello World
      </template>
    </Header>
  </div>
</template>

<script setup lang="ts">
import Header from 'material/TopBar';
</script>

<style>
/* Your styles here */
.my-header {
  background-color: beige;
}
</style>
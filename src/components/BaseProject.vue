<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="templateProject">
    <h1>{{ label }}</h1>
    <img :src="source" :alt="label" />
    <p>{{ detail }}</p>
  </div>
</template>

<style>
.templateProject h1 {
  text-align: center;
}

.templateProject img {
  width: 50%;
  display: block;
  margin: auto;
}

.templateProject p {
  text-align: center;
}
</style>

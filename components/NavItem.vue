<template>
  <li class="nav-item px-4 py-2.5 hover:bg-green-500 rounded">
    <NuxtLink class="nav-link flex flex-row" :to="to">
      <div class="w-8 mr-2">
        <font-awesome-icon :icon="icon" class="text-xl" />
      </div>
      <div>
        <span class="nav-link-text">{{ title }}</span>
      </div>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>

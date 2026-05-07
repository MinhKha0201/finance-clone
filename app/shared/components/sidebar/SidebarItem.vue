<script lang="ts" setup>
import type { SidebarItemType } from "~/shared/type";

const props = defineProps<{
  route: SidebarItemType;
}>();
</script>
<template>
  <NuxtLink
    :to="route.path"
    class="p-2 rounded-md font-medium hover:bg-muted"
    active-class="bg-muted text-primary"
  >
    {{ route.title }}
  </NuxtLink>
</template>

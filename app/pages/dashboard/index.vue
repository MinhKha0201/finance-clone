<script lang="ts" setup>
import { LayoutDashboard } from "lucide-vue-next";

definePageMeta({
  auth: true,
  sidebar: true,
  order: 1,
  title: "Dashboard",
  icon: LayoutDashboard,
});

useSeoMeta({
  title: "Dashboard",
});
</script>
<template>
  <div>dashboard</div>
</template>

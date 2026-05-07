<script lang="ts" setup>
import "vue-sonner/style.css";
import { Toaster } from "@/shared/components/ui/sonner";
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Toaster richColors />
  </div>
</template>

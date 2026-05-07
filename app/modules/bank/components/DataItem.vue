<script lang="ts" setup>
import { ArrowDown, ArrowUp } from "lucide-vue-next";
</script>
<template>
  <div class="flex items-center gap-1">
    <slot>
      <div class="w-2 h-2 rounded-full bg-primary"></div>
    </slot>
    <span class="text-xs text-foreground/50">TikTok</span>
    <span class="font-medium">đ18.39B</span>
    <div
      class="text-[10px] font-medium flex items-center gap-0.5 bg-red-100 px-1 rounded text-red-500"
    >
      <ArrowDown :size="12" /> 14.0%
    </div>
    <div
      class="text-[10px] font-medium flex items-center gap-0.5 bg-green-100 px-1 rounded text-green-500"
    >
      <ArrowUp :size="12" /> 14.0%
    </div>
  </div>
</template>

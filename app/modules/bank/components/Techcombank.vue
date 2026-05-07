<script lang="ts" setup>
import BaseBadge from "~/shared/components/base/BaseBadge.vue";
import { Separator } from "~/shared/components/ui/separator";
</script>
<template>
  <div>
    <div class="flex items-center gap-2">
      <div class="w-1 h-10 rounded bg-primary"></div>
      <div class="flex-1 flex-col">
        <p class="font-medium">Techcombank</p>
        <span class="text-[10px] text-foreground/50">2TK·VNĐ</span>
      </div>
      <BaseBadge>Online</BaseBadge>
    </div>
    <Separator class="my-2" />
    <div class="text-xs flex flex-col gap-2">
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 rounded-full bg-blue-500"></div>
        <p class="flex-1">VNĐ</p>
        <span>₫575,758,511</span>
      </div>
    </div>
    <Separator class="my-2" />
    <div class="grid grid-cols-3 text-xs text-foreground/50">
      <div class="flex flex-col gap-2">
        <span>NVL-TCB</span>
        <span>NTLINH-TCB</span>
      </div>
      <div class="flex flex-col gap-2 items-center">
        <span>Nguyễn Văn Ly</span>
        <span>Ng.T.Lĩnh</span>
      </div>
      <div class="flex flex-col gap-2 items-end text-green-500">
        <span>₫338,963,557</span>
        <span>₫236,794,954</span>
      </div>
    </div>
    <Separator class="my-2" />
    <div class="grid grid-cols-3 text-xs text-foreground/50">
      <div class="flex flex-col items-center">
        <span>USD</span>
        <span class="text-foreground font-medium">$530K</span>
      </div>
      <div class="flex flex-col items-center">
        <span>SGD</span>
        <span class="text-foreground font-medium">S$444K</span>
      </div>
      <div class="flex flex-col items-center">
        <span>VNĐ</span>
        <span class="text-foreground font-medium">₫8.9B</span>
      </div>
    </div>
  </div>
</template>

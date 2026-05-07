<script lang="ts" setup>
import BaseBadge from "~/shared/components/base/BaseBadge.vue";
import { Separator } from "~/shared/components/ui/separator";
</script>
<template>
  <div>
    <div class="flex items-center gap-2">
      <div class="w-1 h-10 rounded bg-primary"></div>
      <div class="flex-1 flex-col">
        <p class="font-medium">PingPongX</p>
        <span class="text-[10px] text-foreground/50">5TK·USD·SGD </span>
      </div>
      <BaseBadge>Online</BaseBadge>
    </div>
    <Separator class="my-2" />
    <div>
      <div class="flex justify-between">
        USD
        <div class="flex flex-col items-end">
          <p class="text-green-500">$530,542.91</p>
          <span class="text-[10px] text-foreground/50">4 tài khoản</span>
        </div>
      </div>
      <div class="flex justify-between mt-2">
        SGD
        <div class="flex flex-col items-end">
          <p class="text-yellow-500">S$0.69</p>
          <span class="text-[10px] text-red-500">Gần cạn</span>
        </div>
      </div>
    </div>
    <Separator class="my-2" />
    <div class="grid grid-cols-3 text-xs text-foreground/50">
      <div class="flex flex-col">
        <span>LNPP</span>
        <span>TNPP</span>
        <span>TLPP</span>
        <span>TLNPP</span>
        <span>LD-PIPO</span>
      </div>
      <div class="flex flex-col items-center">
        <span>LNPP</span>
        <span>TNPP</span>
        <span>TLPP</span>
        <span>TLNPP</span>
        <span>LD-PIPO</span>
      </div>
      <div class="flex flex-col items-end text-green-500">
        <span>$100,932</span>
        <span>$172,983</span>
        <span>$112,625</span>
        <span>$112,102</span>
        <span>$31,371</span>
      </div>
    </div>
    <Separator class="my-2" />
    <div class="grid grid-cols-3 text-xs text-foreground/50">
      <div class="flex flex-col items-center">
        <span>USD</span>
        <span class="text-foreground font-medium">$530K</span>
      </div>
      <div class="flex flex-col items-center">
        <span>VNĐ</span>
        <span class="text-foreground font-medium">₫13.44B</span>
      </div>
      <div class="flex flex-col items-center">
        <span>TK</span>
        <span class="text-foreground font-medium">5</span>
      </div>
    </div>
  </div>
</template>

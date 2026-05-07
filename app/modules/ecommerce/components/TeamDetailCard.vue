<script lang="ts" setup>
import BaseBadge from "~/shared/components/base/BaseBadge.vue";
import ContentWrapper from "~/shared/components/base/ContentWrapper.vue";
</script>
<template>
  <ContentWrapper class="border border-pink-500 bg-pink-50/20">
    <div class="flex justify-between items-center">
      <div>
        <p>
          <span class="inline-block w-2 h-2 rounded bg-primary mr-2"></span>
          <span class="font-medium">Team A - TikTok Focus</span>
        </p>
        <p class="text-[10px]">10 thành viên - Chủ yếu TikTok Shop</p>
      </div>

      <h3 class="font-semibold text-lg">₫20.00B</h3>
    </div>

    <div class="grid grid-cols-5 gap-3 mt-2">
      <div class="p-2 rounded-md border">
        <p class="text-xs font-semibold text-foreground/50">ĐƠN HÀNG</p>
        <h3 class="text-base font-semibold">5.220</h3>
      </div>
      <div class="p-2 rounded-md border">
        <p class="text-xs font-semibold text-foreground/50">ĐƠN HÀNG</p>
        <h3 class="text-base font-semibold">5.220</h3>
      </div>
      <div class="p-2 rounded-md border">
        <p class="text-xs font-semibold text-foreground/50">ĐƠN HÀNG</p>
        <h3 class="text-base font-semibold">5.220</h3>
      </div>
      <div class="p-2 rounded-md border">
        <p class="text-xs font-semibold text-foreground/50">ĐƠN HÀNG</p>
        <h3 class="text-base font-semibold">5.220</h3>
      </div>
      <div class="p-2 rounded-md border">
        <p class="text-xs font-semibold text-foreground/50">ĐƠN HÀNG</p>
        <h3 class="text-base font-semibold">5.220</h3>
      </div>
    </div>

    <div class="flex gap-1 mt-2">
      <BaseBadge>TikTok Shop 78%</BaseBadge>
      <BaseBadge>Etsy 78%</BaseBadge>
      <BaseBadge>Shopify 78%</BaseBadge>
    </div>
  </ContentWrapper>
</template>

<script lang="ts" setup>
import { Separator } from "~/shared/components/ui/separator";
import CurentcyCard from "./CurentcyCard.vue";
</script>
<template>
  <div class="flex items-center justify-between">
    <h3 class="text-xs font-medium">CHI TIẾT DÒNG TIỀN THEO KÊNH</h3>
    <div class="flex gap-2 items-center text-xs">
      <div class="flex items-center gap-1">
        <div class="w-2 h-2 rounded-xs bg-green-500"></div>
        Paid
      </div>
      <div class="flex items-center gap-1">
        <div class="w-2 h-2 rounded-xs bg-yellow-500"></div>
        Processing
      </div>
      <div class="flex items-center gap-1">
        <div class="w-2 h-2 rounded-xs bg-orange-500"></div>
        On Hold
      </div>

      <span>T3/2026</span>
    </div>
  </div>
  <Separator class="my-2" />
  <div>
    <div class="flex items-center gap-2">
      <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
      <p class="font-medium">TikTok Shop</p>
      <div class="text-foreground/50 text-[10px] bg-foreground/10 px-1 rounded">
        Settlement 7-14 ngày
      </div>
      <p class="flex-1 text-end font-medium">₫18.39B</p>
    </div>
    <div class="mt-2 grid grid-cols-3 gap-2">
      <CurentcyCard
        class="border-l border-green-500 bg-green-50/20"
        title="PAID"
        value="₫10.66B"
      />
      <CurentcyCard
        class="border-l border-yellow-500 bg-yellow-50/20"
        title="PROCESSING"
        value-class="text-yellow-500"
        value="₫10.66B"
      />
      <CurentcyCard
        class="border-l border-orange-500 bg-orange-50/20"
        title="ON HOLD"
        value-class="text-orange-500"
        value="₫10.66B"
      />
    </div>

    <div class="flex h-2 gap-1 rounded-4xl overflow-hidden mt-2">
      <div class="h-full bg-green-500" style="flex-basis: 25%"></div>
      <div class="h-full bg-yellow-500" style="flex-basis: 25%"></div>
      <div class="h-full bg-orange-500" style="flex-basis: 50%"></div>
    </div>
  </div>
  <Separator class="my-2" />
  <div>
    <div class="flex items-center gap-2">
      <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
      <p class="font-medium">TikTok Shop</p>
      <div class="text-foreground/50 text-[10px] bg-foreground/10 px-1 rounded">
        Settlement 7-14 ngày
      </div>
      <p class="flex-1 text-end font-medium">₫18.39B</p>
    </div>
    <div class="mt-2 grid grid-cols-3 gap-2">
      <CurentcyCard
        class="border-l border-green-500 bg-green-50/20"
        title="PAID"
        value="₫10.66B"
      />
      <CurentcyCard
        class="border-l border-yellow-500 bg-yellow-50/20"
        title="PROCESSING"
        value-class="text-yellow-500"
        value="₫10.66B"
      />
      <CurentcyCard
        class="border-l border-orange-500 bg-orange-50/20"
        title="ON HOLD"
        value-class="text-orange-500"
        value="₫10.66B"
      />
    </div>

    <div class="flex h-2 gap-1 rounded-4xl overflow-hidden mt-2">
      <div class="h-full bg-green-500" style="flex-basis: 25%"></div>
      <div class="h-full bg-yellow-500" style="flex-basis: 25%"></div>
      <div class="h-full bg-orange-500" style="flex-basis: 50%"></div>
    </div>
  </div>
  <Separator class="my-2" />
  <div>
    <div class="flex items-center gap-2">
      <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
      <p class="font-medium">TikTok Shop</p>
      <div class="text-foreground/50 text-[10px] bg-foreground/10 px-1 rounded">
        Settlement 7-14 ngày
      </div>
      <p class="flex-1 text-end font-medium">₫18.39B</p>
    </div>
    <div class="mt-2 grid grid-cols-3 gap-2">
      <CurentcyCard
        class="border-l border-green-500 bg-green-50/20"
        title="PAID"
        value="₫10.66B"
      />
      <CurentcyCard
        class="border-l border-yellow-500 bg-yellow-50/20"
        title="PROCESSING"
        value-class="text-yellow-500"
        value="₫10.66B"
      />
      <CurentcyCard
        class="border-l border-orange-500 bg-orange-50/20"
        title="ON HOLD"
        value-class="text-orange-500"
        value="₫10.66B"
      />
    </div>

    <div class="flex h-2 gap-1 rounded-4xl overflow-hidden mt-2">
      <div class="h-full bg-green-500" style="flex-basis: 25%"></div>
      <div class="h-full bg-yellow-500" style="flex-basis: 25%"></div>
      <div class="h-full bg-orange-500" style="flex-basis: 50%"></div>
    </div>
  </div>
</template>

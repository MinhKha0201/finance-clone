<script lang="ts" setup>
import Airwallex from "~/modules/bank/components/Airwallex.vue";
import Cash from "~/modules/bank/components/Cash.vue";
import DataItem from "~/modules/bank/components/DataItem.vue";
import GeneralTable from "~/modules/bank/components/GeneralTable.vue";
import MBBank from "~/modules/bank/components/MBBank.vue";
import PingPongX from "~/modules/bank/components/PingPongX.vue";
import Techcombank from "~/modules/bank/components/Techcombank.vue";
import TotalCurrencyItem from "~/modules/bank/components/TotalCurrencyItem.vue";
import Vietinbank from "~/modules/bank/components/Vietinbank.vue";
import BaseBadge from "~/shared/components/base/BaseBadge.vue";
import ContentWrapper from "~/shared/components/base/ContentWrapper.vue";

definePageMeta({
  auth: true,
  sidebar: true,
  order: 2,
  title: "Bank",
});

useSeoMeta({
  title: "Bank",
});
</script>
<template>
  <section>
    <div class="border-y mb-2 p-1 flex items-center flex-wrap gap-1">
      <DataItem />
      <div class="w-px h-5 bg-border mx-2"></div>
      <DataItem />
      <div class="w-px h-5 bg-border mx-2"></div>
      <DataItem />
      <div class="w-px h-5 bg-border mx-2"></div>
      <DataItem />
      <div class="w-px h-5 bg-border mx-2"></div>
      <DataItem />
      <div class="w-px h-5 bg-border mx-2"></div>
      <DataItem />
      <div class="w-px h-5 bg-border mx-2"></div>
    </div>
    <div
      class="border mb-2 py-1 px-8 flex items-center flex-wrap gap-1 rounded-md justify-between"
    >
      <div class="flex items-center gap-1">
        <DataItem />
        <div class="w-px h-5 bg-border mx-2"></div>
        <DataItem />
        <div class="w-px h-5 bg-border mx-2"></div>
        <DataItem />
        <div class="w-px h-5 bg-border mx-2"></div>
        <DataItem />
        <div class="w-px h-5 bg-border mx-2"></div>
      </div>

      <p class="text-xs font-medium">24/04/2026</p>
    </div>
    <ContentWrapper class="flex justify-between">
      <div class="flex flex-col gap-1">
        <h4 class="font-medium">TỔNG TÀI SẢN - TẤT CẢ TÀI KHOẢN LUTECH</h4>
        <h2 class="font-semibold text-3xl">đ26,189,947,131</h2>
        <p class="text-xs text-foreground/50">
          6 tổ chức · 16 tài khoản · 5 loại tiền · 16/04/2026
        </p>
        <div class="flex items-center gap-1">
          <BaseBadge>Pingpong 5TK </BaseBadge>
          <BaseBadge>Airwallex 4TK </BaseBadge>
          <BaseBadge>Techcombank 2TK </BaseBadge>
          <BaseBadge>MBBank 3TK </BaseBadge>
          <BaseBadge>Vietinbank 2TK </BaseBadge>
          <BaseBadge>Tiền mặt </BaseBadge>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-1">
        <TotalCurrencyItem />
        <TotalCurrencyItem />
        <TotalCurrencyItem />
        <TotalCurrencyItem />
        <TotalCurrencyItem />
      </div>
    </ContentWrapper>

    <div class="grid grid-cols-3 gap-2 mt-2">
      <ContentWrapper>
        <PingPongX />
      </ContentWrapper>
      <ContentWrapper>
        <Airwallex />
      </ContentWrapper>
      <ContentWrapper>
        <Techcombank />
      </ContentWrapper>
      <ContentWrapper>
        <MBBank />
      </ContentWrapper>
      <ContentWrapper>
        <Vietinbank />
      </ContentWrapper>
      <ContentWrapper>
        <Cash />
      </ContentWrapper>
    </div>

    <ContentWrapper class="mt-2">
      <GeneralTable />
    </ContentWrapper>
  </section>
</template>

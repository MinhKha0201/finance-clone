<script lang="ts" setup>
import { ArrowDown } from "lucide-vue-next";
import DataItem from "~/modules/bank/components/DataItem.vue";
import CashFlowDetail from "~/modules/ecommerce/components/CashFlowDetail.vue";
import CostAndProfit from "~/modules/ecommerce/components/CostAndProfit.vue";
import CurentcyCard from "~/modules/ecommerce/components/CurentcyCard.vue";
import EfficiencyBySaleChannel from "~/modules/ecommerce/components/EfficiencyBySaleChannel.vue";
import RevenueByChannel from "~/modules/ecommerce/components/RevenueByChannel.vue";
import ContentWrapper from "~/shared/components/base/ContentWrapper.vue";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";
import CompareTab from "~/modules/ecommerce/components/tabs/CompareTab.vue";
import TeamTab from "~/modules/ecommerce/components/tabs/TeamTab.vue";

definePageMeta({
  auth: true,
  sidebar: true,
  order: 3,
  title: "Ecommerce",
});

useSeoMeta({
  title: "Ecommerce",
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

    <div class="my-2 grid grid-cols-4 gap-2">
      <CurentcyCard title="TỔNG DT ECOMMERCE" value="₫45.97B">
        <div
          class="text-[10px] font-semibold flex items-center gap-0.5 px-1 rounded text-red-500"
        >
          <ArrowDown :size="12" /> 14.0%
        </div>
      </CurentcyCard>
      <CurentcyCard />
      <CurentcyCard />
      <CurentcyCard />
    </div>

    <h4 class="font-medium">HIỆU QUẢ THEO KÊNH BÁN HÀNG</h4>
    <div class="grid grid-cols-3 gap-2 mt-2">
      <EfficiencyBySaleChannel
        bg-primary="bg-red-50/20"
        bg-secondary="bg-red-100"
        border-class="border-red-500"
        text-primary="text-red-500"
        text-secondary="text-red-400"
        class="*:data-[slot=progress-indicator]:bg-red-500 bg-red-50"
      />
      <EfficiencyBySaleChannel
        bg-primary="bg-orange-50/20"
        bg-secondary="bg-orange-100"
        border-class="border-orange-500"
        text-primary="text-orange-500"
        text-secondary="text-orange-400"
        class="*:data-[slot=progress-indicator]:bg-orange-500 bg-orange-50"
      />
      <EfficiencyBySaleChannel
        bg-primary="bg-lime-50/20"
        bg-secondary="bg-lime-100"
        border-class="border-lime-500"
        text-primary="text-lime-500"
        text-secondary="text-lime-400"
        class="*:data-[slot=progress-indicator]:bg-lime-500 bg-lime-50"
      />
    </div>

    <div class="mt-2 grid grid-cols-2 gap-2">
      <ContentWrapper>
        <CostAndProfit />
      </ContentWrapper>
      <ContentWrapper>
        <RevenueByChannel />
      </ContentWrapper>
    </div>

    <h4 class="font-medium my-2">DÒNG TIỀN - TRẠNG THÁI THANH TOÁN</h4>
    <div class="grid grid-cols-3 gap-2">
      <CurentcyCard
        class="border-green-500"
        title="ĐÃ THANH TOÁN - PAID"
        value="₫31.99B"
      />
      <CurentcyCard
        class="border-yellow-500"
        title="ĐANG XỬ LÝ - PROCESSING"
        value-class="text-yellow-500"
        value="₫10.28B"
      />
      <CurentcyCard
        class="border-orange-500"
        title="ĐANG GIỮ - ON HOLD"
        value-class="text-orange-500"
        value="₫3.70B"
      />
    </div>

    <ContentWrapper class="mt-2">
      <CashFlowDetail />
    </ContentWrapper>

    <h4 class="font-medium my-2">XEM THEO TEAM</h4>
    <div class="flex w-full flex-col gap-2">
      <Tabs default-value="compare">
        <TabsList class="gap-1">
          <TabsTrigger
            value="compare"
            class="hover:cursor-pointer border-border data-[state=active]:shadow-none data-[state=active]:bg-blue-50 data-[state=active]:border-primary data-[state=active]:text-blue-500 dark:data-[state=active]:shadow-none dark:data-[state=active]:bg-blue-50 dark:data-[state=active]:border-blue-500 dark:data-[state=active]:text-blue-500"
          >
            Tất cả - So sánh
          </TabsTrigger>
          <TabsTrigger
            value="teamA"
            class="hover:cursor-pointer border-border data-[state=active]:shadow-none data-[state=active]:bg-pink-50 data-[state=active]:border-pink-500 data-[state=active]:text-pink-500 dark:data-[state=active]:shadow-none dark:data-[state=active]:bg-pink-50 dark:data-[state=active]:border-pink-500 dark:data-[state=active]:text-pink-500"
          >
            Team A - TikTok focus
          </TabsTrigger>
          <TabsTrigger
            value="teamB"
            class="hover:cursor-pointer border-border data-[state=active]:shadow-none data-[state=active]:bg-blue-50 data-[state=active]:border-primary data-[state=active]:text-blue-500 dark:data-[state=active]:shadow-none dark:data-[state=active]:bg-blue-50 dark:data-[state=active]:border-blue-500 dark:data-[state=active]:text-blue-500"
          >
            Team B - Mixed
          </TabsTrigger>
          <TabsTrigger
            value="teamC"
            class="hover:cursor-pointer border-border data-[state=active]:shadow-none data-[state=active]:bg-green-50 data-[state=active]:border-green-500 data-[state=active]:text-green-500 dark:data-[state=active]:shadow-none dark:data-[state=active]:bg-green-50 dark:data-[state=active]:border-green-500 dark:data-[state=active]:text-green-500"
          >
            Team C - Etsy/Shopify
          </TabsTrigger>
        </TabsList>

        <TabsContent value="compare">
          <CompareTab />
        </TabsContent>
        <TabsContent value="teamA"> <TeamTab /> </TabsContent>
        <TabsContent value="teamB"> 3 </TabsContent>
        <TabsContent value="teamC">4 </TabsContent>
      </Tabs>
    </div>
  </section>
</template>

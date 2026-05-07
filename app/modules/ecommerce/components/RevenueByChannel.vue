<script lang="ts" setup>
import type { ApexNonAxisChartSeries, ApexOptions } from "apexcharts";
import ApexChartsBase from "~/shared/components/base/ApexChartsBase.vue";
import { Progress } from "~/shared/components/ui/progress";
import { Separator } from "~/shared/components/ui/separator";
import { formatCurrency } from "~~/shared/helper";

const chartData = ref<ApexNonAxisChartSeries>([
  {
    name: "TikTok",
    data: [21880000000, 21380000000, 18390000000],
  },
  {
    name: "Etsy",
    data: [15320000000, 14320000000, 13320000000],
  },
  {
    name: "Shopify",
    data: [17510000000, 16510000000, 15510000000],
  },
]);
const chartOption = ref<ApexOptions>({
  chart: {
    type: "bar",
    toolbar: { show: false },
    background: "transparent",
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["T1", "T2", "T3"],
  },
  colors: ["#ef4444", "#f97316", "#84cc16"],
  yaxis: {
    labels: {
      formatter: (value: number) => {
        return formatCurrency(value, "short", 0);
      },
    },
  },
  stroke: {
    show: true,
    width: 4,
    colors: ["transparent"],
  },
  plotOptions: {
    bar: {
      borderRadius: 6,
    },
  },
  tooltip: {
    cssClass: "text-black",
  },
});
</script>
<template>
  <h3 class="text-xs font-medium">MARGIN & DT THEO KÊNH</h3>
  <div class="mt-2 flex flex-col gap-2">
    <div>
      <div class="flex items-center text-xs gap-2">
        <div class="w-2 h-2 rounded-xs bg-primary"></div>
        <p class="flex-1">TikTok Shop - Margin</p>
        <span>~16%</span>
      </div>
      <Progress
        :model-value="16"
        class="h-1.5 mt-1 *:data-[slot=progress-indicator]:rounded-4xl"
      />
    </div>
    <div>
      <div class="flex items-center text-xs gap-2">
        <div class="w-2 h-2 rounded-xs bg-primary"></div>
        <p class="flex-1">TikTok Shop - Margin</p>
        <span>~16%</span>
      </div>
      <Progress
        :model-value="16"
        class="h-1.5 mt-1 *:data-[slot=progress-indicator]:rounded-4xl"
      />
    </div>
    <div>
      <div class="flex items-center text-xs gap-2">
        <div class="w-2 h-2 rounded-xs bg-primary"></div>
        <p class="flex-1">TikTok Shop - Margin</p>
        <span>~16%</span>
      </div>
      <Progress
        :model-value="16"
        class="h-1.5 mt-1 *:data-[slot=progress-indicator]:rounded-4xl"
      />
    </div>
  </div>
  <Separator class="my-3" />

  <div>
    <div class="flex items-center text-xs gap-2">
      <div class="w-2 h-2 rounded-xs bg-primary"></div>
      <p class="flex-1">TikTok Shop - Margin</p>
      <span>~16%</span>
    </div>
    <Progress
      :model-value="16"
      class="h-1.5 mt-1 *:data-[slot=progress-indicator]:rounded-4xl"
    />
  </div>

  <div class="mt-2">
    <ApexChartsBase :data="chartData" :options="chartOption" :height="200" />
  </div>
</template>

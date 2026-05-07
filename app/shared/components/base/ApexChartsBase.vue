<script lang="ts" setup>
import type { ApexNonAxisChartSeries, ApexOptions } from "apexcharts";
const props = defineProps<{
  options: ApexOptions;
  data: ApexNonAxisChartSeries;
  height?: number;
  width?: number;
}>();

const colorMode = useColorMode();

const chartRef = ref<any>(null);

watch(
  () => colorMode.value,
  (mode) => {
    chartRef.value?.updateOptions({
      theme: {
        mode: mode,
      },
      tooltip: {
        theme: mode,
      },
    });
  },
);
</script>
<template>
  <ClientOnly>
    <apexchart
      ref="chartRef"
      :options="options"
      :series="data"
      :height="height"
      :width="width"
    />
  </ClientOnly>
</template>

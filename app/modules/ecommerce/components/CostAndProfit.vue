<script lang="ts" setup>
import { getCoreRowModel, useVueTable } from "@tanstack/vue-table";
import DataTable from "~/shared/components/datatable/DataTable.vue";
import { costAndProfitColumn } from "../constants/column";
import type { CostAndProfitType } from "../type/ecommerce.type";

const data: CostAndProfitType[] = [
  {
    channel: "TikTok Shop",
    aov: 3159000,
    orderCount: 5820,
    revenue: 18390000000,
    margin: 20,
    totalCost: -14710000000,
    profit: 3800000000,
    percentRevenue: 40,
  },
];

const table = useVueTable({
  data,
  columns: costAndProfitColumn,
  getCoreRowModel: getCoreRowModel(),
});
</script>
<template>
  <h3 class="text-xs font-medium">SO SÁNH 3 KÊNH-CHI PHÍ & LN</h3>
  <div class="mt-2">
    <DataTable :table="table" />
  </div>
</template>

<script lang="ts" setup>
import { getCoreRowModel, useVueTable } from "@tanstack/vue-table";
import { teamMemberColumn } from "../../constants/column";
import DataTable from "~/shared/components/datatable/DataTable.vue";
import type { TeamMemberType } from "../../type/ecommerce.type";
import ContentWrapper from "~/shared/components/base/ContentWrapper.vue";

const res = await $fetch("https://dummyjson.com/users");

const data: TeamMemberType[] = [
  {
    fullname: "Nguyễn Văn A",
    mainChannel: ["TikTok Shop", "Shopee"],
    shopCount: 10,
    orderPerMonth: 10000,
    revenue: 100000000,
    targetRevenue: 200000000,
    percentTarget: 50,
    profit: 100000000,
    margin: 20,
    mom: 10,
  },
  {
    fullname: "Nguyễn Văn B",
    mainChannel: ["TikTok Shop", "Shopee"],
    shopCount: 10,
    orderPerMonth: 10000,
    revenue: 100000000,
    targetRevenue: 200000000,
    percentTarget: 90,
    profit: 100000000,
    margin: 10,
    mom: 10,
  },
];

const table = useVueTable({
  data,
  columns: teamMemberColumn,
  getCoreRowModel: getCoreRowModel(),
});
</script>
<template>
  <ContentWrapper>
    <h4>Team Tab</h4>
    <div class="mt-2">
      <DataTable :table="table" />
    </div>
  </ContentWrapper>
</template>

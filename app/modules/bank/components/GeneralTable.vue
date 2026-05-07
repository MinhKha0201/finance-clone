<script lang="ts" setup>
import { getCoreRowModel, useVueTable } from "@tanstack/vue-table";
import DataTable from "~/shared/components/datatable/DataTable.vue";
import type { GeneralTableType } from "../type/bank.type";
import { generalColumn } from "../constants/columns";

const data: GeneralTableType[] = [
  {
    unit: "USD",
    balance: "$547,751.89",
    vnd: "₫13,880,537,632",
    exchangeRate: "25,340",
    density: "53.0%",
    heldBy: "Pingpong · Airwallex · MBBank",
  },
  {
    unit: "SGD",
    balance: "S$444,763.68",
    vnd: "₫8,414,929,010",
    exchangeRate: "18,920",
    density: "32.1%",
    heldBy: "Airwallex S$444,763 · Pingpong S$0.69",
  },
  {
    unit: "VND",
    balance: "₫3,809,299,341",
    vnd: "₫3,809,299,341",
    exchangeRate: "--",
    density: "14.5%",
    heldBy: "TM ₫3.17B · TCB · MBBank · Vietinbank",
  },
  {
    unit: "EUR",
    balance: "€2,336.31",
    vnd: "₫63,547,632",
    exchangeRate: "27,200",
    density: "0.24%",
    heldBy: "Airwallex EUR",
  },
  {
    unit: "GBP",
    balance: "£672.20",
    vnd: "₫21,633,516",
    exchangeRate: "32,180",
    density: "0.08%",
    heldBy: "Airwallex GBP",
  },
];

const table = useVueTable({
  data,
  columns: generalColumn,
  getCoreRowModel: getCoreRowModel(),
});
</script>
<template>
  <div>
    <DataTable :table="table" />
  </div>
</template>

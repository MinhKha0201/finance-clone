<script lang="ts" setup>
import DataTable from "~/shared/components/datatable/DataTable.vue";
import TeamDetailCard from "../TeamDetailCard.vue";
import { getCoreRowModel, useVueTable } from "@tanstack/vue-table";
import { compareTeamColumn } from "../../constants/column";

const table = useVueTable({
  data: [],
  columns: compareTeamColumn,
  getCoreRowModel: getCoreRowModel(),
});
</script>
<template>
  <div class="grid grid-cols-3 gap-2">
    <TeamDetailCard />
    <TeamDetailCard />
    <TeamDetailCard />
  </div>
  <div class="mt-2">
    <DataTable :table="table" />
  </div>
</template>

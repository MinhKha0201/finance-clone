<script setup lang="ts" generic="TData, TValue">
import type { Table as TableType } from "@tanstack/vue-table";
import { FlexRender } from "@tanstack/vue-table";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import Table from "../ui/table/Table.vue";
import TableFooter from "../ui/table/TableFooter.vue";

const props = defineProps<{
  table: TableType<TData>;
}>();
</script>

<template>
  <div class="border rounded-md">
    <Table>
      <TableHeader>
        <TableRow
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
        >
          <TableHead v-for="header in headerGroup.headers" :key="header.id">
            <FlexRender
              v-if="!header.isPlaceholder"
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <template v-if="table.getRowModel().rows?.length">
          <TableRow
            v-for="row in table.getRowModel().rows"
            :key="row.id"
            :data-state="row.getIsSelected() ? 'selected' : undefined"
          >
            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
              <FlexRender
                :render="cell.column.columnDef.cell"
                :props="cell.getContext()"
              />
            </TableCell>
          </TableRow>
        </template>
        <template v-else>
          <TableRow>
            <TableCell
              :colspan="table.getAllColumns().length"
              class="h-24 text-center"
            >
              No results.
            </TableCell>
          </TableRow>
        </template>
      </TableBody>

      <TableFooter>
        <TableRow
          v-for="footerGroup in table.getFooterGroups()"
          :key="footerGroup.id"
        >
          <TableCell v-for="footer in footerGroup.headers" :key="footer.id">
            <FlexRender
              v-if="!footer.isPlaceholder"
              :render="footer.column.columnDef.footer"
              :props="footer.getContext()"
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  </div>
</template>

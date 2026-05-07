import type { ColumnDef } from "@tanstack/vue-table";
import type { GeneralTableType } from "../type/bank.type";

export const generalColumn: ColumnDef<GeneralTableType>[] = [
  {
    accessorKey: "cash-unit",
    header: "Tiền tệ",
    cell: ({ row }) => row.original.unit,
    footer: () => "Tổng",
  },
  {
    accessorKey: "balance",
    header: "Số dư",
    footer: () => "-",
  },
  {
    accessorKey: "vnd",
    header: "Quy VNĐ",
    footer: ({ table, column }) => {
      const values = table
        .getFilteredRowModel()
        .rows.map((row) => row.getValue(column.id));

      console.log(values);
      return "";
    },
  },
  {
    accessorKey: "exchangeRate",
    header: "Tỷ giá",
    footer: () => "-",
  },
  {
    accessorKey: "density",
    header: "Tỷ trọng",
    footer: () => "100%",
  },
  {
    accessorKey: "heldBy",
    header: () => h("p", { class: "text-end" }, "Nắm giữ bởi"),
    cell: ({ row }) => h("p", { class: "text-end" }, row.original.heldBy),
    footer: ({ column, table }) => {
      return h("p", { class: "text-end" }, column.id);
    },
  },
];

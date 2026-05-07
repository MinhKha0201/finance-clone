import { formatCurrency, formatPercent } from "~~/shared/helper";
import type { ColumnDef } from "@tanstack/vue-table";
import type {
  CompareTeamType,
  CostAndProfitType,
  TeamMemberType,
} from "../type/ecommerce.type";
import PercentTargetCell from "../components/PercentTargetCell.vue";

export const costAndProfitColumn: ColumnDef<CostAndProfitType>[] = [
  {
    accessorKey: "channel",
    header: "Kênh",
    footer: "Tổng",
  },
  {
    accessorKey: "revenue",
    header: "Doanh thu",
    cell: ({ row }) => formatCurrency(row.original.revenue, "short"),
    footer: () => "-",
  },
  {
    accessorKey: "orderCount",
    header: "Đơn hàng",
    cell: ({ row }) => formatCurrency(row.original.orderCount, "long", 0),
    footer: () => "-",
  },
  {
    accessorKey: "aov",
    header: "AOV",
    cell: ({ row }) => formatCurrency(row.original.aov, "short"),
    footer: () => "-",
  },
  {
    accessorKey: "totalCost",
    header: "Tổng CP",
    cell: ({ row }) => formatCurrency(row.original.totalCost, "short"),
    footer: () => "-",
  },
  {
    accessorKey: "profit",
    header: "LN Gộp",
    cell: ({ row }) => formatCurrency(row.original.profit, "short"),
    footer: () => "-",
  },
  {
    accessorKey: "margin",
    header: "Margin",
    cell: ({ row }) => formatPercent(row.original.margin, 1),
    footer: () => "-",
  },
  {
    accessorKey: "percentRevenue",
    header: "% DT",
    cell: ({ row }) => formatPercent(row.original.percentRevenue, 1),
    footer: () => "-",
  },
];

export const compareTeamColumn: ColumnDef<CompareTeamType>[] = [
  {
    accessorKey: "team",
    header: "Team",
    footer: "Tổng",
  },
  {
    accessorKey: "revenue",
    header: "Doanh thu",
    cell: ({ row }) => formatCurrency(row.original.revenue, "short"),
    footer: () => "-",
  },
  {
    accessorKey: "orderCount",
    header: "Đơn hàng",
    cell: ({ row }) => formatCurrency(row.original.orderCount, "long", 0),
    footer: () => "-",
  },
  {
    accessorKey: "aov",
    header: "AOV",
    cell: ({ row }) => formatCurrency(row.original.aov, "short"),
    footer: () => "-",
  },
  {
    accessorKey: "profit",
    header: "LN Gộp",
    cell: ({ row }) => formatCurrency(row.original.profit, "short"),
    footer: () => "-",
  },
  {
    accessorKey: "margin",
    header: "Margin",
    cell: ({ row }) => formatPercent(row.original.margin, 1),
    footer: () => "-",
  },
  {
    accessorKey: "shop",
    header: "Shop",
    cell: ({ row }) => formatPercent(row.original.shop, 1),
    footer: () => "-",
  },
  {
    accessorKey: "revenuePerPerson",
    header: "DT/Người",
    cell: ({ row }) => formatCurrency(row.original.revenuePerPerson, "short"),
    footer: () => "-",
  },
];

export const teamMemberColumn: ColumnDef<TeamMemberType>[] = [
  {
    accessorKey: "fullname",
    header: "Thành viên",
    footer: "Tổng team",
  },
  {
    accessorKey: "mainChannel",
    header: "Kênh chính",
  },
  {
    accessorKey: "shopCount",
    header: "Số shop",
  },
  {
    accessorKey: "orderPerMonth",
    header: "Đơn/tháng",
    cell: ({ row }) => formatCurrency(row.original.orderPerMonth, "long", 0),
    footer: ({ column, table }) => {
      const values: number[] = table
        .getFilteredRowModel()
        .rows.map((row) => row.getValue(column.id));
      const total = values.reduce((a, b) => a + b, 0);
      return formatCurrency(total, "long", 0);
    },
  },
  {
    accessorKey: "revenue",
    header: "Doanh thu",
    cell: ({ row }) => formatCurrency(row.original.revenue, "short"),
    footer: ({ table, column }) => {
      const values: number[] = table
        .getFilteredRowModel()
        .rows.map((row) => row.getValue(column.id));
      const total = values.reduce((a, b) => a + b, 0);
      return formatCurrency(total, "short", 2);
    },
  },
  {
    accessorKey: "targetRevenue",
    header: "Target DT",
    cell: ({ row }) => formatCurrency(row.original.targetRevenue, "short"),
    footer: ({ table, column }) => {
      const values: number[] = table
        .getFilteredRowModel()
        .rows.map((row) => row.getValue(column.id));
      const total = values.reduce((a, b) => a + b, 0);
      return formatCurrency(total, "short", 2);
    },
  },
  {
    accessorKey: "percentTarget",
    header: "% Target",
    cell: ({ row }) =>
      h(PercentTargetCell, { percent: row.original.percentTarget }),
    footer: () => "-",
  },
  {
    accessorKey: "profit",
    header: "LN Gộp",
    cell: ({ row }) => formatCurrency(row.original.profit, "short"),
    footer: ({ table, column }) => {
      const values: number[] = table
        .getFilteredRowModel()
        .rows.map((row) => row.getValue(column.id));
      const total = values.reduce((a, b) => a + b, 0);
      return formatCurrency(total, "short", 2);
    },
  },
  {
    accessorKey: "margin",
    header: "Margin",
    cell: ({ row }) => formatPercent(row.original.margin, 1),
    footer: ({ table, column }) => {
      const values: number[] = table
        .getFilteredRowModel()
        .rows.map((row) => row.getValue(column.id));
      const total = values.reduce((a, b) => a + b, 0);
      return formatPercent(total / values.length, 1);
    },
  },
  {
    accessorKey: "mom",
    header: "MOM",
    cell: ({ row }) => formatPercent(row.original.mom, 1),
    footer: () => "-",
  },
];

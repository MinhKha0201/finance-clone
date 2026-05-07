export interface CostAndProfitType {
  channel: string;
  revenue: number;
  orderCount: number;
  aov: number;
  totalCost: number;
  profit: number;
  margin: number;
  percentRevenue: number;
}

export interface CompareTeamType {
  team: string;
  revenue: number;
  orderCount: number;
  aov: number;
  profit: number;
  margin: number;
  shop: number;
  revenuePerPerson: number;
}

export interface TeamMemberType {
  fullname: string;
  mainChannel: string[];
  shopCount: number;
  orderPerMonth: number;
  revenue: number;
  targetRevenue: number;
  percentTarget: number;
  profit: number;
  margin: number;
  mom: number;
}

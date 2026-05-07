export interface IBaseFormProps {
  name: string;
  label: string;
  placeholder?: string;
}

export interface SidebarItemType {
  path: string;
  title: string;
  icon?: any;
  order: number;
  children?: SidebarItemType[];
}

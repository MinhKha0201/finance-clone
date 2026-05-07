import type { SidebarItemType } from "../type";

export const useSidebarItem = () => {
  const router = useRouter();
  const items = computed<SidebarItemType[]>(() => {
    const authRoutes = router
      .getRoutes()
      .filter((r) => r.meta?.auth && r.meta?.sidebar);

    const routeItems = authRoutes.map((r) => ({
      path: r.path,
      title: r.meta.title as string,
      icon: r.meta.icon as any,
      order: (r.meta.order as any) ?? 999,
      children: [] as SidebarItemType[],
    }));

    const parentMap = new Map<string, SidebarItemType>();
    const rootItems: SidebarItemType[] = [];

    routeItems.forEach((item) => {
      parentMap.set(item.path, item);
    });

    routeItems.forEach((item) => {
      const pathParts = item.path.split("/").filter(Boolean);

      if (pathParts.length <= 1) {
        rootItems.push(item);
      } else {
        let parentPath: string | null = null;
        for (let i = pathParts.length - 1; i > 0; i--) {
          const checkPath = "/" + pathParts.slice(0, i).join("/");
          if (parentMap.has(checkPath)) {
            parentPath = checkPath;
            break;
          }
        }

        if (parentPath) {
          const parent = parentMap.get(parentPath);
          if (parent) {
            parent.children!.push(item);
          }
        } else {
          rootItems.push(item);
        }
      }
    });

    const sortByOrder = (items: SidebarItemType[]) => {
      items.sort((a, b) => a.order - b.order);
      items.forEach((item) => {
        if (item.children) {
          sortByOrder(item.children);
        }
      });
    };

    sortByOrder(rootItems);

    return rootItems;
  });

  return { items };
};

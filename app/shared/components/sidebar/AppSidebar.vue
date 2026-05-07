<script setup lang="ts">
import type { SidebarProps } from "~/shared/components/ui/sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/shared/components/ui/sidebar";
import SidebarItem from "./SidebarItem.vue";
import { useSidebarItem } from "~/shared/composables/useSidebarItem";
import SidebarGroupItem from "./SidebarGroupItem.vue";

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: "icon",
});

const { items } = useSidebarItem();
const route = useRoute();
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader class="h-16"> Sidebar header</SidebarHeader>
    <SidebarContent class="p-2 text-sm gap-1">
      <template v-for="(item, index) in items" :key="index">
        <SidebarGroupItem
          v-if="item.children?.length"
          :route="item"
          :current-route="route.fullPath"
        />
        <SidebarItem v-else :route="item" />
      </template>
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
</template>

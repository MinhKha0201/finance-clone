<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";
import SidebarItem from "./SidebarItem.vue";
import type { SidebarItemType } from "~/shared/type";

const props = defineProps<{
  route: SidebarItemType;
  currentRoute: string;
}>();
</script>

<template>
  <Accordion
    type="single"
    collapsible
    class="w-full"
    :default-value="currentRoute.includes(route.path) ? route.path : undefined"
  >
    <AccordionItem :value="route.path">
      <AccordionTrigger
        class="hover:no-underline text-foreground p-2 font-medium hover:bg-muted hover:cursor-pointer"
      >
        {{ route.title }}
      </AccordionTrigger>
      <AccordionContent
        class="ml-4 border-l pl-4 pb-0 flex flex-col gap-1 pt-1"
      >
        <SidebarItem
          v-for="(item, index) in route.children"
          :key="index"
          :route="item"
        />
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>

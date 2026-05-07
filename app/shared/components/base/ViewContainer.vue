<script lang="ts" setup>
import { cn } from "~/shared/lib/utils";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
</script>
<template>
  <ScrollArea
    :class="
      cn(
        'bg-muted h-[calc(100vh-4rem)] transition-all duration-300 ease-in-out p-2 text-sm ',
      )
    "
  >
    <slot />

    <ScrollBar orientation="horizontal" />
  </ScrollArea>
</template>

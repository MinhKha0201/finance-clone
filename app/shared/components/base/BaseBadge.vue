<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import Badge from "../ui/badge/Badge.vue";
import { cn } from "~/shared/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>
<template>
  <Badge
    :class="
      cn(
        'bg-blue-100 text-blue-500 rounded text-[10px] font-semibold',
        props.class,
      )
    "
  >
    <slot />
  </Badge>
</template>

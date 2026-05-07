<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/shared/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>
<template>
  <div :class="cn('bg-background rounded-md p-4', props.class)">
    <slot />
  </div>
</template>

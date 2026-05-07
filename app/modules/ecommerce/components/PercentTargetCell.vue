<script lang="ts" setup>
import { Progress } from "~/shared/components/ui/progress";
import { cn } from "~/shared/lib/utils";
import { formatPercent } from "~~/shared/helper";

const props = withDefaults(
  defineProps<{
    percent?: number;
  }>(),
  {
    percent: 0,
  },
);
</script>
<template>
  <div class="flex items-center gap-1">
    <span
      class="text-xs font-semibold"
      :class="
        cn(percent < 80 && 'text-red-500', percent >= 80 && 'text-yellow-500')
      "
      >{{ formatPercent(props.percent, 1) }}</span
    >
    <Progress
      class="h-1.25"
      :class="
        cn(
          percent < 80 &&
            '*:data-[slot=progress-indicator]:bg-red-500 bg-red-50',
          percent >= 80 &&
            '*:data-[slot=progress-indicator]:bg-yellow-500 bg-yellow-50',
        )
      "
      :model-value="percent"
    />
  </div>
</template>

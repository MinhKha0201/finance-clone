<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import ContentWrapper from "~/shared/components/base/ContentWrapper.vue";
import { cn } from "~/shared/lib/utils";

const props = withDefaults(
  defineProps<{
    title?: string;
    value?: string;
    class?: HTMLAttributes["class"];
    valueClass?: HTMLAttributes["class"];
  }>(),
  {
    title: "",
    value: "",
  },
);
</script>
<template>
  <ContentWrapper
    :class="
      cn('border border-l-4 flex flex-col gap-1 border-l-primary', props.class)
    "
  >
    <p class="font-medium text-xs">{{ title }}</p>
    <h3 :class="cn('text-xl font-medium text-green-500', props.valueClass)">
      {{ value }}
    </h3>
    <slot />
  </ContentWrapper>
</template>

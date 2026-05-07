<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { Button, type ButtonVariants } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { cn } from "~/shared/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit";
  variant?: ButtonVariants["variant"];
}>();
</script>
<template>
  <Button
    :type="type"
    :disabled="disabled || isLoading"
    :variant="variant"
    :class="
      cn(
        '[&_svg]:hidden [&_svg:first-of-type]:block hover:cursor-pointer',
        props.class,
      )
    "
  >
    <Spinner v-if="isLoading" />
    <slot />
  </Button>
</template>

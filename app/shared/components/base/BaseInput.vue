<script lang="ts" setup>
import { Eye, EyeClosed } from "lucide-vue-next";
import { Input } from "../ui/input";
import type { HTMLAttributes } from "vue";
import { cn } from "~/shared/lib/utils";

const props = withDefaults(
  defineProps<{
    type?: "text" | "password" | "email";
    class?: HTMLAttributes["class"];
    modelValue?: string | null;
    placeholder?: string;
    error?: boolean;
  }>(),
  {
    type: "text",
  },
);

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | null): void;
}>();

const inputType = ref(props.type);

const toggeViewPassword = () => {
  inputType.value = inputType.value === "password" ? "text" : "password";
};

const handleUpdateModelValue = (payload: any) => {
  emits("update:modelValue", payload === "" ? null : payload);
};
</script>
<template>
  <div :class="cn('w-full relative h-9', props.class)">
    <Input
      :model-value="modelValue ?? undefined"
      :type="inputType"
      :class="cn('w-full h-full', type === 'password' && 'pr-8')"
      :placeholder="placeholder"
      :aria-invalid="error"
      @update:model-value="handleUpdateModelValue"
    />
    <button
      v-if="props.type === 'password'"
      @click="toggeViewPassword"
      type="button"
      class="text-slate-400 absolute top-1/2 right-2.5 -translate-y-1/2 bg-background hover:cursor-pointer"
    >
      <Eye v-if="inputType === 'text'" :size="16" />
      <EyeClosed v-else :size="16" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { IBaseFormProps } from "~/shared/type";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import BaseInput from "../base/BaseInput.vue";

type Props = IBaseFormProps & {
  type?: "text" | "email" | "password";
};

const props = withDefaults(defineProps<Props>(), {
  type: "text",
});
</script>
<template>
  <FormField :name="name" v-slot="{ componentField, errorMessage }">
    <FormItem class="w-full">
      <FormLabel>{{ label }}</FormLabel>
      <FormControl>
        <BaseInput
          :type="type"
          :placeholder="placeholder"
          :error="!!errorMessage"
          v-bind="componentField"
          class="w-full"
        />
      </FormControl>
      <FormDescription />
    </FormItem>
  </FormField>
</template>

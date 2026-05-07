<script lang="ts" setup>
import FormInput from "~/shared/components/form/FormInput.vue";
import { toTypedSchema } from "@vee-validate/zod";
import { loginSchema } from "~~/shared/schema/auth.schema";
import { useForm } from "vee-validate";
import { useAuth } from "~/modules/auth/composables/useAuth";
import BaseButton from "~/shared/components/base/BaseButton.vue";

definePageMeta({
  layout: "auth",
  auth: false,
});
useSeoMeta({
  title: "Login",
});

const config = useRuntimeConfig();

const { login, isLoading } = useAuth();

const formSchema = toTypedSchema(loginSchema);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit(async (values) => {
  await login(values);
});

const loginWithHrm = () => {
  const clientId = config.public.hrmClientId;
  const redirectUri = `${config.public.apiBase}/login/hrm`;

  window.location.href = `${config.public.hrmUrl}/oauth?clientId=${clientId}&redirectUri=${redirectUri}`;
};
</script>
<template>
  <div>
    <form class="flex flex-col gap-2 items-center w-full" @submit="onSubmit">
      <h3 class="text-xl font-semibold">Login</h3>
      <FormInput name="email" label="Email" placeholder="Enter email" />
      <FormInput
        type="password"
        name="password"
        label="Password"
        placeholder="Enter password"
      />

      <BaseButton class="w-full" :is-loading="isLoading"> Login </BaseButton>
      <BaseButton
        variant="outline"
        type="button"
        class="w-full"
        @click="loginWithHrm"
      >
        Login by HRM
      </BaseButton>
    </form>
  </div>
</template>

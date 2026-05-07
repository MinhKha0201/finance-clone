<script lang="ts" setup>
import BaseButton from "@/shared/components/base/BaseButton.vue";
import { LoaderCircle } from "lucide-vue-next";
import { onBeforeMount, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Logo from "~/assets/image/lutech.svg";
import { useAuth } from "~/modules/auth/composables/useAuth";

definePageMeta({
  layout: "auth",
  auth: false,
});

useSeoMeta({
  title: "Login by HRM",
});

const route = useRoute();
const code = route.query.code as any;

const { loginByHrm } = useAuth();

const handleBack = () => {
  return navigateTo("/login");
};

onMounted(async () => {
  // if (!code) return navigateTo("/login");
  await loginByHrm(code);
});
</script>
<template>
  <div class="flex flex-col gap-4 items-center">
    <img :src="Logo" alt="" class="h-20 w-20" />
    <p class="flex items-center gap-2 text-slate-600 text-sm">
      <span class="animate-spin inline-block">
        <LoaderCircle />
      </span>
      <!-- <span >Loading...</span> -->
      <!-- <span v-else>
				<span v-if="isError" class="text-destructive">Can not login by HRM</span>
				<span v-else>Redirecting...</span>
			</span> -->
    </p>

    <BaseButton variant="outline" @click="handleBack">Back</BaseButton>
  </div>
</template>

import { toast } from "vue-sonner";
import { useAuth } from "~/modules/auth/composables/useAuth";

// plugins/api.ts
export default defineNuxtPlugin(() => {
  const { accessToken } = useAuth();
  const config = useRuntimeConfig();

  const api = $fetch.create({
    baseURL: config.public.apiBase,
    headers: {
      Authorization: `Bearer ${accessToken.value}`,
    },

    onRequest({ request, options }) {
      options.headers = {
        ...options.headers,
      };
    },

    onResponse({ response }) {
      if (response?._data?.data?.errorCode) {
        toast.error(response._data.data.errorCode);
        return;
      }
    },

    onRequestError({ request, error }) {
      console.error("[fetch] Request error:", error);
    },

    onResponseError({ response }) {
      console.log(response);
    },
  });

  return { provide: { api } };
});

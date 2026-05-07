<script setup lang="ts">
import { SidebarInset, SidebarProvider } from "@/shared/components/ui/sidebar";
import ViewContainer from "~/shared/components/base/ViewContainer.vue";
import AppSidebar from "~/shared/components/sidebar/AppSidebar.vue";
import Header from "~/shared/components/sidebar/Header.vue";
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <Header />
      <NuxtPage v-slot="{ Component }">
        <ViewContainer>
          <component :is="Component" />
        </ViewContainer>
      </NuxtPage>
    </SidebarInset>
  </SidebarProvider>
</template>

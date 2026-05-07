<script lang="ts" setup>
import ToggleModeButton from "./ToggleModeButton.vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import BaseAvatar from "../base/BaseAvatar.vue";
import { useAuth } from "~/modules/auth/composables/useAuth";

const { logout } = useAuth();
</script>
<template>
  <header class="h-16 border-b shadow flex items-center px-4 justify-end gap-4">
    <ToggleModeButton />
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <div class="hover:cursor-pointer">
          <BaseAvatar />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-56" align="end" :side-offset="10">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        <DropdownMenuItem @click="logout"> Log out </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </header>
</template>

<script lang="ts" setup>
import { Moon, Sun } from "lucide-vue-next";
import { Button } from "../ui/button";

const colorMode = useColorMode();

const mounted = ref(false);

const toggleMode = () => {
  if (colorMode.value === "light") {
    colorMode.preference = "dark";
  } else {
    colorMode.preference = "light";
  }
};

onMounted(() => {
  mounted.value = true;
});
</script>

<template>
  <Button
    @click="toggleMode"
    variant="ghost"
    class="bg-inherit hover:bg-inherit"
  >
    <template v-if="mounted">
      <Sun v-if="colorMode.value === 'light'" />
      <Moon v-else />
    </template>
  </Button>
</template>

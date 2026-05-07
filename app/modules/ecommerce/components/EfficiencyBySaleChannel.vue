<script lang="ts" setup>
import { ArrowDown } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";
import ContentWrapper from "~/shared/components/base/ContentWrapper.vue";
import { Progress } from "~/shared/components/ui/progress";
import { Separator } from "~/shared/components/ui/separator";
import { cn } from "~/shared/lib/utils";

const props = defineProps<{
  textPrimary?: HTMLAttributes["class"];
  textSecondary?: HTMLAttributes["class"];
  borderClass?: HTMLAttributes["class"];
  bgPrimary?: HTMLAttributes["class"];
  bgSecondary?: HTMLAttributes["class"];
  class?: HTMLAttributes["class"];
}>();

const progress = ref(38);
</script>
<template>
  <ContentWrapper
    :class="
      cn('border flex flex-col gap-1', props.bgPrimary, props.borderClass)
    "
  >
    <div class="flex items-center gap-2">
      <div
        :class="
          cn(
            'w-8 h-8 border  rounded-md grid place-items-center  font-semibold',
            props.borderClass,
            props.textPrimary,
          )
        "
      >
        TT
      </div>
      <div class="flex-1">
        <p :class="cn('font-medium', props.textPrimary)">TikTok Shop</p>
        <p :class="cn('text-[10px]', props.textSecondary)">
          Platform fee ~5% · Team A focus
        </p>
      </div>
      <div
        :class="
          cn(
            'text-[10px] font-medium flex items-center gap-0.5  px-1 rounded',
            props.bgSecondary,
            props.textPrimary,
          )
        "
      >
        <ArrowDown :size="12" /> 14.0%
      </div>
    </div>
    <h3 class="text-xl font-semibold" :class="cn(props.textPrimary)">
      ₫18.39B
    </h3>
    <Separator class="bg-gray-200 my-1" />
    <div class="flex items-center text-xs">
      <p :class="cn('flex-1', props.textSecondary)">Đơn hàng</p>
      <span :class="cn('font-semibold', props.textPrimary)">5,820 đơn</span>
    </div>
    <div class="flex items-center text-xs">
      <p :class="cn('flex-1', props.textSecondary)">AOV (TB/đơn)</p>
      <span :class="cn('font-semibold', props.textPrimary)">₫3159K</span>
    </div>
    <div class="flex items-center text-xs">
      <p :class="cn('flex-1', props.textSecondary)">Quảng cáo TikTok Ads</p>
      <span :class="cn('font-semibold', props.textPrimary)">−₫3.68B</span>
    </div>
    <div class="flex items-center text-xs">
      <p :class="cn('flex-1', props.textSecondary)">Fulfill (hàng + ship)</p>
      <span :class="cn('font-semibold', props.textPrimary)">−₫10.11B</span>
    </div>
    <div class="flex items-center text-xs">
      <p :class="cn('flex-1', props.textSecondary)">Phí nền tảng (~5%)</p>
      <span :class="cn('font-semibold', props.textPrimary)">−₫919M</span>
    </div>
    <div class="flex items-center text-xs">
      <p :class="cn('flex-1', props.textSecondary)">LN gộp</p>
      <span :class="cn('font-semibold', props.textPrimary)">₫3.68B</span>
    </div>
    <Separator class="bg-gray-200 my-1" />
    <div class="flex items-center text-xs">
      <p :class="cn('flex-1', props.textSecondary)">Margin gộp</p>
      <span :class="cn('font-semibold', props.textPrimary)">38%</span>
    </div>
    <Progress
      :model-value="progress"
      class="h-1.5 *:data-[slot=progress-indicator]:rounded-4xl"
      :class="cn(props.class)"
    />
  </ContentWrapper>
</template>

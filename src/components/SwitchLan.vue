<template>
    <div class="flex items-center">

      <button
          class="flex items-center md:gap-[8px] gap-[2.5px] md:py-[20px] md:px-[20px] rounded-[8px]"
        >
          <div class="w-[24px] h-[24px]">
            <img src="../assets/we.svg" alt="we icon" />
          </div>
          <span class="text-[#1C414F] text-base font-medium">{{ $t('О нас') }}</span>
        </button>

        <button
        @click="switchLan()"
          class="flex items-center md:gap-[8px] gap-[2.5px] md:py-[20px] md:px-[20px] rounded-[8px]"
        >
          <div class="w-[24px] h-[24px]">
            <img src="../assets/earth-icon.svg" alt="earth icon" />
          </div>
          <span class="text-[#1C414F] text-base font-medium">{{ $t('Русский') }}</span>
        </button>

    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'

const { t , locale} = useI18n({useScope: 'global'})

const switchLan = () => {
    locale.value === 'en' ? locale.value = 'ru' : locale.value = 'en'
} 

</script>
<style scoped>
</style>
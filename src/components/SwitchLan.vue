<template>
    <div>
        <button
        @click="switchLan()"
          class="flex items-center md:gap-[8px] gap-[2.5px] md:py-[20px] md:px-[20px] md:bg-[#F0F3F5] rounded-[8px]"
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
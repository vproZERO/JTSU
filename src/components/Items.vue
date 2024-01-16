<template>
    <div v-for="item in items" :key="item.id" class="sm:pl-[20px] sm:pt-[30px] hidden sm:block sm:pb-[134px] sm:pr-[30px]  bg-white rounded-[10px] relative" :class="{ 'special-style col-span-2': isSpecial(item.id) }">
        <div>
            <h2 class="text-[#1C414F] text-lg font-bold md:mb-[15px] mb-[10px]">{{ item.title }}</h2>
            <ul class="list-disc text-[#1C414F] ml-[20px]">
                <li class="text-[#1C414F] text-sm font-normal sm:mb-[5px] mb-[3px]">7 лекции</li>
                <li class="text-[#1C414F] text-sm font-normal sm:mb-[5px] mb-[3px]">14 семинары</li>
                <li class="text-[#1C414F] text-sm font-normal sm:mb-[5px] mb-[3px]">14 семинары</li>
            </ul>
            <div :class="{ 'absolute bottom-[30px] right-[40px] sm:bottom-[40px] sm:right-[80px]': isSpecial(item.id) }" class="absolute bottom-[20px] right-[20px] sm:bottom-[30px] sm:right-[30px] sm:w-[100px] w-[60px] h-[60px] sm:h-[100px]">
                <img :src="item.imageUrl" :alt="item.title">
            </div>
        </div>
    </div>
    <div v-for="item in items" :key="item.id" class="sm:pl-[20px] sm:pt-[30px] sm:hidden block sm:pb-[134px] sm:pr-[30px] px-[16px] pt-[16px] pb-[94px] bg-white rounded-[10px] relative" :class="{ 'special-style col-span-2': isSpecial2(item.id) }">
        <div>
            <h2 class="text-[#1C414F] sm:text-lg text-base font-medium sm:font-bold md:mb-[15px] mb-[10px]">{{ item.title }}</h2>
            <ul class="list-disc text-[#1C414F] ml-[20px]">
                <li class="text-[#1C414F] text-sm font-normal sm:mb-[5px] mb-[3px]">7 лекции</li>
                <li class="text-[#1C414F] text-sm font-normal sm:mb-[5px] mb-[3px]">14 семинары</li>
                <li class="text-[#1C414F] text-sm font-normal sm:mb-[5px] mb-[3px]">14 семинары</li>
            </ul>
            <div :class="{ 'absolute bottom-[30px] right-[40px] sm:bottom-[40px] sm:right-[80px]': isSpecial2(item.id) }" class="absolute bottom-[20px] right-[20px] sm:bottom-[30px] sm:right-[30px] sm:w-[100px] w-[60px] h-[60px] sm:h-[100px]">
                <img :src="item.imageUrl" :alt="item.title">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        isSpecial(itemId) {
            return [5, 6 , 9, 10, 13 ,14].includes(itemId)
        },
        isSpecial2(itemId) {
            return [3, 4 , 9, 10].includes(itemId)
        }
    }
}
</script>
<style scoped>
.special-style{
    padding-left: 37px;
    padding-right: 80px;
    padding-top: 30px;
    padding-bottom: 124px;
}
@media screen and (max-width: 640px) {
    .special-style{
        padding-left: 16px;
        padding-right: 40px;
        padding-top: 16px;
        padding-bottom: 93px;
    }
}
</style>
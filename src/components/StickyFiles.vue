<template>
    <div class="bg-white rounded-[10px] px-[40px] pb-[40px] pt-[30px]">
        <h2 class="text-[#1C414F] font-bold text-lg lg:mb-[20px]">Приклепленные файлы</h2>
        <div class="flex items-center gap-x-[80px] flex-wrap">
            <div v-for="file in files" :key="file.id" class="flex items-center gap-[5px]  mb-[20px]">
                <button>
                    <img :src="file.img" alt="img">
                </button>
                <div>
                    <h2 class="text-[#1C414F] font-medium text-base">{{ file.title }}</h2>
                    <p class="text-[#1C414F] font-normal text-sm opacity-[0.6]">{{ file.author }}</p>
                    <p class="italic text-sm text-[#1C414F] font-light border-b-[1px] border-[#1C414F] max-w-[40px]">{{ file.type }}</p>
                </div>
            </div>

        </div>
    </div> 
</template>
<script>
import img from '../assets/pdf.svg'
export default {
    data() {
        return {
            files: [
                {id:1, title: 'Современные технологии в спорте.' , author: 'Л.Ш Икромов, О. Л Алиев' , type: 'Книга' , img: img},
                {id:2, title: 'Современные технологии в спорте.' , author: 'Л.Ш Икромов, О. Л Алиев' , type: 'Книга' , img: img},
                {id:3, title: 'Современные технологии в спорте.' , author: 'Л.Ш Икромов, О. Л Алиев' , type: 'Книга' , img: img},
                {id:4, title: 'Современные технологии в спорте.' , author: 'Л.Ш Икромов, О. Л Алиев' , type: 'Книга' , img: img},
                {id:5, title: 'Современные технологии в спорте.' , author: 'Л.Ш Икромов, О. Л Алиев' , type: 'Книга' , img: img},
            ]
        }
    }
}
</script>
<style lang="">
    
</style>
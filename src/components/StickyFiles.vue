<template>
    <div class="bg-white rounded-[10px] md:px-[40px] px-[16px]  pb-[40px] pt-[20px] md:pt-[30px]">
        <h2 class="text-[#1C414F] font-bold text-lg lg:mb-[20px] mb-[16px]">Приклепленные файлы</h2>
        <div class="flex items-center sm:gap-x-[60px] flex-wrap">
            <div v-for="file in files" :key="file.id" class="flex items-center gap-[5px] md:mb-[20px] mb-[15px]">
                <button class="w-[36px] h-[36px]">
                    <img :src="file.img" alt="img">
                </button>
                <div>
                    <h2 class="text-[#1C414F] font-medium text-base">{{ file.title }}</h2>
                    <p class="text-[#1C414F] font-normal text-sm opacity-[0.6]">{{ file.author }}</p>
                </div>
            </div>

        </div>
    </div> 
</template>
<script>
import pdf from '../assets/pdf.svg'
import doc from '../assets/doc.svg'
import mp4 from '../assets/mp4.svg'
import mp3 from '../assets/mp3.svg'
import file from '../assets/file.svg'
export default {
    data() {
        return {
            files: [
                {id:1, title: 'Современные технологии в спорте.' , author: 'Л.Ш Икромов, О. Л Алиев' ,img: doc},
                {id:2, title: 'Современные технологии в спорте.' , author: 'Л.Ш Икромов, О. Л Алиев' ,img: mp4},
                {id:3, title: 'Современные технологии в спорте.' , author: 'Л.Ш Икромов, О. Л Алиев' ,img: mp3},
                {id:4, title: 'Современные технологии в спорте.' , author: 'Л.Ш Икромов, О. Л Алиев' ,img: file},
                {id:5, title: 'Современные технологии в спорте.' , author: 'Л.Ш Икромов, О. Л Алиев' ,img: pdf},
            ]
        }
    }
}
</script>
<style lang="">
    
</style>
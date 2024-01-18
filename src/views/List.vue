<template>
    <div class="lg:px-36 px-[20px]">
        <Breadcrumb class="mb-[20px] md:block hidden"/>
        <h2 class="mb-[20px] text-[#1C414F] font-medium text-2xl lg:max-w-[723px]" >Тема 3: Профилактика нарушения репродуктивного здоровья студенток средствами физической культуры</h2>
        <div class="lg:flex items-start gap-[20px]">
            <ListLecture class="lg:block hidden"/>
            <StickyFiles class="mb-[35px] sm:mb-[39px]"/>
            <ListLecture class="lg:hidden block"/>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '../components/Breadcrumb.vue';
import StickyFiles from '../components/StickyFiles.vue';
import ListLecture from '../components/ListLecture.vue'
export default {
    components: {
        Breadcrumb,
        StickyFiles,
        ListLecture
    }
}
</script>
<style lang="">
    
</style>
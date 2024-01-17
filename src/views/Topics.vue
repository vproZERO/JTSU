<template>
    <div class="lg:px-36 px-[20px]">
        <h2 class="lg:mb-[20px] text-[#1C414F] font-medium text-2xl" >Предмет: Теория и методика физической реабилитации</h2>
        <StickyFiles class="mb-[40px]"/>
        <LectureTopics class="mb-[40px]"/>
        <PracticalTopic/>
    </div>
</template>
<script>
import StickyFiles from '../components/StickyFiles.vue'
import LectureTopics from '../components/LectureTopics.vue'
import PracticalTopic from '../components/PracticalTopics.vue'
export default {
    components: {
        StickyFiles,
        LectureTopics,
        PracticalTopic,
    }
}
</script>
<style lang="">
    
</style>
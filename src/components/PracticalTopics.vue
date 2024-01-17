<template>
    <div>
        <h2 class="text-[#1C414F] mb-[20px] font-bold text-lg">Тематика практический занятии</h2>
        <div class="bg-white rounded-[10px] mb-[8px] pt-[9px] flex items-center gap-[335px] pb-[8px] pr-[35px] pl-[179px]">
            <h2 class="opacity-[0.6] text-[#1C414F] font-normal text-base max-w-[171px]">Название</h2>
            <div class="flex items-center gap-[31px]">
                <h2 class="opacity-[0.6] text-[#1C414F] font-normal text-base max-w-[180px]">Теоритические задание</h2>
                <h2 class="opacity-[0.6] text-[#1C414F] font-normal text-base max-w-[171px]">Презентации</h2>
                <h2 class="opacity-[0.6] text-[#1C414F] font-normal text-base max-w-[171px]">Видео ролики</h2>
                <h2 class="opacity-[0.6] text-[#1C414F] font-normal text-base max-w-[171px]">Cамос. работа</h2>
            </div>
        </div>
        <div v-for="lecture in lectures" :key="lecture.id" class="practical_box bg-white rounded-[10px] mb-[8px] pt-[9px] flex items-center gap-[48px] pb-[8px] pl-[20px] pr-[10px]">
            <div class="flex items-center gap-[16px]">
                <span class="text-[#1C414F] font-normal text-lg ">{{ lecture.id }}.</span>
                <p class="max-w-[560px] text-[#1C414F] font-normal text-lg">{{ lecture.name }}</p>
            </div>
            <div class="flex items-center gap-[110px]">
                <div class="flex items-center gap-[8px]">
                    <button class="hover:-translate-y-1 transition">
                        <img :src="lecture.assignmentImg" :alt="lecture.name">
                    </button>
                <p class="max-w-[560px] text-[#1C414F] font-normal text-lg">{{ lecture.assignment }}</p>
                </div>
                <div class="flex items-center gap-[8px]">
                    <button class="hover:-translate-y-1 transition">
                        <img :src="lecture.presentationsImg" :alt="lecture.name">
                    </button>
                <p class="max-w-[560px] text-[#1C414F] font-normal text-lg">{{ lecture.presentations }}</p>
                </div>
                <div class="flex items-center gap-[8px]">
                    <button class="hover:-translate-y-1 transition">
                        <img :src="lecture.videoImg" :alt="lecture.name">
                    </button>
                <p class="max-w-[560px] text-[#1C414F] font-normal text-lg">{{ lecture.video }}</p>
                </div>
                <div class="flex items-center gap-[8px]">
                    <button class="hover:-translate-y-1 transition">
                        <img :src="lecture.workImg" :alt="lecture.name">
                    </button>
                <p class="max-w-[560px] text-[#1C414F] font-normal text-lg">{{ lecture.work }}</p>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import assignmentImg from '../assets/assignment.svg'
import presentationsImg from '../assets/presentations.svg'
import videoImg from '../assets/video.svg'
import workImg from '../assets/work.svg'
export default {
    data() {
        return {
            lectures: [
                {id: 1, name: 'Профилактика нарушения репродуктивного здоровья студенток средствами физической культуры', assignment: 2, presentations: 1 , video: 3 , videoImg: videoImg , work: 2 , assignmentImg: assignmentImg, presentationsImg: presentationsImg, workImg:workImg},
                {id: 2, name: 'Реализация профильного подхода в процессе физического воспитания учащихся.', assignment: 5, presentations: 5 , video: 0 , videoImg: videoImg , work: 4  , assignmentImg: assignmentImg, presentationsImg: presentationsImg, workImg:workImg},
                {id: 3, name: 'Особенности методики и организации занятий атлетической гимнастикой с учетом типа телосложения у мужчин.', assignment: 1,  presentations: 2 , video: 2 , videoImg: videoImg , work: 0 , assignmentImg: assignmentImg, presentationsImg: presentationsImg, workImg:workImg},
                {id: 4, name: 'Особенности методики и организации занятий атлетической гимнастикой женщин среднего возраста на основе кинезиологического подхода.', assignment: 3,presentations: 3 , videoImg: videoImg  , video: 1 ,work: 0  , assignmentImg:assignmentImg, presentationsImg: presentationsImg, workImg:workImg },
                {id: 5, name: 'Особенности методики и организации занятий атлетической гимнастикой женщин среднего возраста на основе кинезиологического подхода.', assignment: 3,presentations: 3 , videoImg: videoImg  , video: 1 ,work: 0  , assignmentImg:assignmentImg, presentationsImg: presentationsImg, workImg:workImg },
                {id: 6, name: 'Особенности методики и организации занятий атлетической гимнастикой женщин среднего возраста на основе кинезиологического подхода.', assignment: 3,presentations: 3 , videoImg: videoImg  , video: 1 ,work: 0  , assignmentImg:assignmentImg, presentationsImg: presentationsImg, workImg:workImg },
            ]
        }
    }
}
</script>
<style scoped>
    .practical_box::after{
        content: '';
        width: 24px;
        height: 24px;
        right: 10px;
        top: 24px;
        position: absolute;
        background-image: url('../assets/coma.svg');
        background-size: cover;
    }
</style>
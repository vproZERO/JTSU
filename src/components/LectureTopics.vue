<template>
    <div>
        <h2 class="text-[#1C414F] sm:mb-[20px] mb-[12px] font-bold text-lg">Тематика лекции</h2>
        <div class="bg-white rounded-[10px] mb-[8px] hidden xl:flex pt-[9px] flex items-center justify-between pb-[8px] pr-[35px] pl-[20px]">
            <h2 class="opacity-[0.6] text-[#1C414F] font-normal text-base w-[560px] text-center">Название</h2>
            <div class="flex items-center gap-[31px]">
                <h2 class="opacity-[0.6] text-[#1C414F] font-normal text-base max-w-[180px]">Теоритические задание</h2>
                <h2 class="opacity-[0.6] text-[#1C414F] font-normal text-base max-w-[171px]">Презентации</h2>
                <h2 class="opacity-[0.6] text-[#1C414F] font-normal text-base max-w-[171px]">Видео ролики</h2>
                <h2 class="opacity-[0.6] text-[#1C414F] font-normal text-base max-w-[171px]">Cамос. работа</h2>
            </div>
        </div>


        <div v-for="lecture in lectures" :key="lecture.id" class="lecture_box  cursor-pointer relative bg-white rounded-[10px] mb-[8px] lg:pt-[11px] md:pt-[15px] md:flex items-center justify-between  lg:pb-[11px] sm:pb-[7px] sm:pl-[13px] pt-[20px] pb-[28px] pl-[24px] pr-[42px] lg:pl-[20px] pr-[10px]">
            <div class="flex items-center lg:gap-[16px] sm:gap-[9px] md:mb-[0] mb-[12px] lg:w-[560px]">
                <span class="text-[#1C414F] font-normal text-lg md:block hidden">{{ lecture.id }}.</span>
                <p class="max-w-[560px] text-[#1C414F] font-normal text-lg "> <span class="inline-block md:hidden">{{ lecture.id }}.</span> {{ lecture.name }}</p>
            </div>

            <div class="flex items-center justify-between w-[45%]">
                <div class="flex items-center lg:gap-[8px] gap-[4px]">
                    <button class="sm:w-[24px] sm:h-[24px] w-[16px] h-[16px]">
                        <img :src="lecture.assignmentImg" :alt="lecture.name">
                    </button>
                <p class="max-w-[560px] text-[#1C414F] font-normal sm:text-lg text-sm">{{ lecture.assignment }}</p>
                </div>
                <div class="flex items-center lg:gap-[8px] gap-[4px]">
                    <button class="sm:w-[24px] sm:h-[24px] w-[16px] h-[16px]">
                        <img :src="lecture.presentationsImg" :alt="lecture.name">
                    </button>
                    <p class="max-w-[560px] text-[#1C414F] font-normal sm:text-lg text-sm">{{ lecture.presentations }}</p>
                </div>
                <div class="flex items-center lg:gap-[8px] gap-[4px]">
                    <button class="sm:w-[24px] sm:h-[24px] w-[16px] h-[16px]">
                        <img :src="lecture.videoImg" :alt="lecture.name">
                    </button>
                <p class="max-w-[560px] text-[#1C414F] font-normal sm:text-lg text-sm">{{ lecture.video }}</p>
                </div>
                <div class="flex items-center lg:gap-[8px] gap-[4px]">
                    <button class="sm:w-[24px] sm:h-[24px] w-[16px] h-[16px]">
                        <img :src="lecture.workImg" :alt="lecture.name">
                    </button>
                <p class="max-w-[560px] text-[#1C414F] font-normal sm:text-lg text-sm">{{ lecture.work }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import assignmentImg from '../assets/doc.svg'
import presentationsImg from '../assets/presentations.svg'
import videoImg from '../assets/mp4.svg'
import workImg from '../assets/file.svg'
export default {
    data() {
        return {
            lectures: [
                {id: 1, name: 'Профилактика нарушения репродуктивного здоровья студенток средствами физической культуры', assignment: 2, presentations: 1 , video: 3 , videoImg: videoImg , work: 2 , assignmentImg: assignmentImg, presentationsImg: presentationsImg, workImg:workImg},
                {id: 2, name: 'Реализация профильного подхода в процессе физического воспитания учащихся.', assignment: 5, presentations: 5 , video: 0 , videoImg: videoImg , work: 4  , assignmentImg: assignmentImg, presentationsImg: presentationsImg, workImg:workImg},
                {id: 3, name: 'Особенности методики и организации занятий атлетической гимнастикой с учетом типа телосложения у мужчин.', assignment: 1,  presentations: 2 , video: 2 , videoImg: videoImg , work: 0 , assignmentImg: assignmentImg, presentationsImg: presentationsImg, workImg:workImg},
                {id: 4, name: 'Особенности методики и организации занятий атлетической гимнастикой женщин среднего возраста на основе кинезиологического подхода.', assignment: 3,presentations: 3 , videoImg: videoImg  , video: 1 ,work: 0  , assignmentImg:assignmentImg, presentationsImg: presentationsImg, workImg:workImg },
            ]
        }
    }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

thead {
  background-color: white;
  margin-bottom: 8px;
}
tbody {
  background-color: white;
  margin-bottom: 8px;
}
th {
    padding-top: 9px;
    padding-bottom: 8px;
    text-align: center;
    max-width: 171px;
}
.th_name{
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: 179px;
}
.th_work{
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

td {
    max-width: 560px;
    padding-top: 11px;
    padding-bottom: 11px;
    padding-left: 49px;
}

</style>
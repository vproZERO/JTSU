<template>
  <div class="lg:px-20 px-[20px] mt-[80px] py-[22px]">
    <div
      class="lg:flex block items-start justify-between w-full aos-inti aos-animate"
      data-aos="fade-up"
      data-aos-duration="1400"
    >
      <div class="mb-[30px] lg:mb-0">
        <h2 class="text-3xl font-bold text-[#1C414F]">OʻzDJTSU</h2>
        <p class="text-sm font-normal max-w-[321px] mt-[6px] text-[#1C414F]">
          {{
            $t(
              "Следите за новостями на нашем сайте, и тогда вы сможете приобрести знания и навыки, которые пригодятся в будущем"
            )
          }}
        </p>
      </div>
      <div class="flex items-center">
        <div>
          <h2 class="text-xl font-medium text-[#1C414F]">
            {{ $t("Наши контакты") }}
          </h2>
          <div class="flex items-center mt-[19px] gap-[10px]">
            <div class="w-[16px] h-[16px]">
              <img src="../assets/location.svg" alt="location" />
            </div>
            <p
              class="md:text-sm text-xs font-normal max-w-[350px] text-[#1C414F]"
            >
              {{ $t("Ташкентская область, г Чирчик, ул Спортивная, 19") }}
            </p>
          </div>
          <div class="flex items-center mt-[12px] gap-[10px]">
            <div>
              <img src="../assets/tel.svg" alt="tel" />
            </div>
            <p
              class="md:text-sm text-xs font-normal max-w-[355px] text-[#1C414F]"
            >
              +998 90 000 00 00
            </p>
          </div>
          <div class="flex items-center mt-[12px] gap-[10px]">
            <div>
              <img src="../assets/email.svg" alt="email" />
            </div>
            <p
              class="md:text-sm text-xs font-normal max-w-[355px] text-[#1C414F]"
            >
              info@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
    <ul class="flex items-center gap-[40px] mt-[39px] flex-wrap">
      <li class="text-[#1C414F] text-xs font-normal opacity-[0.6]">
        © 2023 ООО. All rights reserved
      </li>
      <li class="text-[#1C414F] text-xs font-normal opacity-[0.6]">
        {{ $t("Политика безопасности") }}
      </li>
      <li class="text-[#1C414F] text-xs font-normal opacity-[0.6]">
        {{ $t("Условия соглашения") }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>

<template>
    <div class="px-[20px]">
      
      <div class="md:w-[500px] bg-white rounded-[10px] h-[500px] px-[60px] pt-[50px] mx-auto">
        <h2 class="text-xl font-medium mb-[30px]">Пожалуйста выберите свое <br> направление:</h2>
        <button @click="selectDirection('Бакалавр')" class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px]">
          <span class="text-[#172F38] text-lg font-normal"> Бакалавр</span>
        </button>
        <button @click="selectDirection('Магистратура')" class="w-full relative flex items-center juftify-between px-[20px] py-[17px] hover:translate-x-1 transition border border-[#C3C3C3] rounded-[8px] mt-[8px]">
          <span class="text-[#172F38] text-lg font-normal"> Магистратура</span>
        </button>
      </div>

    </div>
</template>
<script>
export default {
  methods: {
    selectDirection(direction) {
      this.$store.commit('setDirection', direction);
      this.$router.push({ name: 'faculty' });
    }
  }
};
</script>
<style scoped>
button:hover{
  border: 1px solid #2BB231;
  background-color: #DFF4E0;
}
h2{
  color: #1C414F;
}
button span {
  color: #1C414F;
}
button:hover span{
  color: #2BB231;
}
button::after{
  content: '';
  margin-left: auto;

  width: 24px;
  height: 24px;
  background-image: url('../assets/right-arrow.svg');
  background-size: cover;
}
button:hover:after{
  content: '';
  margin-left: auto;
  width: 24px;
  height: 24px;
  background-image: url('../assets/right-arrow-2.svg');
  background-size: cover;
}
</style>
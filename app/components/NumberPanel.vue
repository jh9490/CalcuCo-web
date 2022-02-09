<template>
 <div class="grid grid-cols-4 gap-4 buttons">
  <button v-for="i in 10" :key="i" @click="addItem(i-1)">{{i-1}}</button>
  <button  @click="addItem('(')">(</button>
  <button  @click="addItem(')')">)</button>
</div>

</template>
<script>

export default{
   methods :{
      addItem(num){
         this.$emit('set', num.toString());
      }
   }
}
</script>
<style scoped>
.buttons button{
  background: #ccc;
}

.buttons button:hover{
   background: #4f46e5;
   color: #fff;
}
</style>

<template>
<div class="grid grid-cols-4 gap-4 buttons">
  <button v-for="b in buttons" :key="b.key" @click="addOperation(b.key)">{{b.title}}</button>
</div>

</template>
<script>
import operations from '../json/operations.json';
export default {
  data(){
      return{
         buttons : operations
      }
  },
 methods : {
    addOperation(k){
       this.$emit('set', k);
    }
 }
}
</script>
<style scoped>
.buttons button{
    background: #030212ab;
    color: #fff;
}
</style>

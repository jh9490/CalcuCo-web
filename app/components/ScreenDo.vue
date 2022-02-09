<template>
<div class="">
<div class="exp-container">
  <input type="text" class="expression" v-model="exp" placeholder="Type Here Your Expression Here Ex: 3*6/8" />
</div>
<div class="result">
      {{result}}
</div>
</div>


</template>
<script>
export default {
   props: {
   keyP: String,
   updatedResult: String
   },
    data(){
       return {
          result : 0,
          exp: ""
       }
    },
    watch : {
       keyP(newVal , oldVal){
            switch(newVal){
              case 'c':{
                 this.exp = this.exp.slice(0, -1);
                 break;
              }
              case 'ca' : {
                this.exp = "";
                      break;
              }
              default :{
                 this.exp+= newVal;
                       break;
              }
            }

            this.$emit('expression', this.exp);
       },
       updatedResult(newVal,oldVal){
              this.result = newVal;
       }
    }
}
</script>
<style>
.expression{
      width: 100%;
    padding: 2rem;
    border: 1px solid #ccc;
    font-size: 2rem;
}

input[type='text'].expression:active{
   outline: none !important;
  border: 1px solid #4f46e5 !important;
}


input[type='text'].expression:focus{
   outline: none !important;
  border: 1px solid #4f46e5 !important;
}

.result{
      padding: 1rem;
    background: #030212;;
    color: #fff;
    font-size: 1.3rem;
}
</style>

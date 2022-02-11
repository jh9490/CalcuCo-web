<template>
<div class="container">
    <div class="calc-body">
        <div class="calc-screen">
            <div class="calc-operation">{{expression}}</div>
            <div class="calc-typed">{{result}}</div>
        </div>
        <div class="calc-button-row">
            <div class="button c" @click="press('c')">C</div>
            <div class="button" @click="press('^')">^</div>
            <div class="button" @click="press('%')" >%</div>
            <div class="button" @click="press('/')">/</div>
        </div>
        <div class="calc-button-row">
            <div class="button num" @click="press('7')">7</div>
            <div class="button num" @click="press('8')">8</div>
            <div class="button num" @click="press('9')">9</div>
            <div class="button" @click="press('*')">x</div>
        </div>
        <div class="calc-button-row">
            <div class="button num" @click="press('4')">4</div>
            <div class="button num" @click="press('5')">5</div>
            <div class="button num" @click="press('5')">6</div>
            <div class="button" @click="press('-')">−</div>
        </div>
        <div class="calc-button-row">
            <div class="button num" @click="press('1')">1</div>
            <div class="button num" @click="press('2')">2</div>
            <div class="button num" @click="press('3')">3</div>
            <div class="button" @click="press('+')">+</div>
        </div>
        <div class="calc-button-row">
            <div class="button num" @click="press('.')">.</div>
            <div class="button num" @click="press('0')">0</div>
            <div class="button num" @click="press('=')">=</div>
            <div class="button" @click="press('sqrt')" v-html="'&#8730;'">
            </div>
        </div>
        <div class="calc-button-row">
            <div class="button c" @click="press('ca')">AC</div>
            <div class="button" @click="press('(')">(</div>
            <div class="button" @click="press(')')">)</div>
            <div class="button" @click="press('!')" v-html="'&#33;'">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import {
    apiUrl
} from '../constants/api';

export default {
    name: "IndexPage",
    components: {
    },
    data() {
        return {
            expression: "",
            result: 0
        }
    },
    created(){
        this.$nuxt.$on('keypress', (event) => {
          console.log(event);
           if(event.keyCode === 13){
              this.getResult();
           }else{
             this.press(event.key);
           }

        });
    },
  mounted() {
    window.addEventListener("keypress", function(e) {
      this.$nuxt.$emit('keypress', e)
    });
   },
    methods: {
        press(char){
             switch(char){
              case 'c':{
                 this.expression = this.expression.slice(0, -1);

                 break;
              }
              case 'ca' : {
                this.expression = "";
                      break;
              }
              case '=' : {
               this.getResult();
                      break;
              }
              default :{
                 this.expression+= char;
                       break;
              }
            }
        },
        async getResult() {
            this.result = await axios.post(apiUrl + 'calc', {
                    'expressionString': this.expression,
                })
                .then(function (response) {

                    return response.data.result.toString();
                })
                .catch(function (error) {
                    alert(error.response.data.message);
                    return error.response.data.message;
                });
        }
    }
}
</script>

<style>
* {
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
}

body {
    background: #EAEBEC;
}

.container {
    width: 600px;
    margin: auto;
}

.calc-body {
    margin: auto;
    min-height: 400px;
    border: solid 1px #3A4655;
    box-shadow: 0 8px 50px -7px black;
}

.calc-screen {
    background: #3A4655;
    width: 100%;
    height: 150px;
    padding: 20px;
}

.calc-operation {
    text-align: right;
    color: #eaebec;
    font-size: 21px;
    padding-bottom: 10px;
    border-bottom: dotted 1px;
}

.calc-typed {
    margin-top: 20px;
    font-size: 45px;
    text-align: right;
    color: #fff;
}

.calc-button-row {
    width: 100%;
    background: #3C4857;
}

.button {
    width: 25%;
    background: #425062;
    color: #fff;
    padding: 20px;
    display: inline-block;
    font-size: 25px;
    text-align: center;
    vertical-align: middle;
    margin-right: -4px;
    border-right: solid 2px #3C4857;
    border-bottom: solid 2px #3C4857;
    transition: all 0.2s ease-in-out;
}

.button.l {
    color: #AEB3BA;
    background: #404D5E;
}

.button.c {
    color: #D95D4E;
    background: #404D5E;
}

.button.num{
  background:#191f26;
}

.button:hover {
    background: #E0B612;
    transform: scale(5px);
}

.button.c:hover,
.button.l:hover {
    background: #E0B612;
    color: #fff;
}

.blink-me {
    color: #E0B612;
}
@media (max-width:600px) {
  .container {
   width: 500px;
    margin: 1px;
}

  .calc-body {
    margin: 1px;
    min-height: 400px;
    border: solid 1px #3A4655;
    box-shadow: 0 8px 50px -7px black;
    width: 380px;
}
}

</style>

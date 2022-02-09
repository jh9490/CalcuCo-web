<template>
<div class="container mx-auto px-16">
    <div class="grid space-y-4 ">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span class="block">Ready to CalCu Co</span>
            <span class="block text-indigo-600">Start your amazing calculator.</span>
        </h2>
        <ScreenDo :updatedResult="result" :keyP="keyPressed" @expression="setExpression($event)" />
        <div class="grid grid-cols-2 gap-2">
            <buttons-panel @set="getValue($event)"></buttons-panel>
            <number-panel @set="getValue($event)"></number-panel>
        </div>
        <div class="result-btn">
            <button class="result-btn" @click="getResult()">Result</button>
        </div>

    </div>

</div>
</template>

<script>
import axios from 'axios';
import {apiUrl} from '../constants/api';
import ButtonsPanel from '../components/ButtonsPanel.vue';
import NumberPanel from '../components/NumberPanel.vue';
import ScreenDo from "../components/ScreenDo.vue";


export default {
    name: "IndexPage",
    components: {
        ScreenDo,
        ButtonsPanel,
        NumberPanel
    },
    data() {
        return {
            keyPressed: "",
            expression : "",
            result : ""
        }
    },
    methods: {
        getValue(event) {
            this.keyPressed = event;
        },
        setExpression(event){
          console.log("setExpression");
          console.log(event);
         this.expression = event;
        },
       async  getResult() {
         this.result = await axios.post(apiUrl + 'calc', {
                    'expression': this.expression,
                })
                .then(function (response) {

                    return response.data.result.toString();
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}
</script>

<style>
.buttons button {
    padding: 0.5rem 1rem;
    background: #030212ab;
    color: #fff;
    font-size: 1.5rem;
    border-radius: 4px;
}
</style>
<style>
.buttons button {
    color: #fff;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
}

.result-btn {
    padding: 0.5rem;
    text-align: center;
    width: 100%;
    background: #4f46e5;
    color: #fff;
    font-size: 1.2rem;
}
</style>

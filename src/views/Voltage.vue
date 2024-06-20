// voltage page

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import SensorChart from '../components/SensorChart.vue';
import BackBtn from '../components/BackBtn.vue';

const voltageData = ref([]);
const dataReady = ref(false);

const fetch8hDataAgo = () => {
    return axios.get('http://localhost:3000/sensor/voltage')
        .then(response => {
            const data = response.data.voltage_data;
            data.forEach(element => {
                voltageData.value.push(element);
            });
            console.log(voltageData);
            dataReady.value = true;
        })
        .catch(error => {
            console.error('Error fetching sensor data:', error);
        });
};

onMounted(() => {
    fetch8hDataAgo();
})
</script>

<template>
    <div v-if="dataReady" class="w-[100%] flex flex-col justify-center items-center">
        <SensorChart title="Voltage" :yAxisData="voltageData" :max="200" />
        <BackBtn />
    </div>
    <div>
        <h1>Loading...</h1>
    </div>
</template>
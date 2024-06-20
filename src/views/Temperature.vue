// temperature page

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import SensorChart from '../components/SensorChart.vue';
import BackBtn from '../components/BackBtn.vue';

const temperatureData = ref([]);
const dataReady = ref(false);

const fetch8hDataAgo = () => {
    return axios.get('http://localhost:3000/sensor/temperature')
        .then(response => {
            const data = response.data.temperature_data;
            data.forEach(element => {
                temperatureData.value.push(element);
            });
            console.log(temperatureData);
            dataReady.value = true;
        })
        .catch(error => {
            console.error('Error fetching sensor data:', error);
        });
};

onMounted(() => {
    fetch8hDataAgo();
});
</script>

<template>
    <div v-if="dataReady" class="w-[100%] flex flex-col justify-center items-center">
        <SensorChart title="Temperature" :yAxisData="temperatureData" :max="100" />
        <BackBtn />
    </div>
    <div else>
        <h1>Loading...</h1>
    </div>
</template>
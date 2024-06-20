// home page shows all sensors

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SensorBox from "../components/SensorBox.vue";
import HumidityIcon from "../components/icons/HumidityIcon.vue";
import TemperatureIcon from "../components/icons/TemperatureIcon.vue";
import VoltageIcon from "../components/icons/VoltageIcon.vue";

const humidity = ref(0);
const temperature = ref(0);
const voltage = ref(0);
const fetchSensorData = () => {
  return axios.get('http://localhost:3000/sensors/list')
    .then(response => {
      humidity.value = response.data.humidity;
      temperature.value = response.data.temperature;
      voltage.value = response.data.voltage;
    })
    .catch(error => {
      console.error('Error fetching sensor data:', error);
    });
};

onMounted(() => {
  setInterval(fetchSensorData, 60000);
});

</script>

<template>
  <header>
    <h1 class="text-[24px] text-[#fff] mb-4">Monitoring System</h1>
  </header>
  <main>
    <SensorBox sensor="Humidity" :value="humidity" symbol="%" route="humidity" :icon="HumidityIcon" />
    <SensorBox sensor="Temperature" :value="temperature" symbol="°C" route="temperature" :icon="TemperatureIcon" />
    <SensorBox sensor="Voltage" :value="voltage" symbol="V" route="voltage" :icon="VoltageIcon" />
  </main>
</template>

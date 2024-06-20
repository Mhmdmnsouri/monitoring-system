// chart of each sensor component

<script setup>
import * as echarts from "echarts";
import { onMounted, defineProps, ref } from "vue";

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    yAxisData: {
        type: Array,
        required: true,
    },
    max: {
        type: Number,
        required: true,
    },
});

const xAxisData = ref([]);

onMounted(() => {
    const chartDom = document.getElementById("container");
    const myChart = echarts.init(chartDom, "dark");
    const minutes = (() => {
        let now = new Date();
        let res = [];
        let len = 8 * 60;
        while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
            now = new Date(+now - 60000);
        }
        return res;
    })();
    xAxisData.value = minutes;

    const option = {
        title: {
            text: props.title,
            left: "center",
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross",
                label: {
                    backgroundColor: "#283b56",
                },
            },
        },
        xAxis: [
            {
                type: "category",
                boundaryGap: true,
                data: xAxisData.value,
            },
        ],
        yAxis: [
            {
                type: "value",
                scale: true,
                name: "Value",
                max: props.max,
                min: 0,
                boundaryGap: [0.2, 0.2],
            },
        ],
        series: [
            {
                name: props.title,
                type: 'line',
                smooth: true,
                data: props.yAxisData,
                label: {
                    show: true,
                    position: "top",
                    formatter: "{c}",
                },
            },
        ],
    };

    option && myChart.setOption(option);

});
</script>

<template>
    <div id="container"></div>
</template>

<style scoped>
#container {
    width: 100%;
    height: 400px;
}
</style>
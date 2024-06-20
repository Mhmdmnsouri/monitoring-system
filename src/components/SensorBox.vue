// sensor box component

<script setup>
const props = defineProps({
    sensor: { type: String, required: true },
    value: { type: Number, required: true },
    symbol: { type: String, required: true },
    route: { type: String, required: true },
    icon: { type: Object, required: false },
});
</script>

<template>
    <RouterLink :to="`/sensor/${route}/8h`"
        class="p-4 m-4 flex justify-around rounded-md border border-[#444] w-[80vw] md:w-[500px] bg-[#222] text-[#fff] hover:bg-[#333] transition-all">
        <div class="flex gap-2 items-center justify-start w-40">
            <component :is="icon" />
            <h2>{{ sensor }}</h2>
        </div>
        <div class="flex w-10">
            <h2>{{ value }}</h2>
            <span>{{ symbol }}</span>
        </div>
    </RouterLink>
</template>

<style scoped></style>
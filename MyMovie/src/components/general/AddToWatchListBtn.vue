<template>
    <a
    href="#"
    class="text-white text-lg bg-[#ffffff5e] rounded-2xl"
    :style="{paddingTop : py, paddingBottom: py, paddingRight: px, paddingLeft: px}"
    >
    <img
        src="../assets/plus.png"
        alt="#"
        class="inline-block w-6 h-6"
    />
    </a>
</template>

<script setup>
    defineProps({
        'px' : {
            type: String,
            default : '12px'
        },
        'py' : {
            type: String,
            default : '10px'
        }
    })
</script>

<!-- why padding doesn't work !!! -->
<template>
    <a
    href="#"
    class="bg-primary rounded-xl inline-block text-white shadow-lg shadow-primary-dark text-sm"
    :class="[`py-[${py}]`, `px-[${px}]`]"
    ><slot>More Detail</slot></a
    >
</template>

<script setup>
    defineProps({
        'px' : {
            type: String,
            default : '16px'
        },
        'py' : {
            type: String,
            default : '12px'
        }
    })
</script>
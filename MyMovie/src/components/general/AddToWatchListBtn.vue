<template>
    <a
    href="#"
    class="text-white text-lg rounded-2xl"
    :style="{padding : `${px} ${py}`}"
    :class="{'glss-bg' : isGlassy, 'normal-btn' : !isGlassy}"
    >
    <img
        src="@/assets/plus.png"
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
        },
        'isGlassy' : {
            default : false
        }
    })
</script>

<style scoped>
.glss-bg {
  /* From https://css.glass */
  background: rgba(31, 31, 31, 0.48);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.normal-btn {
    background-color: rgba(255, 255, 255, 0.37);
}
</style>
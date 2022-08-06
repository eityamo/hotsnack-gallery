<template>
    <transition name="fade"><slot /></transition>
</template>

<script>
export default {
    name: 'BaseTransition',
}
</script>

<style scoped>
.fade-enter-active {
    transition: all 1.0s ease;
}
.fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter {
    transform: translateX(15px);
    opacity: 0;
}
.fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
}
</style>

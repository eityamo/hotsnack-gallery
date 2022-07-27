<template>
    <base-layout>
        <router-view />
    </base-layout>
</template>

<script>
import { BaseLayout } from './components/layout'

export default {
    components: {
        BaseLayout,
    },
}
</script>

<style scoped>
#app {
    --background-color: #f6f5ee;
    background-color: var(--background-color);
    font-weight: bold;
    color: #2e1f1f;
}
</style>

<template>
    <v-app>
        <the-header />
        <v-main>
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
            <v-row class="ma-6" />
        </v-main>
        <the-footer />
    </v-app>
</template>

<script>
import { TheHeader, TheBottomNavigation, TheFooter } from '../shared'

export default {
    name: 'BaseLayout',
    components: {
        TheHeader,
        TheBottomNavigation,
        TheFooter,
    },
}
</script>

<style scoped>
.fade-enter-active {
    transition: all 0.5s ease;
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

<template>
    <v-app>
        <the-header />
        <v-main>
            <transition name="slide" mode="out-in">
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

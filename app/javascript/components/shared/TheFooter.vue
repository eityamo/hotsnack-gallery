<template>
    <v-footer>
        <v-bottom-navigation app color="primary" height="70">
            <the-bottomNavigation />
        </v-bottom-navigation>
    </v-footer>
</template>

<script>
import { TheBottomNavigation } from './index'

export default {
    name: 'TheFooter',
    components: {
        TheBottomNavigation,
    },
}
</script>

<template>
    <v-app>
        <base-transition>
            <div v-if="isContainerElementVisible">
                <the-header />
                <v-main>
                    <base-transition>
                        <router-view />
                    </base-transition>
                </v-main>
                <the-footer />
            </div>
        </base-transition>
    </v-app>
</template>

<script>
import { BaseTransition } from '../atom/transitions/index'
import { TheHeader, TheBottomNavigation, TheFooter } from '../shared'

export default {
    name: 'BaseLayout',
    components: {
        TheHeader,
        TheBottomNavigation,
        TheFooter,
        BaseTransition,
    },
    data() {
        return {
            isContainerElementVisible: false,
        }
    },
    created() {
        // 最初のページ表示時のトランジション実行時間
        setTimeout(() => (this.isContainerElementVisible = true), 500)
    },
}
</script>

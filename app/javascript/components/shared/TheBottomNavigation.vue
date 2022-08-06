<template>
    <v-row align="center" justify="center">
        <v-btn value="home" to="/">
            <span>Gallely</span>

            <v-icon>mdi-bank</v-icon>
        </v-btn>

        <v-btn value="random" @click="hundleRandomButton" :disabled="canClickRandomButton">
            <span>Random</span>

            <v-icon>mdi-palette-swatch</v-icon>
        </v-btn>

        <v-btn value="category" :to="{ name: 'CategoryList' }">
            <span>Category</span>

            <v-icon>mdi-palette</v-icon>
        </v-btn>

        <v-btn value="share">
            <span>Share</span>

            <v-icon>mdi-twitter</v-icon>
        </v-btn>
    </v-row>
</template>

<script>
export default {
    name: 'TheBottomNavigation',
    data() {
        return {
            randomUuid: '',
            canClickRandomButton: false,
        }
    },
    computed: {
        currentPath() {
            return this.$route.path
        },
    },
    watch: {
        currentPath: function () {
            this.fetchRandomHotsnack()
        },
    },
    mounted() {
        this.fetchRandomHotsnack()
    },
    methods: {
        async hundleRandomButton() {
            this.canClickRandomButton = true

            await this.$router.push({ name: 'HotsnackDetail', params: { item_uuid: this.randomUuid } })
            // ランダムボタンのデバウンス対応
            setTimeout(() => (this.canClickRandomButton = false), 1000)
        },
        async fetchRandomHotsnack() {
            try {
                const { data: uuid } = await this.$axios.get('/random')

                // API取得したUUIDと現在のURLのUUIDが一致した時には、再帰的に処理を行う
                if (this.$route.path === `/hotsnack/${uuid}`) {
                    await this.fetchRandomHotsnack()
                    return
                }

                this.randomUuid = uuid
            } catch (error) {
                console.error(error)
            }
        },
    },
}
</script>

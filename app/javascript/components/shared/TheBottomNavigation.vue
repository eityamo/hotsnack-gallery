<template>
    <v-row align="center" justify="center">
        <v-btn value="home" to="/">
            <span class="Lusitana">Gallely</span>

            <v-icon>mdi-bank</v-icon>
        </v-btn>

        <v-btn value="random" @click="hundleRandomButton" :disabled="disabledRandomButton">
            <span class="Lusitana">Random</span>

            <v-icon>mdi-palette-swatch</v-icon>
        </v-btn>

        <v-btn value="category" :to="{ name: 'CategoryList' }">
            <span class="Lusitana">Ranking</span>

            <v-icon>mdi-palette</v-icon>
        </v-btn>

        <v-btn value="share" @click="twitterShare">
            <span class="Lusitana">Share</span>

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
            disabledRandomButton: false,
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
            this.disabledRandomButton = true

            await this.$router.push({ name: 'HotsnackDetail', params: { item_uuid: this.randomUuid } })
            // ランダムボタンのデバウンス対応
            setTimeout(() => (this.disabledRandomButton = false), 1000)
        },
        async fetchRandomHotsnack() {
            try {
                const { data: uuid, status } = await this.$axios.get('/random')

                // status === 304の時にcatchに処理を移す
                if (status !== 200) {
                    throw new Error()
                }

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
        twitterShare() {
            var shareURL =
                'https://twitter.com/intent/tweet?text=' +
                'ユーザー参加型のバーチャル美術館' +
                '%0a' +
                'あなたの査定がホットスナックの印象を変える' +
                '%0a' +
                '%23ホットスナック美術館' +
                '%0a' +
                'https://www.hotsnack-gallery.com/'
            window.open(shareURL, '_blank')
        },
    },
}
</script>

<style scoped>
.Lusitana {
    font-family: 'Lusitana', cursive;
}
</style>

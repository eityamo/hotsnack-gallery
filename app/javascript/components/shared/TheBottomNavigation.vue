<template>
    <v-row align="center" justify="center">
        <v-btn value="home" to="/">
            <span>Gallely</span>

            <v-icon>mdi-bank</v-icon>
        </v-btn>

        <v-btn value="random" @click="hundleRandomButton" :disabled="isRandomButton">
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
            random_uuid: '',
            isRandomButton: false,
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
            this.isRandomButton = true
            await this.$router.push(`/hotsnack/${this.random_uuid}`)
            setTimeout(() => (this.isRandomButton = false), 300)
        },
        async fetchRandomHotsnack() {
            try {
                do {
                    await this.$axios.get('/random').then((res) => {
                        this.random_uuid = res.data
                    })
                } while (this.$route.path === `/hotsnack/${this.random_uuid}`)
            } catch (error) {
                console.log(error)
            }
        },
    },
}
</script>

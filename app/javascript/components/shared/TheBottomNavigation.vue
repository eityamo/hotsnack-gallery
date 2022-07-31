<template>
    <v-row align="center" justify="center">
        <v-btn value="home" to="/">
            <span>Gallely</span>

            <v-icon>mdi-bank</v-icon>
        </v-btn>

        <v-btn value="random" :to="{ name: 'HotsnackDetail', params: { item_uuid: 150047 } }">
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
}
</script>

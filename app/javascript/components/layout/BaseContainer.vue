<template>
    <v-container class="container">
        <slot />
    </v-container>
</template>

<script>
export default {
    name: 'BaseContainer',
}
</script>

<style scoped>
.container {
    max-width: 375px;
}
</style>

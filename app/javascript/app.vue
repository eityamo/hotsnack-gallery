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

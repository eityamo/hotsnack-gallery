<template>
    <div>
        <input v-model.number="num" type="number" />
        <animated-number :value="num" />
    </div>
</template>

<script>
import AnimatedNumber from '../components/atom/numbers/AnimatedNumber.vue'
export default {
    components: { AnimatedNumber },
    data() {
        return {
            num: 0,
        }
    },
}
</script>

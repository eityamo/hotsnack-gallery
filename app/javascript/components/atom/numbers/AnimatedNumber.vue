<template>
    <span>{{ animated_number }}</span>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            animated_number: 0,
        }
    },
    watch: {
        value(newValue, oldValue) {
            let timeCnt = 0
            let timer
            const animate = () => {
                timeCnt++
                if (timeCnt <= 60) {
                    this.animated_number = Math.floor(((newValue - oldValue) * timeCnt) / 60) + oldValue
                    timer = setTimeout(() => {
                        animate()
                    }, 10)
                } else {
                    clearTimeout(timer)
                    timer = null
                    this.animated_number = newValue
                }
            }
            animate()
        },
    },
    mounted() {
        this.animated_number = this.value
    },
}
</script>

<template>
    <span>{{ animatedNumberToLocaleStirng }}</span>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    data() {
        return {
            animatedNumber: 0,
            timeCnt: 0,
            timer: null,
        }
    },
    methods: {
        animate(newValue, oldValue) {
            this.timeCnt++

            // 60回まで実行する
            if (this.timeCnt <= 60) {
                // watchで監視している値を監視し再計算後、animatedNumberに格納
                this.animatedNumber = Math.floor(((newValue - oldValue) * this.timeCnt) / 60) + oldValue

                // 次の計算結果を格納するために、0.01秒後に実行する
                this.timer = setTimeout(() => this.animate(newValue, oldValue), 10)
            } else {
                // 60回を超えた時に実行
                // setTimeout関数の処理がおわるため、クリーンアップ関数を実行
                clearTimeout(this.timer)

                // 再帰処置が終わるため、timeCnt, timeをリセットする
                this.timeCnt = 0
                this.timer = null

                // 最後の一回で最新の値をanimatedNumberに格納する
                this.animatedNumber = newValue
            }
        },
    },
    computed: {
        animatedNumberToLocaleStirng() {
            return this.animatedNumber.toLocaleString()
        },
    },
    watch: {
        value(newValue, oldValue) {
            this.animate(newValue, oldValue)
        },
    },
    created() {
        this.animate(this.value, this.animatedNumber)
    },
}
</script>

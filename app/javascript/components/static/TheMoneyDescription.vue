<template>
    <v-dialog v-model="isVisible" max-width="370" scrollable @click:outside="hundleCloseMoneyDescriptionModal">
        <v-card class="money-description">
            <v-card-text>
                <h1>評価額の計算方法</h1>
                <h2>
                    ( <v-icon>mdi-thumb-up</v-icon> いいね数 ) ✖︎ (<v-icon>mdi-currency-usd</v-icon>ホットスナックの値段 )
                </h2>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="hundleCloseMoneyDescriptionModal"> 閉じる </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        isVisible: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    methods: {
        hundleCloseMoneyDescriptionModal() {
            this.$emit('close-money-description-modal')
        },
    },
}
</script>
<style scoped>
h1 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 1.5em;
}
h2 {
    margin-top: 15px;
    font-size: 1em;
}
</style>

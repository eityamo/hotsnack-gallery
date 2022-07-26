<template>
    <base-container>
        <v-card class="mx-auto" max-width="375" color="#f6f5ee" outlined>
            <v-card-title> 評価額 ￥6413 </v-card-title>

            <v-divider></v-divider>

            <v-card class="ma-10">
                <v-container class="outline">
                    <v-container class="inline">
                        <v-container class="baseline">
                            <v-container class="border">
                                <v-img
                                    src="https://img.7api-01.dp1.sej.co.jp/item-image/150144/6BF2807FE0D76A82D9C79EB2499ED535.jpg"
                                />
                            </v-container>
                        </v-container>
                    </v-container>
                </v-container>
            </v-card>

            <v-card-title>アメリカンドッグ</v-card-title>

            <v-card-subtitle>121円（税込130.68円）</v-card-subtitle>

            <v-card-title>セブン-イレブン</v-card-title>

            <v-card-subtitle>1974年 - 現在</v-card-subtitle>

            <v-card-actions>
                <v-btn text>詳細説明</v-btn>

                <v-btn icon class="ml-0">
                    <v-icon>{{ 'mdi-volume-high' }}</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon @click="show = !show">
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                        原材料の高騰により、価格を１００円（税抜）から１２１円（税抜）に変更いたします。サクっとした食感とほんのり甘い風味が特長のアメリカンドッグです。
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </base-container>
</template>

<script>
import { BaseContainer } from '../components/layout'

export default {
    name: 'HotsnackDetail',
    components: {
        BaseContainer,
    },
    data() {
        return {
            show: true,
        }
    },
}
</script>

<style scoped>
.border {
    background: #fff;
    display: block;
    width: 88%;
    height: auto;
    padding: 6%;
    box-shadow: inset 0px 0.3em 0.1em rgba(0, 0, 0, 0.2);
}

.baseline {
    display: block;
}

.inline {
    background-color: #f8f8f8;
    z-index: -1;
    box-shadow: inset 0px 10px 0.5em rgba(0, 0, 0, 0.25), inset 0.1em 0px 0.1em rgba(0, 0, 0, 0.1),
        inset -0.1em 0px 0.1em rgba(0, 0, 0, 0.05), 0 0.3em 0.2em #fff;
    background-image: -moz-radial-gradient(50% 50%, circle farthest-corner, #ffffff, #f8f8f8 100%);
    background-image: -webkit-radial-gradient(50% 50%, circle farthest-corner, #ffffff, #f8f8f8 100%);
    background-image: -o-radial-gradient(50% 50%, circle farthest-corner, #ffffff, #f8f8f8 100%);
    background-image: -ms-radial-gradient(50% 50%, circle farthest-corner, #ffffff, #f8f8f8 100%);
    background-image: radial-gradient(50% 50%, circle farthest-corner, #ffffff, #f8f8f8 100%);
}

.outline {
    width: 100%;
    height: 100%;
    background: #f8f8f8;
    z-index: -2;
    box-shadow: 0px 1em 2em -1em rgba(0, 0, 0, 0.4), 0px 2em 2em -1em rgba(0, 0, 0, 0.03),
        0px 3em 2em -1em rgba(0, 0, 0, 0.2), 0px 4em 1.5em -1em rgba(0, 0, 0, 0.15),
        0px 2em 4em 0.5em rgba(0, 0, 0, 0.1), inset 0 0.2em 0.1em #fff;
}

#bunny {
    width: 150px;
    border: 1px solid #b76e22;
    border-radius: 4px;
}
</style>

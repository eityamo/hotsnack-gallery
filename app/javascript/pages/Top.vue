<template>
    <base-container>
        <v-row justify="center">
            <div class="text-center s-font mt-8 pb-4 nowrap">
                コンビニのホットスナック
                <br />
                じっくり選びたいけど選べない
                <br />
                そんな事態を解決するサービス
            </div>
        </v-row>
        <v-col align="center">
            <v-img max-width="340" height="200" class="" src="/img/TOP_TITLE.jpg" />
        </v-col>
        <v-col align="center">
            <p class="s-font">
                美術館に来館して
                <br />
                ＼ホットスナックを鑑賞しよう／
            </p>
            <v-btn color="black" class="white--text" rounded large style="text-transform: none">
                <v-icon>mdi-bank</v-icon>
                <span class="m-font white--text ml-2">美術館に入る</span>
            </v-btn>
            <p class="xs-font mt-2">※下の利用規約・プライバシーポリシーをご確認ください。</p>
        </v-col>
        <v-divider />
        <v-col align="center" class="mb-4">
            <v-card-title class="pa-1 pb-3 nowrap">
                <v-icon color="blue">mdi-help-box</v-icon>
                <span class="s-font">ホットスナック美術館の使い方</span>
            </v-card-title>
            <v-card>
                <v-carousel cycle :continuous="true" height="100%">
                    <v-carousel-item v-for="(rule_image, i) in rule_images" :key="i">
                        <img :src="rule_image" width="100%" height="100%" eager />
                    </v-carousel-item>
                </v-carousel>
            </v-card>
        </v-col>
        <v-divider />
        <v-row justify="center" class="my-8">
            <v-card rounded="xl" color="transparent">
                <v-col align="center" class="m-font"> このアプリの対象者 </v-col>
                <v-col class="p-font nowrap" align="left">
                    <p>コンビニでホットスナックを選んでいる時に、、、</p>
                </v-col>
                <v-col class="p-font nowrap" align="center">
                    <p>店員の視線が気になる人。</p>
                    <p>他の客の邪魔になっていると感じる人。</p>
                </v-col>
                <v-col class="p-font nowrap" align="left">
                    <p>ホットスナックを選ぼうとレジ横に向かったら、、、</p>
                </v-col>
                <v-col class="p-font nowrap" align="center">
                    <p>レジに向かったと間違われ、気まずい思いをした人。</p>
                </v-col>
            </v-card>
        </v-row>
        <v-divider />
        <v-card color="transparent" outlined>
            <v-card-actions class="justify-center my-2">
                <v-btn dense text @click="openModal('terms')"> 利用規約 </v-btn>
                <v-btn dense text @click="openModal('privacypolicy')"> プライバシーポリシー </v-btn>
                <v-btn dense text href="https://twitter.com/eityamo"> 問い合わせ </v-btn>
            </v-card-actions>
        </v-card>
        <the-terms :is-visible="getModalVisible('terms')" @close-terms-modal="closeModal" />
        <the-privacy-policy :is-visible="getModalVisible('privacypolicy')" @close-privacy-policy-modal="closeModal" />
    </base-container>
</template>

<script>
import { TheTerms, ThePrivacyPolicy } from '../components/static'
import { BaseContainer } from '../components/layout'

export default {
    name: 'Top',
    components: {
        BaseContainer,
        TheTerms,
        ThePrivacyPolicy,
    },
    data() {
        return {
            modal: {
                type: null,
                status: 'hidden',
            },
            rule_images: ['/img/rules/rule_0.jpg', '/img/rules/rule_1.jpg', '/img/rules/rule_2.jpg'],
        }
    },
    methods: {
        closeModal() {
            this.modal = {
                type: null,
                status: 'hidden',
            }
        },
        openModal(type) {
            this.modal = {
                type,
                status: 'visible',
            }
        },
    },
    computed: {
        getModalVisible() {
            return (type) => this.modal.type === type && this.modal.status === 'visible'
        },
    },
}
</script>

<style scoped>
.p-font {
    font-size: 0.7em;
    color: #2c281e;
}
.m-font {
    font-size: 0.85em;
    font-weight: bold;
    line-height: 1;
    color: #2c281e;
}
.s-font {
    font-size: 0.75em;
    font-weight: bold;
    line-height: 1;
    color: #2c281e;
}
.xs-font {
    font-size: 0.55em;
    font-weight: lighter;
    line-height: 1.5;
    color: #2c281e;
}
.nowrap {
    white-space: nowrap;
}
</style>

<template>
    <base-container>
        <v-col v-for="genreName in genreNameList" :key="genreName">
            <v-col class="ml-2"> {{ genreName }}展 </v-col>
            <v-carousel show-arrows-on-hover hide-delimiters height="430">
                <v-carousel-item
                    @click="openModal('hotsnack', hotsnack)"
                    v-for="hotsnack in hotsnackCategory(genreName)"
                    :key="hotsnack.item_uuid"
                >
                    <v-sheet class="pt-2" color="#f6f5ee">
                        <v-card class="mx-10 mt-10" color="#f6f5ee" outlined>
                            <v-container class="outline">
                                <v-container class="inline">
                                    <v-container class="block">
                                        <v-container class="border">
                                            <v-img :src="hotsnack.image" />
                                        </v-container>
                                    </v-container>
                                </v-container>
                            </v-container>
                            <v-card raised elevation="8" tile class="mx-10 mt-10">
                                <v-col align="center" class="s-font msg-wrapper">{{ hotsnack.name }}</v-col>
                                <hr class="hr2" />
                                <v-col align="center" class="s-font Lusitana">{{ hotsnack.store }}</v-col>
                            </v-card>
                        </v-card>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-col>
        <hotsnack-detail-modal
            :is-visible="getModalVisible('hotsnack')"
            @close-hotsnack-detail-modal="closeModal"
            :hotsnack="modal.hotsnack"
        />
    </base-container>
</template>

<script>
import { BaseContainer } from '../components/layout/index'
import { HotsnackDetailModal } from '../components/hotsnackmodal/index'

export default {
    name: 'CategoryList',
    components: {
        BaseContainer,
        HotsnackDetailModal,
    },
    data() {
        return {
            hotsnacks: [],
            genreNameList: [],
            modal: {
                type: null,
                status: 'hidden',
                hotsnack: {},
            },
        }
    },
    created() {
        this.fetchHotsnacks()
    },
    methods: {
        fetchHotsnacks() {
            this.$axios
                .get('hotsnacks')
                .then((res) => {
                    // ホットスナックのジャンルを取り出す
                    const genreName = res.data.map((hotsnackItem) => hotsnackItem.genre)
                    // ジャンル名の重複を取り除く
                    const genreNameList = [...new Set(genreName)]

                    // データプロパティに代入
                    this.genreNameList = genreNameList
                    this.hotsnacks = res.data
                })
                .catch((err) => console.log(err.status))
        },
        closeModal() {
            this.modal = {
                type: null,
                status: 'hidden',
                hotsnack: {},
            }
        },
        openModal(type, hotsnack) {
            this.modal = {
                type,
                status: 'visible',
                hotsnack,
            }
        },
    },
    computed: {
        hotsnackCategory() {
            return (genreName) => this.hotsnacks.filter((hotsnack) => hotsnack.genre === genreName)
        },
        getModalVisible() {
            return (type) => this.modal.type === type && this.modal.status === 'visible'
        },
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
.block {
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
.s-font {
    font-size: 0.75em;
    font-weight: bold;
    line-height: 1;
    color: #2c281e;
}
.hr2 {
    border: none;
    width: 90%;
    height: 50px;
    border-bottom: 1px solid #1f1209;
    margin: -50px auto 0px;
}
.Lusitana {
    font-family: 'Lusitana', cursive;
}
.msg-wrapper {
    white-space: pre-line;
}
</style>

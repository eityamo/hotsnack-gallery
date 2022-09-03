<template>
    <base-container>
        <!-- フランク -->
        <v-carousel show-arrows-on-hover hide-delimiters>
            <v-carousel-item v-for="hotsnack in hotsnackFrank" :key="hotsnack.uuid">
                <v-col class="ml-2"> {{ hotsnack.genre }}展 </v-col>
                <v-sheet height="100%" tile class="pt-2" color="#f6f5ee">
                    <v-card class="ma-10" color="#f6f5ee" outlined>
                        <v-container class="outline">
                            <v-container class="inline">
                                <v-container class="block">
                                    <v-container class="border">
                                        <v-img :src="hotsnack.image" />
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-card raised elevation="8" tile class="mx-10 my-10">
                            <v-col align="center" class="s-font msg-wrapper">{{ hotsnack.name }}</v-col>
                            <hr class="hr2" />
                            <v-col align="center" class="s-font Lusitana">{{ hotsnack.store }}</v-col>
                        </v-card>
                    </v-card>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
        <!-- からあげ -->
        <v-carousel show-arrows-on-hover hide-delimiters>
            <v-carousel-item v-for="hotsnack in hotsnackKaraage" :key="hotsnack.uuid">
                <v-col class="ml-2"> {{ hotsnack.genre }}展 </v-col>
                <v-sheet height="100%" tile class="pt-2" color="#f6f5ee">
                    <v-card class="ma-10" color="#f6f5ee" outlined>
                        <v-container class="outline">
                            <v-container class="inline">
                                <v-container class="block">
                                    <v-container class="border">
                                        <v-img :src="hotsnack.image" />
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-card raised elevation="8" tile class="mx-10 my-10">
                            <v-col align="center" class="s-font msg-wrapper">{{ hotsnack.name }}</v-col>
                            <hr class="hr2" />
                            <v-col align="center" class="s-font Lusitana">{{ hotsnack.store }}</v-col>
                        </v-card>
                    </v-card>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
        <!-- からあげクン -->
        <v-carousel show-arrows-on-hover hide-delimiters>
            <v-carousel-item v-for="hotsnack in hotsnackKaraagekun" :key="hotsnack.uuid">
                <v-col class="ml-2"> {{ hotsnack.genre }}展 </v-col>
                <v-sheet height="100%" tile class="pt-2" color="#f6f5ee">
                    <v-card class="ma-10" color="#f6f5ee" outlined>
                        <v-container class="outline">
                            <v-container class="inline">
                                <v-container class="block">
                                    <v-container class="border">
                                        <v-img :src="hotsnack.image" />
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-card raised elevation="8" tile class="mx-10 my-10">
                            <v-col align="center" class="s-font msg-wrapper">{{ hotsnack.name }}</v-col>
                            <hr class="hr2" />
                            <v-col align="center" class="s-font Lusitana">{{ hotsnack.store }}</v-col>
                        </v-card>
                    </v-card>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
        <!-- フライドチキン -->
        <v-carousel show-arrows-on-hover hide-delimiters>
            <v-carousel-item v-for="hotsnack in hotsnackFriedChecken" :key="hotsnack.uuid">
                <v-col class="ml-2"> {{ hotsnack.genre }}展 </v-col>
                <v-sheet height="100%" tile class="pt-2" color="#f6f5ee">
                    <v-card class="ma-10" color="#f6f5ee" outlined>
                        <v-container class="outline">
                            <v-container class="inline">
                                <v-container class="block">
                                    <v-container class="border">
                                        <v-img :src="hotsnack.image" />
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-card raised elevation="8" tile class="mx-10 my-10">
                            <v-col align="center" class="s-font msg-wrapper">{{ hotsnack.name }}</v-col>
                            <hr class="hr2" />
                            <v-col align="center" class="s-font Lusitana">{{ hotsnack.store }}</v-col>
                        </v-card>
                    </v-card>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
        <!-- フライドポテト -->
        <v-carousel show-arrows-on-hover hide-delimiters>
            <v-carousel-item v-for="hotsnack in hotsnackFriedPotato" :key="hotsnack.uuid">
                <v-col class="ml-2"> {{ hotsnack.genre }}展 </v-col>
                <v-sheet height="100%" tile class="pt-2" color="#f6f5ee">
                    <v-card class="ma-10" color="#f6f5ee" outlined>
                        <v-container class="outline">
                            <v-container class="inline">
                                <v-container class="block">
                                    <v-container class="border">
                                        <v-img :src="hotsnack.image" />
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-card raised elevation="8" tile class="mx-10 my-10">
                            <v-col align="center" class="s-font msg-wrapper">{{ hotsnack.name }}</v-col>
                            <hr class="hr2" />
                            <v-col align="center" class="s-font Lusitana">{{ hotsnack.store }}</v-col>
                        </v-card>
                    </v-card>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
        <!-- コロッケ -->
        <v-carousel show-arrows-on-hover hide-delimiters>
            <v-carousel-item v-for="hotsnack in hotsnackCroquette" :key="hotsnack.uuid">
                <v-col class="ml-2"> {{ hotsnack.genre }}展 </v-col>
                <v-sheet height="100%" tile class="pt-2" color="#f6f5ee">
                    <v-card class="ma-10" color="#f6f5ee" outlined>
                        <v-container class="outline">
                            <v-container class="inline">
                                <v-container class="block">
                                    <v-container class="border">
                                        <v-img :src="hotsnack.image" />
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-card raised elevation="8" tile class="mx-10 my-10">
                            <v-col align="center" class="s-font msg-wrapper">{{ hotsnack.name }}</v-col>
                            <hr class="hr2" />
                            <v-col align="center" class="s-font Lusitana">{{ hotsnack.store }}</v-col>
                        </v-card>
                    </v-card>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
        <!-- カツ -->
        <v-carousel show-arrows-on-hover hide-delimiters>
            <v-carousel-item v-for="hotsnack in hotsnackCutlet" :key="hotsnack.uuid">
                <v-col class="ml-2"> {{ hotsnack.genre }}展 </v-col>
                <v-sheet height="100%" tile class="pt-2" color="#f6f5ee">
                    <v-card class="ma-10" color="#f6f5ee" outlined>
                        <v-container class="outline">
                            <v-container class="inline">
                                <v-container class="block">
                                    <v-container class="border">
                                        <v-img :src="hotsnack.image" />
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-card raised elevation="8" tile class="mx-10 my-10">
                            <v-col align="center" class="s-font msg-wrapper">{{ hotsnack.name }}</v-col>
                            <hr class="hr2" />
                            <v-col align="center" class="s-font Lusitana">{{ hotsnack.store }}</v-col>
                        </v-card>
                    </v-card>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
        <!-- 揚げ物 -->
        <v-carousel show-arrows-on-hover hide-delimiters>
            <v-carousel-item v-for="hotsnack in hotsnackFriedFood" :key="hotsnack.uuid">
                <v-col class="ml-2"> {{ hotsnack.genre }}展 </v-col>
                <v-sheet height="100%" tile class="pt-2" color="#f6f5ee">
                    <v-card class="ma-10" color="#f6f5ee" outlined>
                        <v-container class="outline">
                            <v-container class="inline">
                                <v-container class="block">
                                    <v-container class="border">
                                        <v-img :src="hotsnack.image" />
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-card raised elevation="8" tile class="mx-10 my-10">
                            <v-col align="center" class="s-font msg-wrapper">{{ hotsnack.name }}</v-col>
                            <hr class="hr2" />
                            <v-col align="center" class="s-font Lusitana">{{ hotsnack.store }}</v-col>
                        </v-card>
                    </v-card>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
        <!-- 焼き鳥 -->
        <v-carousel show-arrows-on-hover hide-delimiters>
            <v-carousel-item v-for="hotsnack in hotsnackYakitori" :key="hotsnack.uuid">
                <v-col class="ml-2"> {{ hotsnack.genre }}展 </v-col>
                <v-sheet height="100%" tile class="pt-2" color="#f6f5ee">
                    <v-card class="ma-10" color="#f6f5ee" outlined>
                        <v-container class="outline">
                            <v-container class="inline">
                                <v-container class="block">
                                    <v-container class="border">
                                        <v-img :src="hotsnack.image" />
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-card raised elevation="8" tile class="mx-10 my-10">
                            <v-col align="center" class="s-font msg-wrapper">{{ hotsnack.name }}</v-col>
                            <hr class="hr2" />
                            <v-col align="center" class="s-font Lusitana">{{ hotsnack.store }}</v-col>
                        </v-card>
                    </v-card>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
        <!-- ポテト -->
        <v-carousel show-arrows-on-hover hide-delimiters>
            <v-carousel-item v-for="hotsnack in hotsnackPotato" :key="hotsnack.uuid">
                <v-col class="ml-2"> {{ hotsnack.genre }}展 </v-col>
                <v-sheet height="100%" tile class="pt-2" color="#f6f5ee">
                    <v-card class="ma-10" color="#f6f5ee" outlined>
                        <v-container class="outline">
                            <v-container class="inline">
                                <v-container class="block">
                                    <v-container class="border">
                                        <v-img :src="hotsnack.image" />
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-card raised elevation="8" tile class="mx-10 my-10">
                            <v-col align="center" class="s-font msg-wrapper">{{ hotsnack.name }}</v-col>
                            <hr class="hr2" />
                            <v-col align="center" class="s-font Lusitana">{{ hotsnack.store }}</v-col>
                        </v-card>
                    </v-card>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
        <!-- 中華まん -->
        <v-carousel show-arrows-on-hover hide-delimiters>
            <v-carousel-item v-for="hotsnack in hotsnackSteamedBun" :key="hotsnack.uuid">
                <v-col class="ml-2"> {{ hotsnack.genre }}展 </v-col>
                <v-sheet height="100%" tile class="pt-2" color="#f6f5ee">
                    <v-card class="ma-10" color="#f6f5ee" outlined>
                        <v-container class="outline">
                            <v-container class="inline">
                                <v-container class="block">
                                    <v-container class="border">
                                        <v-img :src="hotsnack.image" />
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-card raised elevation="8" tile class="mx-10 my-10">
                            <v-col align="center" class="s-font msg-wrapper">{{ hotsnack.name }}</v-col>
                            <hr class="hr2" />
                            <v-col align="center" class="s-font Lusitana">{{ hotsnack.store }}</v-col>
                        </v-card>
                    </v-card>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
        <!-- デザート -->
        <v-carousel show-arrows-on-hover hide-delimiters>
            <v-carousel-item v-for="hotsnack in hotsnackDessert" :key="hotsnack.uuid">
                <v-col class="ml-2"> {{ hotsnack.genre }}展 </v-col>
                <v-sheet height="100%" tile class="pt-2" color="#f6f5ee">
                    <v-card class="ma-10" color="#f6f5ee" outlined>
                        <v-container class="outline">
                            <v-container class="inline">
                                <v-container class="block">
                                    <v-container class="border">
                                        <v-img :src="hotsnack.image" />
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-card raised elevation="8" tile class="mx-10 my-10">
                            <v-col align="center" class="s-font msg-wrapper">{{ hotsnack.name }}</v-col>
                            <hr class="hr2" />
                            <v-col align="center" class="s-font Lusitana">{{ hotsnack.store }}</v-col>
                        </v-card>
                    </v-card>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
        <!-- 変わり種 -->
        <v-carousel show-arrows-on-hover hide-delimiters>
            <v-carousel-item v-for="hotsnack in hotsnackStrange" :key="hotsnack.uuid">
                <v-col class="ml-2"> {{ hotsnack.genre }}展 </v-col>
                <v-sheet height="100%" tile class="pt-2" color="#f6f5ee">
                    <v-card class="ma-10" color="#f6f5ee" outlined>
                        <v-container class="outline">
                            <v-container class="inline">
                                <v-container class="block">
                                    <v-container class="border">
                                        <v-img :src="hotsnack.image" />
                                    </v-container>
                                </v-container>
                            </v-container>
                        </v-container>
                        <v-card raised elevation="8" tile class="mx-10 my-10">
                            <v-col align="center" class="s-font msg-wrapper">{{ hotsnack.name }}</v-col>
                            <hr class="hr2" />
                            <v-col align="center" class="s-font Lusitana">{{ hotsnack.store }}</v-col>
                        </v-card>
                    </v-card>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </base-container>
</template>

<script>
import { BaseContainer } from '../components/layout'

export default {
    name: 'CategoryList',
    components: {
        BaseContainer,
    },
    data() {
        return {
            hotsnacks: [],
            genreName: [
                'フランク',
                'からあげ',
                'からあげクン',
                'フライドチキン',
                'フライドポテト',
                'コロッケ',
                'カツ',
                '揚げ物',
                '焼き鳥',
                'ポテト',
                '中華まん',
                'デザート',
                '変わり種',
            ],
            model: 0,
            colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
        }
    },
    computed: {
        hotsnackFrank() {
            return this.hotsnacks.filter((hotsnack) => {
                return hotsnack.genre === this.genreName[0]
            })
        },
        hotsnackKaraage() {
            return this.hotsnacks.filter((hotsnack) => {
                return hotsnack.genre === this.genreName[1]
            })
        },
        hotsnackKaraagekun() {
            return this.hotsnacks.filter((hotsnack) => {
                return hotsnack.genre === this.genreName[2]
            })
        },
        hotsnackFriedChecken() {
            return this.hotsnacks.filter((hotsnack) => {
                return hotsnack.genre === this.genreName[3]
            })
        },
        hotsnackFriedPotato() {
            return this.hotsnacks.filter((hotsnack) => {
                return hotsnack.genre === this.genreName[4]
            })
        },
        hotsnackCroquette() {
            return this.hotsnacks.filter((hotsnack) => {
                return hotsnack.genre === this.genreName[5]
            })
        },
        hotsnackCutlet() {
            return this.hotsnacks.filter((hotsnack) => {
                return hotsnack.genre === this.genreName[6]
            })
        },
        hotsnackFriedFood() {
            return this.hotsnacks.filter((hotsnack) => {
                return hotsnack.genre === this.genreName[7]
            })
        },
        hotsnackYakitori() {
            return this.hotsnacks.filter((hotsnack) => {
                return hotsnack.genre === this.genreName[8]
            })
        },
        hotsnackPotato() {
            return this.hotsnacks.filter((hotsnack) => {
                return hotsnack.genre === this.genreName[9]
            })
        },
        hotsnackSteamedBun() {
            return this.hotsnacks.filter((hotsnack) => {
                return hotsnack.genre === this.genreName[10]
            })
        },
        hotsnackDessert() {
            return this.hotsnacks.filter((hotsnack) => {
                return hotsnack.genre === this.genreName[11]
            })
        },
        hotsnackStrange() {
            return this.hotsnacks.filter((hotsnack) => {
                return hotsnack.genre === this.genreName[12]
            })
        },
    },
    created() {
        this.fetchHotsnacks()
    },
    methods: {
        fetchHotsnacks() {
            this.$axios
                .get('hotsnacks')
                .then((res) => (this.hotsnacks = res.data))
                .catch((err) => console.log(err.status))
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
</style>

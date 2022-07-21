<template>
  <v-container>
    <v-row
      justify="center"
    >
      <div class="text-center s-font mt-8 pb-4 nowrap">
        コンビニのホットスナック<br>じっくり選びたいけど選べない<br>そんな事態を解決するサービス
      </div>
    </v-row>
    <v-col
      class="mt-0"
      align="center"
    >
      <v-img
        max-width="340"
        height="200"
        class=""
        src="/img/TOP_TITLE.jpg"
      />
    </v-col>
    <v-col
      align="center"
    >
      <p class="s-font">
        美術館に来館して<br>＼ホットスナックを鑑賞しよう／
      </p>
      <v-btn
        color="black"
        class="white--text"
        rounded
        large
        style="text-transform: none"
      >
        <v-icon>mdi-bank</v-icon>
        <span class="m-font white--text ml-2">美術館に入る</span>
      </v-btn>
      <p class="xs-font mt-2">
        ※下の利用規約・プライバシーポリシーをご確認ください。
      </p>
    </v-col>
    <v-col align="center">
      <v-img
        max-width="300"
        src="/img/dot.svg"
      />
    </v-col>
    <v-col align="center">
      <v-card
        max-width="320"
        height="400"
        color="transparent"
        outlined
      >
        <v-card-title class="pl-2 pa-1 pb-3 nowrap">
          <v-icon color="blue">
            mdi-help-box
          </v-icon>
          <span class="s-font">
            ホットスナック美術館の使い方
          </span>
        </v-card-title>
<!-- carousels -->
        <v-card>
          <v-carousel
            cycle
            height="100%"
            :continuous="false"
          >
            <v-carousel-item
              v-for="(rule_image,i) in rule_images"
              :key="i"
            >
              <img
                :src="rule_image.src"
                width="100%"
                height="100%"
                eager
              >
            </v-carousel-item>
          </v-carousel>
        </v-card>
<!-- carousels end -->
      </v-card>
    </v-col>
    <v-row
      justify="center"
      class="my-8"
    >
      <v-card
        rounded="xl"
        color="transparent"
        outlined
        class="mx-4 px-4"
      >
        <v-col align="center">
          <v-img
            max-width="300"
            src="/img/dot.svg"
          />
        </v-col>
        <v-col
          align="center"
          class="m-font"
        >
          このアプリの対象者
        </v-col>
        <v-col
          class="p-font nowrap"
          align="left"
        >
          <p>コンビニでホットスナックを選んでいる時に、、、</p>
        </v-col>
        <v-col
          class="p-font nowrap"
          align="center"
        >
          <p>店員の視線が気になる人。</p>
          <p>他の客の邪魔になっていると感じる人。</p>
        </v-col>
        <v-col
          class="p-font nowrap"
          align="left"
        >
          <p>ホットスナックを選ぼうとレジ横に向かったら、、、</p>
        </v-col>
        <v-col
          class="p-font nowrap"
          align="center"
        >
          <p>レジに向かったと間違われ、気まずい思いをした人。</p>
        </v-col>
        <v-col align="center">
          <v-img
            max-width="300"
            src="/img/dot.svg"
          />
        </v-col>
      </v-card>
    </v-row>
    <v-card
      color="transparent"
      outlined
      ma-2
    >
      <v-card-actions class="justify-center mb-8">
        <v-btn
          dense
          text
        >
          利用規約
        </v-btn>
        <v-btn
          dense
          text
        >
          プライバシーポリシー
        </v-btn>
        <v-btn
          dense
          text
           href="https://twitter.com/eityamo"
        >
          問い合わせ
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "TopIndex",
  data() {
    return {
      rule_images: [
        {
          src: "/img/rules/rule_0.jpg"
        },
        {
          src: "/img/rules/rule_1.jpg"
        },
        {
          src: "/img/rules/rule_2.jpg"
        },
      ]
    }
  }
}
</script>

<style scoped>
.img{
  mix-blend-mode: multiply;
  z-index: 100;
}
.p-font{
  font-size: 0.7em;
  color: #2c281e;
}
.l-font{
  font-size: 1.2em;
  font-weight: bold;
  line-height: 1;
  color: #2c281e;
  letter-spacing: 3px;
}
.m-font{
  font-size: 0.85em;
  font-weight: bold;
  line-height: 1;
  color: #2c281e;
}
.s-font{
  font-size: 0.75em;
  font-weight: bold;
  line-height: 1;
  color: #2c281e;
}
.xs-font{
  font-size: 0.55em;
  font-weight: lighter;
  line-height: 1.5;
  color: #2c281e;
}
.nowrap{
  white-space: nowrap
}
.position {
  position: absolute;
  top: 45px;
  left: 15px;
}
.tranceparent{
  mix-blend-mode: multiply;
}
.carousel {
  max-width: 330px;
}
.carousel img {
  width: 100%;
}
</style>

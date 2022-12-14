# ホットスナック美術館  
![rails](https://img.shields.io/badge/Rails-v6.1.6-red)
![rails](https://img.shields.io/badge/Vue-v2.6.14-brightgreen)

### https://www.hotsnack-gallery.com/

## ■ サービス概要  
コンビニのホットスナックがじっくり選べないという問題を解決するアプリ<br>
コンビニ3社のホットスナックを閲覧できます。

## 画面・機能一覧
| トップページ                                                          | ランダムページ                                                           |
| ------------------------------------------------------------------ | -------------------------------------------------------------------- |
| <img src="https://gyazo.com/9d96808a00f32dccc396a03c232ba240.png"> | <img src="https://gyazo.com/2442341e76214f17f05d2e45a447028b.png">   |
| ・美術館に入るボタンでランダムページに遷移する<br>・アプリの使い方はスライドで表示     | ・ホットスナックの詳細を表示する<br>・Randomボタンを押すことで次のホットスナックを表示する  |

| ランキングページ                                                       | シェアページ                                                            |
| ------------------------------------------------------------------ | -------------------------------------------------------------------- |
| <img src="https://gyazo.com/2481c65ab916f986dca5731e960af474.png"> | <img src="https://gyazo.com/6f088318a65dde9b388047bdea4e1ae1.png">   |
| ・ホットスナックのジャンル別にランキングを表示する<br>・作品をクリックすることでホットスナックの詳細モーダルを表示する | ・フッターのTwitterシェアボタンでツイート投稿ページに遷移する |

| 利用規約                                                            | プライバシーポリシー                                                       |
| ------------------------------------------------------------------ | -------------------------------------------------------------------- |
| <img src="https://gyazo.com/5e160cd7b4fbba747a6aaaadf6508fe4.png"> | <img src="https://gyazo.com/61fe9869df80c5370c80ee4002023f35.png">   |
| ・利用規約を表示する                                                   　| ・プライバシーポリシーを表示する                                              | 

## 使用技術
**フロントエンド**
<ul>
  <li>Vue.js 2.6.14</li>
  <details>
    <summary>主要yarnパッケージ</summary>
    <ul>
      <li><a href="https://github.com/vuetifyjs/vuetify">vuetify</a></li>
      <li><a href="https://github.com/vuejs/vue-router">vue-router</a></li>
      <li><a href="https://github.com/eslint/eslint">eslint</a></li>
    </ul>
  </deatails>
</ul>

**バックエンド**
<ul>
  <li>Ruby 3.0.4</li>
  <li>Rails 6.1.6</li>
  <details>
    <summary>主要gem</summary>
    <ul>
      <li><a href="https://github.com/kpumuk/meta-tags">meta-tags</a></li>
      <li><a href="https://github.com/zdennis/activerecord-import">activerecord-import</a></li>
      <li><a href="https://github.com/rubocop/rubocop">rubocop</a></li>
    </ul>
  </deatails>
</ul>
  
**インフラ**
- Heroku
- PostgreSQL

## ■画面遷移図  
[画面遷移図](https://www.figma.com/file/0GYR4hAqbkxiboaOHawOCs/View-only?node-id=0%3A1)

## ■ ER図
  [![image.png](https://i.gyazo.com/ecd7e7ed631730a07f896b044ba78ca1.png)](https://app.diagrams.net/#G1sYz-w-oDBOQSzUoUysFSrK26nGhCwPP6)

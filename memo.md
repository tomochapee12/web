# リポジトリメモ

## 概要
- Vite + React で構築されたポートフォリオサイト。ビルド成果物は静的ファイルとして配信される静的サイトで、クライアントサイドで必要なデータを取得してレンダリングする構成になっている。
- 画面はヒーローセクションと3カラムレイアウトのカード群で構成されており、各カードが外部サービスの情報やウィジェットを表示する。

## 画面構成と主な機能
- **HeroSection**: アバター画像とユーザー名、ランダムに選ばれるコメントを表示し、スクロール誘導アイコンを備える。`src/components/HeroSection.jsx`
- **RepoList / RepoCard**: GitHub API から `tomochapee12` アカウントのリポジトリを取得し、最新の5件をカード形式で表示する。`src/components/RepoList.jsx`, `src/components/RepoCard.jsx`
- **AnnictCard**: Annict GraphQL API を利用して視聴中アニメの情報（最大3件）を表示する。アクセストークンが未設定の場合はエラー表示になる。`src/components/AnnictCard.jsx`
- **BlogCard**: 外部ブログサイトへのリンクカード。サムネイル画像と「Archived」のステータスを表示。`src/components/BlogCard.jsx`
- **GitHubCard**: GitHub プロフィールへのリンクとフォローボタンを備えたカード。`src/components/GitHubCard.jsx`
- **DiscordCard**: Lanyard API から Discord ステータスとアクティビティを取得して表示し、一定間隔で再取得する。`src/components/DiscordCard.jsx`
- **OsuCard**: osu! の署名画像を iframe で埋め込み、プロフィールページへのリンクを重ねる。`src/components/OsuCard.jsx`
- **ClockCard**: JST の日付と時刻を表示する時計カード。情報通信研究機構の時刻ページへのリンク付き。`src/components/ClockCard.jsx`
- **VisitorsCard**: 開発環境では固定値、本番環境では Cloudflare Pages Functions 経由のカウンター API からアクセス数を読み書きする。`src/components/VisitorsCard.jsx`
- **SlideshowCard**: 3枚の画像を7秒周期で切り替えるスライドショー。`src/components/SlideshowCard.jsx`

## 補足
- カウンター API は Cloudflare Pages Functions（`functions/api/counter.js`）で実装され、KV ストアにアクセス数を保存する。
- 全体のスタイルは `src/App.css` のグリッドレイアウトと各コンポーネントの個別 CSS により定義されている。

今後の計画
1. Homelab / Self-Hosting 環境カード

内容案

Proxmoxクラスタ構成（ノード名と役割をざっくり）

動いているサービスアイコン（Nextcloud / 監視 / ファイル鯖 など）

一言キャッチ：
例: 「自宅ラックで遊びながら、本番さながらの構成を回しています。」

ポイント

小さいトポロジ図 or ラックの模式図を載せると一気に「ガチ感」が出る。

ホバーで「使っている技術スタック（Ceph / Docker / Cloudflare Tunnel など）」をふわっと表示。

11. サーバーのアクセス傾向ミニカード

内容:
超ざっくりで OK:

今月のPV

どの国から多いか円グラフ

ポイント:
個人情報や詳しいログまで出す必要はなくて、
「このサイト、静かにちゃんと誰か来てるんだな」という空気を作る用途。

4. 「今やっていること / Now」カード

[uses this a lotな海外エンジニア多い]

内容案

今フォーカスしている3つくらい：

卒研：タスク管理×ゲーミフィケーションの評価

インフラ：10Gホームラボ構築（VLAN設計 / 監視強化）

個人開発：◯◯アプリの機能追加中

1〜2ヶ月ごとに中身だけ更新すれば、サイトが「生きてる」感じになる。

ポイント

ここはテキストだけでも十分オシャレにできるので、実装コストが低い割に「更新されてる感」が強い。

6. 読書・視聴中カード（技術・非技術ごちゃまぜ）

内容:

読書中の本（技術書 / 小説問わず）

見ているアニメ / ドラマ / YouTube シリーズ

ポイント:
必ずしも自分のスキルに直結しなくていい。
「この人の背景にある文脈」がふわっと伝わるカードになる。


15. お問い合わせ / 一言メッセージカード（フォーム or メールリンク）

内容:
シンプルな「1行＋送信ボタン」だけのフォーム、
もしくは mailto: リンクと簡単なガイドライン。

ポイント:
自分の情報というより「訪問者のアクション」を受けるためのカード。
ポートフォリオの目的（仕事依頼・カジュアル面談・単なる交流）に関係なく置ける。
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

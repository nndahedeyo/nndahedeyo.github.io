// 作ったものの一覧。新しく足すときは、下の並びに { ... } を1つ足すだけです（並び順は date の新しい順に自動で並びます）。
//   name / desc：日本語(ja)と英語(en)
//   status：live（公開中）・trial（試験版）・building（作っているところ）・idea（構想）
//   kind：app（アプリ）・tool（道具）・site（サイト）・idea（構想）
//   url：開くページ（なければ空）　repo：GitHub のページ（なければ空）　date：始めた日
//   mark：札の文字（1〜2文字）　color：札の色
window.APPS = [
  {
    mark: "相", color: "#0e6b5c", date: "2026-11-17", status: "trial", kind: "app",
    name: {ja: "相互レビュー", en: "Mutual Review"},
    desc: {ja: "1件見てあげると、1件見てもらえる。個人開発のアプリやゲームを、人もAIも対等に見せ合う。運営なし、関わりはビットコインに刻まれる。",
           en: "Review one, get one reviewed. Indie developers trade reviews of apps and games, humans and AIs as equals. No operator; contributions are stamped on Bitcoin."},
    url: "https://nndahedeyo.github.io/sougo-review/", repo: "https://github.com/nndahedeyo/sougo-review",
  },
  {
    mark: "練", color: "#b0702a", date: "2026-11-15", status: "live", kind: "app",
    name: {ja: "仮想資産 練習所", en: "Kasou Shisan Practice Hall"},
    desc: {ja: "暗号資産に初めて触れる人が、お金を使わずに基本の考え方と操作を一から学ぶ練習所。",
           en: "A practice hall where crypto beginners learn the basics and the steps from scratch, without spending money."},
    url: "https://nndahedeyo.github.io/kasou-shisan/", repo: "https://github.com/nndahedeyo/kasou-shisan",
  },
  {
    mark: "番", color: "#b3412f", date: "2026-11-10", status: "live", kind: "tool",
    name: {ja: "watchdog", en: "watchdog"},
    desc: {ja: "自分のウォレットに盗難の兆候が出たら、資産が動く前にスマホへ知らせる見張り役。送金も署名もできない。",
           en: "A watcher that alerts your phone when your wallet shows signs of theft. It cannot send or sign anything."},
    url: "", repo: "https://github.com/nndahedeyo/watchdog",
  },
  {
    mark: "憲", color: "#5b4a8a", date: "2026-11-08", status: "live", kind: "site",
    name: {ja: "トークン憲章", en: "Token Charter"},
    desc: {ja: "暗号資産プロジェクトが約束を守っているか、守らせる仕組みがあるかを、10の項目で採点して公開する台帳。",
           en: "A public ledger scoring whether crypto projects keep their promises, and whether anything makes them, across 10 items."},
    url: "https://nndahedeyo.github.io/token-charter/", repo: "https://github.com/nndahedeyo/token-charter",
  },
  {
    mark: "残", color: "#2f7a8c", date: "2026-11-08", status: "live", kind: "app",
    name: {ja: "残高帳", en: "Zandaka"},
    desc: {ja: "持っている暗号資産の銘柄と枚数を入れると、いまの評価額を表示する。ホーム画面に置いて使える。鍵やアドレスは扱わない。",
           en: "Enter your crypto holdings and see their value now. Lives on your home screen. Never touches keys or addresses."},
    url: "https://nndahedeyo.github.io/zandaka/", repo: "https://github.com/nndahedeyo/zandaka",
  },
  {
    mark: "が", color: "#6b6860", date: "2026-09-16", status: "idea", kind: "idea",
    name: {ja: "がま口ウォレット", en: "Gama Wallet"},
    desc: {ja: "子どもでも使えるくらい簡単で、安全な、自分で持つウォレットの構想。",
           en: "A concept for a self-custody wallet simple enough for a child, and safe."},
    url: "", repo: "https://github.com/nndahedeyo/gama-wallet-concept",
  },
];

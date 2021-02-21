複数の頁で同じコンポーネントを共有する方法

フォルダ構成
2017 年、新規に JavaScript を書くならどんな設計をするか
https://blog.mmmcorp.co.jp/blog/2016/12/22/JavaScript/#outline__5

replaceWith メソッド
https://gray-code.com/javascript/replace-html-element-with-another-html-element/

フォルダ構成
css/common.css top.css contact.css
js/common/header.js footer.js btn.js
js/pages/top.js
top.html
contact.html

---

MPA(マルチページアプリ)で webpack を使う
手法１　https://www.key-p.com/blog/staff/archives/107125
手法２　https://sota1235.hatenablog.com/entry/2016/11/09/131109

CSS バンドル
手法 1 https://ics.media/entry/17376/

Cookie vs localstorage vs session
https://www.1915keke.com/entry/2019/02/18/153826

sessionID
auth Token
Ways of logging in and out
MPA(Multiple Page Application)

結論
cookie に sessionID を保存すればヘッダーに自動で sessionID が付与されて、サーバー側で
ログイン状態か判別してくれる。
sessionID が有効でないもしくは無い場合はログインボタンを再度表示する

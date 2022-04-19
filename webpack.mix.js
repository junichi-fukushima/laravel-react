const mix = require('laravel-mix');

/*
pages配下がルートディレクトリになる
・配下のページは基本react-routerなどのReactライブラリを使用する
・version()を付与することでハッシュ値を与える(ブラウザキャッシュが残っていることを防ぐ)
・開発完了時は「npm run prod」を実行する
*/

mix
// トップページ
.ts('resources/src/pages/index.tsx', 'public/js').version()
// プロジェクトページ
.ts('resources/src/pages/project/index.tsx', 'public/js/project').version()
// リセットCSSの読み込み
.postCss('resources/css/app.css', 'public/css')
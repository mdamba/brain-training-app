// =================================================
// 共通設定ファイル (common.js)
// =================================================

// =================================================
// 共通設定ファイル (common.js)
// =================================================

// ★ここにさっきコピーしたURLを貼り付けてください！
const SPREADSHEET_URL = "https://script.google.com/macros/s/AKfycbxygInvibUjqdxi7-NFmZzv066IddXOXgFwaCFpuLcwPO6XooCl9t5C_vY-XfBsCP_2/exec";

// データを送信する共通関数
function sendData(gameName, score) {
    if (!SPREADSHEET_URL || !SPREADSHEET_URL.startsWith("http")) {
        console.warn("記録用URLが設定されていません");
        return;
    }

    // ★保存されている名前を取得（なければ「ゲスト」にする）
    const userName = localStorage.getItem('user_name') || 'ゲスト';

    console.log(userName + "さんの" + gameName + "のスコア(" + score + ")を送信中...");

    // 送信処理（name を追加しました）
    fetch(SPREADSHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            name: userName, 
            game: gameName, 
            score: score 
        })
    }).then(() => {
        console.log("送信完了！");
    }).catch(err => {
        console.error("送信エラー:", err);
    });
}



// =================================================
// Google Analytics (GA4) の設定
// =================================================

// ★ここにあなたの測定IDを入れてください
const GA_MEASUREMENT_ID = "G-5QY0YY3Q67"; 

(function() {
    // 1. Googleのスクリプトを読み込むタグを作る
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // 2. GAの設定を開始する
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
    
    console.log("Google Analytics を開始しました: " + GA_MEASUREMENT_ID);
})();
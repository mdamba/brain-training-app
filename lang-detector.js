// 多言語自動検出システム
(function() {
    // URLパラメータで言語が指定されている場合はリダイレクトしない
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('lang')) return;
    
    // 現在のページの言語を取得
    const currentLang = document.documentElement.lang;
    
    // ブラウザの言語設定を取得
    const userLang = navigator.language || navigator.userLanguage;
    const userLangCode = userLang.split('-')[0].toLowerCase();
    
    // 言語コードとファイル名のマッピング
    const langMapping = {
        'ja': 'index.html',       // 日本語
        'en': 'index-en.html',    // 英語
        'zh': 'index-zh.html',    // 中国語
        'es': 'index-es.html',    // スペイン語
        'hi': 'index-hi.html',    // ヒンディー語
        'ar': 'index-ar.html',    // アラビア語
        'pt': 'index-pt.html',    // ポルトガル語
        'ru': 'index-ru.html',    // ロシア語
        'fr': 'index-fr.html',    // フランス語
        'de': 'index-de.html'     // ドイツ語
    };
    
    // ブラウザの言語に対応するページを取得（デフォルトは英語）
    const targetPage = langMapping[userLangCode] || langMapping['en'];
    
    // 現在のページと異なる場合のみリダイレクト
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage !== targetPage) {
        window.location.href = targetPage + '?lang=' + userLangCode;
    }
})();

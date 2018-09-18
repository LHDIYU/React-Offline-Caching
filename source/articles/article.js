APP.article = (function () {

    function deleteArticles(successCallback) {
        APP.database.runQuery('DELETE FROM articles', [], successCallback);
    };
    function insertArticles(articles, successCallback) {
        var remaining = articles.length, data = [], i, l;
        if(remaining === 0) {
            successCallback();
        }
        for(i = 0, l = articles.length; i < l; i++) {
            data[i] = [articles[i].id, articles[i].date, articles[i].headline, articles[i].author, articles[i].body];
        }
        APP.database.runQuery("INSERT INTO articles (id, date, headline, author, body) VALUES (?,?,?,?,?)", data, successCallback);
    };
    function selectBasicArticles(successCallback) {
        APP.database.runQuery("SELECT id, headline, date, author FROM articles", [], successCallback);
    };
    function selectFullArticle(id, successCallback) {
        APP.database.runQuery("SELECT id, headline, date, author, body FROM articles WHERE id = ?", [id], successCallback);
    };
    return {
        deleteArticles:deleteArticles,
        insertArticles:insertArticles,
        selectFullArticle:selectFullArticle,
        selectBasicArticles:selectBasicArticles
    };
}());
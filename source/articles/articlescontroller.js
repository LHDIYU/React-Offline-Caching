APP.articlesController = (function () {
    function showArticleList(successCallback) {
        APP.article.selectBasicArticles(function (articles) {
            $("#headlines").html(APP.templates.articleList(articles));
        })
    };
    function showArticle(id, successCallback) {
        APP.article.selectFullArticle(id, function (articles) {

            $('#body').html(APP.templates.article(articles));
        })
    };
    function synchronizeWithServer(failureCallback) {
        $.ajax({
            dataType: 'json',
            url:'api/articles',
            type:'GET',
            success: function (articles) {
                //1、先删除表中数据；2、向表中插入数据
                APP.article.deleteArticles(function () {
                    APP.article.insertArticles(articles, function () {
                        $("#headlines").html(APP.templates.articleList(articles));
                    })
                })
            },
            error: function () {
                if(failureCallback) {
                    failureCallback();
                }
            }
        })
    };
    return {
        synchronizeWithServer:synchronizeWithServer,
        showArticle:showArticle,
        showArticleList:showArticleList
    };
}());
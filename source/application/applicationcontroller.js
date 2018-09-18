APP.applicationController = (function () {
    function pageNotFound() {
        alert('没有找到该页');
    };
    function offlineWarning() {
        alert("世界上最遥远的距离就是没有网")
    };
    function showHome() {
        $("#body").html(APP.templates.home());

        APP.articlesController.showArticleList();

        $("#refreshButton").click(function () {
            if(navigator && navigator.onLine === false) {
                offlineWarning();
            }else {
                APP.articlesController.synchronizeWithServer();
            }
        })
    };
    function showArticle(page) {
        APP.articlesController.showArticle(page);
    };
    function route() {
        var page = window.location.hash;//page = #1;
        if(page) {
            //文章详情
            page = page.substring(1);
            if(parseInt(page, 10) > 0) {
                console.log(78777)
                showArticle(page);
            }else {
                pageNotFound();
            }
        }else {
            //文章列表
            showHome();
        }
    };
    function start(resources,storeResources) {
        APP.database.open(function () {
            $('head').append('<style>' + resources.css + '</style>');
            $(window).bind('hashchange',route);
            $('body').html(APP.templates.application());
            $(".load").remove();
            route();
        })
        if(storeResources) {
            localStorage.resources = JSON.stringify(resources);
        }
    };
    return {
        start:start,
    };
}());
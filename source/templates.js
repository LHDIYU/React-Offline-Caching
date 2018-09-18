APP.templates = (function () {

    //创建头标签和页面的内容区
    function application () {
        return '<div id="window"><div id="header"><h1>FT Tech Blog</h1></div><div id="body"></div></div>'
    };
    //创建刷新按钮 和 文章列表区域
    function home() {
        return '<button id="refreshButton">刷新新闻</button><div id="headlines"></div>'
    };
    //生成文章列表区域
    function articleList(articles) {
        var i, l, output = '';
        if(!articles.length) {
            return '<p>没有文章，请尝试点击刷新按钮</p>'
        }

        for(i = 0, l = articles.length; i < l; i++) {
            output = output + '<li><h2><a href="#' + articles[i].id +'">' + articles[i].headline +'</a></h2><p>作者：<strong>' + articles[i].author + '</strong> ，发表日期：' + articles[i].date+ '</p></li>'
        }
        return '<ul>' + output + '</ul>';
    };
    //文章详情
    function article(articles) {
        return '<a href="#">回到首页</a><h2>'+ articles[0].headline +'</h2><h3>作者：'+ articles[0].author + '，发表日期：' + articles[0].date +'</h3>' + articles[0].body;
    };
    return {
        application: application,
        home: home,
        articleList: articleList,
        article: article
    };
}());
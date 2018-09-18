<?php
$js = '';
$js = $js . 'window.APP={}; (function (APP) {';
$js = $js . file_get_contents('../../source/application/applicationcontroller.js');
$js = $js . file_get_contents('../../source/articles/articlescontroller.js');
$js = $js . file_get_contents('../../source/articles/article.js');
$js = $js . file_get_contents('../../source/database.js');
$js = $js . file_get_contents('../../source/templates.js');
$js = $js . '}(APP));';
$output['js'] = $js;

$css = '';
$css = $css . file_get_contents('../../css/global.css');
$output['css'] = $css;

echo json_encode($output);

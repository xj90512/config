/*
https://raw.githubusercontent.com/yjqiang/surge_scripts/main/scripts/weibo/weibo_statuses_extend.js
*/

let body = JSON.parse($response.body);
if (body.hasOwnProperty('trend')) {
    delete body['trend'];
    $done({body: JSON.stringify(body)});
}
else
    $done({});

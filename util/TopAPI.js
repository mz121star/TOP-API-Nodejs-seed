var http = require('http'),
    _ = require("underscore"),
    moment = require('moment'),
    URL = require('url'),
    crypto = require('crypto'),
    querystring = require('querystring');


var Post=function(method,clientsession,params){

}
/**
 *
 * @param url Container Url
 * @param appkey
 * @param appSecret
 * @param method request api
 * @param session client session
 * @param params
 * @constructor
 */
var PostAPI = function (url, appkey, appSecret, method, session, params, callback) {
    _.extend(params, {
        app_key:appkey,
        method:method,
        session:session,
        timestamp:moment(new Date()).format("YYYY-MM-DD HH:mm:ss").toString(),
        format:"json",
        v:"2.0",
        sign_method:"md5"
    });
    _.extend(params, {sign:CreateSign(params, appSecret)});
    var u = URL.parse(url);
    HTTPPost(u.hostname, u.pathname, u.port, params, callback);
}
/**
 * HTTP Post请求
 * @param host 主机名
 * @param path 请求路径
 *  @param port 端口
 * @param data 请求的body参数
 * @param callback 回调函数，接受返回的数据
 * @constructor
 */
var HTTPPost = function (host, path, port, data, callback) {
    var result = "";
    var post_data = querystring.stringify(data);
    console.log(post_data.length);
    var options = {
        hostname:host,
        port:port || 80,
        path:path || "/",
        method:'POST',
        headers:{
            'Content-Type':"application/x-www-form-urlencoded;charset=utf-8",
            'Content-Length':post_data.length,
            'User-Agent':"SpaceTimeApp2.0",
            'Keep-Alive':true,
            'timeout':300000
        }
    };


    var req = http.request(options, function (res) {
        // console.log('STATUS: ' + res.statusCode);
        // console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            callback(chunk);
        });
    });

    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });

// write data to request body
    req.write(post_data + '\n');
    req.end();

};
/**
 * 给TOP请求签名  API v2.0
 * @param params
 * @param secret
 * @return {String}
 * @constructor
 */
var CreateSign = function (params, secret) {
    // 第一步：把字典按Key的字母顺序排序
    params = HashSort(params);
    // 第二步：把所有参数名和参数值串在一起
    var query = secret;
    _.each(params, function (item, index) {
        query += index + item;
    })
    query += secret;
    // 第三步：使用MD5加密,把二进制转化为大写的十六进制
    var _tempbytes = new Buffer(query, 'utf8')
    var result = require("crypto").createHash("md5")
        .update(_tempbytes)
        .digest("hex").toUpperCase();
    return result;
}

/**
 *  对hash的key字母进行排序
 * @param params
 * @return {Object}
 * @constructor
 */
var HashSort = function (params) {
    return  _.object(_.pairs(params).sort());
}

exports.PostAPI = PostAPI;
exports.HashSort = HashSort;
exports.CreateSign = CreateSign;
exports.HTTPPost = HTTPPost;
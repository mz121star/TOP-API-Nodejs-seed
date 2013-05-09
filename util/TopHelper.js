var http = require('http'),
    _ = require("underscore"),
    moment = require('moment'),
    URL = require('url'),
    crypto= require("crypto"),
    querystring = require('querystring');

/**
 * 验证回调地址的签名是否合法
 * @param TOP私有参数（未经Base64解密后的）
 * @param 私有会话码
 * @param TOP回调签名（经过URL反编码的）
 * @param 应用公钥
 * @param 应用密钥
 * @constructor
 */
var VerifyTopResponse = function (topParams, topSession, topSign, appKey, appSecret) {
    var result;
    result=appKey+topParams+topSession+appSecret;

    var _tempbytes = new Buffer(result, 'utf8')
    var result = crypto.createHash("md5")
        .update(_tempbytes)
        .digest("base64");
    if(topSign===result) return true;
    else return false;
}
/**
 * 解析回调地址中top_parameters中的值
 * @param parameters
 * @param key
 * @return {*}
 * @constructor
 */
var GetParameters=function(parameters,key){
    var  Data=new Buffer(parameters,'base64').toString();
    return querystring.parse(Data)[key];

}
exports.VerifyTopResponse=VerifyTopResponse;
exports.GetParameters=GetParameters;
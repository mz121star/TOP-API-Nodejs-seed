var crypto = require('crypto');
var config = require('./../appconfig').Config;

/**
 * Sign taobao api for JSSDK`.
 *
 * @param {appkey} Key
 * @param {appsecret} Secret
 * @api public
 */

var Sign = function (appkey,appsecret) {
    var timestamp = new Date().getTime();
    var message = appsecret + "app_key" + appkey + "timestamp" + timestamp + appsecret;
    var sign = SignByHmacMd5(message, appsecret);
    return{
        timestamp:timestamp,
        sign:sign
    }
}
var SignByHmacMd5 = function (message, secret) {

    var hmac = crypto.createHmac("md5", secret);
    var result= hmac.update(message).digest('hex');
    result=result.toUpperCase();
    return result;
}

exports.SignTaobao=Sign;
exports.SignByHmacMd5=SignByHmacMd5;
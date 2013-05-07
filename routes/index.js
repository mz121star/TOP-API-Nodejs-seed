/*
 * GET home page.
 */
var config=require("../appconfig").Config,
    appkey = config.AppKey,
    appsecret = config.AppSecret,
    SignTaobao=require("../util/sign").SignTaobao;
exports.index = function(req, res){

     var SignInfo= SignTaobao(appkey,appsecret);
       res.cookie("timestamp",SignInfo.timestamp);
       res.cookie("sign",SignInfo.sign);
       
      res.render('index', { title: 'Express','AppKey':config.AppKey });

};

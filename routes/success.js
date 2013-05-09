TopHelper = require("../util/TopHelper");
var config = require('./../appconfig').Config;
exports.index = function (req, res) {
    var qstring = req.query;
    if (qstring.top_appkey) {
        if (TopHelper.VerifyTopResponse(qstring.top_parameters, qstring.top_session, qstring.top_sign, config.AppKey, config.AppSecret)){
            var nick=TopHelper.GetParameters(qstring.top_parameters,"visitor_nick");
            res.cookie(nick,qstring.top_session);
            res.cookie("client_session",qstring.top_session);
            res.send("验证成功");
            res.redirect("/main");

        }
        else{
            res.send("验证回调地址参数失败");
        }
    }
    else {
        res.send("登录验证失败");
    }


};
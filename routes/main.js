var TopHelper = require("../util/TopHelper"),
    TopAPI = require("../util/TopAPI");
config = require('./../appconfig').Config;
exports.index = function (req, res) {

      var clientsession= req.cookies["client_session"];
    TopAPI.PostAPI(config.RestUrl(), config.AppKey, config.AppSecret, "taobao.shop.remainshowcase.get",clientsession, {}, function (data) {
        res.render('main', {
            result:data
        })
    })

};
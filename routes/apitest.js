var TopHelper = require("../util/TopHelper"),
    _ = require("underscore"),
    TopAPI = require("../util/TopAPI");

config = require('./../appconfig').Config;
exports.index = function (req, res) {
    var clientsession = req.cookies["client_session"];
    TopAPI.Execute = _.partial(TopAPI.PostAPI, config.RestUrl(), config.AppKey, config.AppSecret, clientsession);
    res.render('APITestTool');
}
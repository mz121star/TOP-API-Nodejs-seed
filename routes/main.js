var TopHelper = require("../util/TopHelper"),
    _ = require("underscore"),
    TopAPI = require("../util/TopAPI");

config = require('./../appconfig').Config;
exports.index = function (req, res) {

    var clientsession = req.cookies["client_session"];
    TopAPI.Execute = _.partial(TopAPI.PostAPI, config.RestUrl(), config.AppKey, config.AppSecret, clientsession);
      res.render('main' );
    /* TopAPI.Execute("taobao.shop.remainshowcase.get", {}, function (data) {
     res.render('main', {
     result: data
     })
     });*/
  /*  TopAPI.Execute("taobao.items.onsale.get",
        {fields: "approve_status,num_iid,title,nick,type,cid,pic_url,num,props,valid_thru, list_time,price,has_discount,has_invoice,has_warranty,has_showcase, modified,delist_time,postage_id,seller_cids,outer_id"
        }, function (data) {
            res.render('main', {
                result: JSON.parse(data),
                title: "商铺信息"
            })
        });*/
    /* var result;
     async.parallel([

     function (cb) {
     TopAPI.Execute("taobao.shop.remainshowcase.get", {}, cb)
     },
     function (cb) {
     TopAPI.Execute("taobao.items.onsale.get",
     {fields: "approve_status,num_iid,title,nick,type,cid,pic_url,num,props,valid_thru, list_time,price,has_discount,has_invoice,has_warranty,has_showcase, modified,delist_time,postage_id,seller_cids,outer_id"
     }, cb)
     }

     ], function (err, result) {
     console.log("err:"+err);
     console.log("result:"+result);
     res.render('main', {
     result: err
     })
     });*/


};
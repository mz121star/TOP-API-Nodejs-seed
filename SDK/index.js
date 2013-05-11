var TopHelper = require("../util/TopHelper"),
    _ = require("underscore"),
    TopAPI = require("../util/TopAPI");
exports.index = function (req, res) {
    var method=req.body.method||{};
    var options=req.body.options||{};
    TopAPI.Execute(method, options, function (data) {
        res.set({
            'Content-Type': 'application/json'
        });
            res.send(data);
        });
 /*   TopAPI.Execute("taobao.items.onsale.get",
        {fields: "approve_status,num_iid,title,nick,type,cid,pic_url,num,props,valid_thru, list_time,price,has_discount,has_invoice,has_warranty,has_showcase, modified,delist_time,postage_id,seller_cids,outer_id"
        }, function (data) {
            res.contentType="application/json";
            res.send(data);
        });*/
}

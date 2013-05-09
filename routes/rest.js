exports.api = function(req, res){

    console.log(req.body);
    res.send("Hello"+req.body.miao);
};
exports.api = function(req, res){

    res.send("Hello"+req.body.name);
};
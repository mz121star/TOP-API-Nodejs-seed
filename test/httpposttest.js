var http = require('http');
http.post = require('http-post');
var assert = require("assert");
describe('HTTP-Post', function () {
    var html = "23";
    beforeEach(function (done) {
        http.post('http://baidu.com', { name:'Sam', email:'sam@emberlabs.org' }, function (res) {
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                html = chunk;
                 done();
            });

        } )

    })
    it('#post() ', function (done) {

        html.should.include("baidu");

    });

})
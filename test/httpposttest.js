/*
var http = require('http');
http.post = require('http-post');
var assert = require("assert");
describe('httpposttest', function () {
    var html = "23";
    beforeEach(function (done) {
        http.post('http://localhost:3002/rest', { name:'Sam', email:'sam@emberlabs.org' }, function (res) {
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                html = chunk;
                 done();
            });

        } )

    })
    it('#post() ', function (done) {

       assert.equal("HelloSam",html);
        done();
    });

})*/

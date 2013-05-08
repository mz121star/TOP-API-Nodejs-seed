var assert = require("assert");

SignByHmacMd5=require("../util/sign").SignByHmacMd5;
describe('signtest', function(){
    describe('Sign', function(){
        it('SignByHmacMd5 ', function(){
            var SignInfo= SignByHmacMd5("12hello","Zshd12HMhaziUNXI");
            assert.equal("D8B26D5970D69B9CE0E8426404119C39", SignInfo);
        })
    })
})
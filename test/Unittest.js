var assert = require("assert"),
    moment = require('moment'),
    TopAPI = require("../util/TopAPI");


describe('Unittest', function () {
    describe('unit', function () {
        var hash = {
            app_key:"appkey",
            method:"method",
            session:"session",
            format:"json",
            v:"2.0",
            sign_method:"md5",
            sign:"z"
        };

        it('#HashSort() ', function () {
            var _temp = hash;
            var a = TopAPI.HashSort(_temp);

        })
        it.skip('#CreateSign()', function () {
            assert.equal("miaozhuangapp_keyappkeyformatjsonmethodmethodsessionsessionsignzsign_methodmd5v2.0miaozhuang", TopAPI.CreateSign(TopAPI.HashSort(hash), "miaozhuang"));
        })


        it('#md5()', function () {
            /*   var a= new Buffer("miaozhuang", 'utf8')

             var result= require("crypto").createHash("md5")
             .update(a)
             .digest("hex").toUpperCase();;
             assert.equal("4FB2E84E54F84B2E9341BAC53A83157D",result);*/


         /*    var post_data =  require('querystring').stringify({name:'miaozhuang',sex:'mansdasdsads',age:'18'});

            assert.equal(39,  post_data.length);*/
          /* var url= require('url');
           var u= url.parse("http://www.webxml.com.cn/WebServices/WeatherWebService.asmx/getSupportCity");*/

           var a= moment(new Date()).format("YYYY-MM-DD HH:mm:ss").toString()
           assert.equal("a",a);

        })

        it('#sHTTPPost()', function (done) {
            var d;
            //TopAPI.HTTPPost("gw.api.tbsandbox.com","/router/rest",{ format:"json"}, function (data) {
             TopAPI.HTTPPost("www.webxml.com.cn","/WebServices/WeatherWebService.asmx/getSupportCity",{byProvinceName:'辽宁'}, function (data) {
                d = data;


                assert.equal("M", d);
                done(data);
            })


        })

    })
})
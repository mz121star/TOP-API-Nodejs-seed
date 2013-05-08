var assert = require("assert"),
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
            var a = TopAPI.HashSort(hash);

        })
    })
})
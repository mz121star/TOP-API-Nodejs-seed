var http = require('http'),
 post = require('http-post'),
 _=require("underscore"),
moment = require('moment');
/**
 *
 * @param url Container Url
 * @param appkey
 * @param appSecret
 * @param method request api
 * @param session client session
 * @param params
 * @constructor
 */
var PostAPI=function( url,  appkey,  appSecret,  method,  session, params){
      _.extend(params,{
          app_key:appkey,
          method:method,
          session:session,
          timestamp:moment(new Date()).format("YYYY-MM-DD:hh:mm:ss"),
          format:"json",
          v:"2.0",
          sign_method:"md5",
          sign:""
      });

}

var CreateSign=function(params,secret){


}

/**
 *  对hash的key字母进行排序
 * @param params
 * @return {Object}
 * @constructor
 */
var HashSort=function(params){
   return  _.object( _.pairs(params).sort());
}

exports.PostAPI=PostAPI;
exports.HashSort=HashSort;
/*
Cad快速看图 https://apps.apple.com/cn/app/cad%E5%BF%AB%E9%80%9F%E7%9C%8B%E5%9B%BE-%E5%A4%A9%E6%AD%A3%E5%85%A8%E4%B8%93%E4%B8%9A/id878550740


[rewrite_local]
^https:\/\/cad\.glodon\.com\/account\/ url script-response-body https://raw.githubusercontent.com/Yu9191/Yu9191/main/cad.js

[MITM]
hostname = cad.glodon.com

*/
// 模拟请求的数据
var requestData = {
  "data": {
    "platformNumber": "1",
    "appId": "1108096074",
    "spaceId": "7080056040259444"
  },
  "code": 0
};

// 模拟返回的数据
var responseData = {
  "body": {
    "cadToken": "761b03f5-c01e-4e66-97dc-cc1fd2011d4f",
    "loginIdentity": "1689926495150",
    "userinfo": {
      "id": "7054044042028241822",
      "email": "baby@ios151",
      "mobile": "1",
      "globalId": "7054044042028241822",
      "gender": null,
      "birthday": null,
      "verified": true,
      "emailVerified": true,
      "mobileVerified": true,
      "enterpriseUser": false
    }
  },
  "code": 1
};

// 模拟请求处理
function handleRequest(

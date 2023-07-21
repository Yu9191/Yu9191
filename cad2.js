var body = $response.body;
var baby = JSON.parse(body);
const vip1 = '/account';
const vip2 = '/alipay/auth';
const vip3 = '/authorize/query';

if ($request.url.indexOf(vip1) != -1){
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
  function handleRequest(requestData) {
  // 这里可以对requestData进行处理，根据不同的请求参数返回不同的responseData
  // 在实际测试中，您可以根据您的需求修改模拟的请求处理逻辑
  return responseData;
};
  // 调用handleRequest处理请求并返回模拟数据
  var response = handleRequest(requestData);
  body = JSON.stringify(response);
}

if ($request.url.indexOf(vip2) != -1){
  baby = {
  "endDate": "5201-03-14 19:57:57",
  "code": "1"
};
  body = JSON.stringify(baby);
}

if ($request.url.indexOf(vip3) != -1){
  baby = {
  "endDate": "5201-03-14 19:57:57",
  "code": "1"
};
  body = JSON.stringify(baby);
}

$done({body});

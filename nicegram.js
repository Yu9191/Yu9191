/*
#Quantumultx
#@ios151,测试完及时删除




[rewrite_local]
^https?:\/\/restore-access\.indream\.app\/restoreAccess\?id=\w+$ url script-response-body https://raw.githubusercontent.com/Yu9191/Yu9191/main/nicegram.js

[MITM]
hostname = restore-access.indream.app

*/
const vip1 = '/restoreAccess';


function handleRequest(request) {
  if (request.url.indexOf(vip1) !== -1) {
    
    const responseData = {
      "code": 1,
      "body": {
        "userInfo": {
          "status": "active",
          "expirationDate": "5201-03-14T23:59:59Z",
          "store": "app_store"
        }
      }
    };
    return { response: { body: JSON.stringify(responseData) } };
  }

  return { response: request.response };
}

$done(handleRequest);

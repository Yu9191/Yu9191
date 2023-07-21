//quantumultx
//@ios151,测试完及时删除




[rewrite_local]
^https?:\/\/restore-access\.indream\.app\/restoreAccess\?id=\w+$ url script-response-body https://raw.githubusercontent.com/Yu9191/Yu9191/main/nicegram.js
//测试完及时删除
[MITM]
hostname = restore-access.indream.app
// Nicegram
const vip1 = '/restoreAccess';

// 处理请求并修改响应
function handleRequest(request) {
  if (request.url.indexOf(vip1) !== -1) {
    // 返回VIP会员数据
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

  // 对于其他请求，保持原始响应
  return { response: request.response };
}

$done(handleRequest);

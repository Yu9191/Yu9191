var endDateResponse = {
  "endDate": "5201-03-14 19:57:57",
  "code": "1"
};

// 返回修改后的数据
var endDateBody = JSON.stringify(endDateResponse);
$done({ body: endDateBody });

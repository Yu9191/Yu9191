<<!DOCTYPE html>
<html>
<head>
  <title>实时观察粉丝数</title>
</head>
<body>
  <h1>实时粉丝数： <span id="followersCount">0</span></h1>

  <script>
    // 假设您有一个函数来获取实时粉丝数，可以使用 setInterval 定时更新粉丝数的显示
    function getFollowersCount() {
      // 在这里编写获取实时粉丝数的逻辑，比如通过 API 请求或其他方式获取粉丝数数据
      // 这里暂时使用随机数模拟实时粉丝数的变化
      return Math.floor(Math.random() * 1000); // 随机生成一个 0 到 1000 的整数
    }

    function updateFollowersCount() {
      const followersCountSpan = document.getElementById('followersCount');
      const followersCount = getFollowersCount();
      followersCountSpan.innerText = followersCount;
    }

    // 每隔 5 秒钟更新一次粉丝数的显示
    setInterval(updateFollowersCount, 5000); // 5000 毫秒即 5 秒钟
  </script>
</body>
</html>

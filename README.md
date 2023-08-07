<!-- 这是一个 .md 文件，但嵌入了 HTML 代码 -->

# 实时观察粉丝数

<h1>实时粉丝数： <span id="followersCount">0</span></h1>

<script>
  function getFollowersCount() {
    // 这里编写获取实时粉丝数的逻辑
    // 在这个示例中，我们暂时使用随机数来模拟实时变化
    return Math.floor(Math.random() * 1000); // 随机生成一个 0 到 1000 的整数
  }

  function updateFollowersCount() {
    const followersCountSpan = document.getElementById('followersCount');
    const followersCount = getFollowersCount();
    followersCountSpan.innerText = followersCount;
  }

  setInterval(updateFollowersCount, 5000); // 每隔 5 秒钟更新一次粉丝数的显示
</script>

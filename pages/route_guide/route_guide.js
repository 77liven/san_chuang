Page({
  data: {
    showSidebar: false, // 侧边栏默认隐藏
    selectedRoute: null, // 选中的路线
    backgroundImage: "http://47.104.210.167:8080/download/assets/导览地图指南页面.png" // 默认背景图
  },

  // 选择路线
  selectRoute(e) {
    const route = e.currentTarget.dataset.route;

    // 定义不同路线的背景图
    const backgroundMap = {
      1: "http://47.104.210.167:8080/download/assets/线路一地图.jpg",
      2: "http://47.104.210.167:8080/download/assets/线路二地图.jpg",
      3: "http://47.104.210.167:8080/download/assets/线路三地图.png"
    };

    this.setData({
      selectedRoute: route,
      showSidebar: true, // 选择路线后显示 sidebar
      backgroundImage: backgroundMap[route] || this.data.backgroundImage // 切换背景图
    });
    const route_id = parseInt(e.currentTarget.dataset.route);
    this.setData({
      selectedRoute: route_id
    });
    console.log(route);
  }
});

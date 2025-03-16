Page({
  data: {
    customHeaderHeight: 0,
    currentTab: 'buy'
  },
  onLoad() {
    // 获取系统信息
    wx.getWindowInfo({
      success: (res) => {
        // 状态栏高度
        const statusBarHeight = res.statusBarHeight;
        // 微信小程序默认标题栏高度 = 状态栏高度 + 固定高度（通常是 44px 或 48px，根据设备不同）
        // 这里我们假设固定部分为 48rpx（小程序中 1px ≈ 2rpx，具体值可以调整）
        const headerHeight = statusBarHeight * 2 + 48; // 转换为 rpx
        this.setData({
          customHeaderHeight: headerHeight
        });
      }
    });
    
  },
  navigateToTicketing() {
    console.log("Navigating to Ticketing");
    wx.navigateTo({
      url: '/pages/Ticketing/Ticketing'
    });
  },
  navigateToCcIndustries() {
    console.log("Navigating to Cc_industries");
    wx.navigateTo({
      url: '/pages/Cc_industries/Cc_industries'
    });
  }
  
})
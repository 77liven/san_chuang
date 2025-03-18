Page({
  data: {
    currentTab: 'guide'
  },
  navigateToMap() {
    console.log("Navigating to Ticketing");
    wx.navigateTo({
      url: '/pages/route_guide/route_guide'
    });
  },
  navigateToVr() {
    console.log("Navigating to Ticketing");
    wx.navigateTo({
      url: '/pages/vr/vr'
    });
  },
  
})
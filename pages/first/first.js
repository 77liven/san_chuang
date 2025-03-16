Page({
  videometa:function (e) {
    var that = this;
    //获取系统信息
    wx.getWindowInfo({
      success (res) {
        //视频的高
        var height = e.detail.height;
        
        //视频的宽
        var width = e.detail.width;
 
        //算出视频的比例
        var proportion = height / width;
 
        //res.windowWidth为手机屏幕的宽。
        var windowWidth = res.windowWidth;
 
        //算出当前宽度下高度的数值
        height = proportion * windowWidth;
        console.log('1222222222'+height);
        that.setData({
          height,
          width:windowWidth
        });
      }
    })
  },
  data: {
    currentTab: 'first',
    videoList: [
      { url: 'https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400' },
      { url: '/assets/videos/video1.mp4' },
      // { url: '/assets/videos/video11.mp4' },
      // { url: '/assets/videos/video2.mp4' },
      // { url: '/assets/videos/video3.mp4' }
    ]
  },
  onLoad() {
    console.log('videoList:', this.data.videoList);
  
    // 确保 this 指向组件实例，使用箭头函数或 bind 来保证
    wx.getWindowInfo({
      success: (res) => {  // 使用箭头函数来确保 this 指向正确
        console.log('wx.getWindowInfo success', res);
      },
      fail: (err) => {
        console.error('wx.getWindowInfo fail', err);
      },
      complete: () => {
        console.log('wx.getWindowInfo complete');
      }
    });
  },

  onVideoError(e) {
    console.error('Video error:', e.detail.errMsg);
    this.setData({
      videoStatus: '加载失败: ' + e.detail.errMsg
    });
  },
  onVideoPlay() {
    console.log('Video playing');
    this.setData({
      videoStatus: '播放成功'
    });
  },
})
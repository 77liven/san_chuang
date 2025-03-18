Page({
  data: {
    showVideo: false,
    isMuted: false,
    videoContext : wx.createVideoContext('myVideo',this),
  },

  // 播放视频
  playVideo() {
    this.setData({ showVideo: true });
    setTimeout(() => {
 this.data.videoContext.requestFullScreen();
 this.data.videoContext.play();
    }, 300);
    console.log(' play showvideo:'+this.data.showVideo);
  },
  closeVideo() {
   
    this.data.videoContext.stop(); // 停止播放
    this.data.videoContext.exitFullScreen(); // 退出全屏
    this.setData({ showVideo: false }); // 隐藏视频窗口
    console.log('showvideo:'+this.data.showVideo);
  },
  doNothing() {
    // 空方法，阻止冒泡
  },


 


});

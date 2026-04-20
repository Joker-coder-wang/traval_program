Page({
  data: {
    attractionName: '欢迎来到大美云南',
    attractionDescription: ' 欢迎来到VR景点浏览体验。在这里，您可以通过全景图片和轮播图模拟VR效果，沉浸式欣赏云南花桥村美景。使用左右控制按钮可以切换不同的视角，感受身临其境的体验。',
    vrImages: [
      '/images1/3.jpg',
      '/images1/4.jpg',
      '/images1/7.jpg',
      '/images1/9.jpg'
    ],
    route: [
      { id: 1, step: '1', description: '初级（约10公里）：花桥村→十步梯→杨升庵祠→叮当关→永国寺' },
      { id: 2, step: '2', description: '进阶（约21公里）：花桥村→十步梯→杨升庵祠→叮当关→永国寺→杉阳古镇→西山寺→觉路遥残关→霁虹桥' },
      { id: 3, step: '3', description: '困难（约30公里）：曲硐古镇→石子坡→万马归槽→花桥村→十步梯→杨升庵祠→叮当关→永国寺→杉阳古镇→觉路遥残关→霁虹桥（澜沧江三桥一线景观、摩崖石刻）' }
    ]
  },

  onLoad: function(options) {
    if (options.name) {
      this.setData({
        attractionName: options.name
      });
    }
  },

  rotateLeft: function() {
    wx.showToast({
      title: '向左旋转视角',
      icon: 'none'
    });
  },

  rotateRight: function() {
    wx.showToast({
      title: '向右旋转视角',
      icon: 'none'
    });
  },

  startVR: function() {
    wx.showModal({
      title: 'VR体验',
      content: '开始沉浸式VR体验，您可以通过滑动屏幕来切换不同的视角。',
      confirmText: '开始体验',
      success: function(res) {
        if (res.confirm) {
          wx.showToast({
            title: 'VR体验已开始',
            icon: 'success'
          });
        }
      }
    });
  },

  share: function() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
    wx.showToast({
      title: '分享功能已开启',
      icon: 'success'
    });
  }
})
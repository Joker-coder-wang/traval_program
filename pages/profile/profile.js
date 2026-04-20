const app = getApp()

Page({
  data: {
    isLoggedIn: false,
    userInfo: {
      nickName: '',
      avatarUrl: ''
    }
  },

  onLoad: function() {
    this.updateUserInfo()
  },

  updateUserInfo: function() {
    this.setData({
      isLoggedIn: app.globalData.isLoggedIn,
      userInfo: app.globalData.userInfo || {
        nickName: '',
        avatarUrl: ''
      }
    })
  },

  login: function() {
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success: (res) => {
        const userInfo = res.userInfo
        app.login(userInfo)
        this.updateUserInfo()
        wx.showToast({
          title: '登录成功',
          icon: 'success'
        })
      },
      fail: () => {
        wx.showToast({
          title: '登录失败',
          icon: 'none'
        })
      }
    })
  },

  logout: function() {
    wx.showModal({
      title: '退出登录',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          app.logout()
          this.updateUserInfo()
          wx.showToast({
            title: '已退出登录',
            icon: 'success'
          })
        }
      }
    })
  },

  showFavorites: function() {
    wx.showModal({
      title: '我的收藏',
      content: '这里展示您收藏的景点列表',
      showCancel: false
    })
  },

  showHistory: function() {
    wx.showModal({
      title: '浏览历史',
      content: '这里展示您的浏览历史记录',
      showCancel: false
    })
  },

  showSettings: function() {
    wx.showModal({
      title: '设置',
      content: '这里可以设置应用的各项参数',
      showCancel: false
    })
  },

  showAbout: function() {
    wx.showModal({
      title: '关于我们',
      content: 'VR景点浏览 v1.0.0\n\n一款沉浸式的VR景点浏览应用，带您探索世界的每一个角落。',
      showCancel: false
    })
  }
})
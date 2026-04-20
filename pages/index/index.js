Page({
  data: {
    attractions: [
      {
        id: 1,
        name: '梅下小居',
        location: '云南 | 大理',
        image: '/images1/meixiaxiaoju.jpg'
      },
      {
        id: 2,
        name: '院中茶亭',
        location: '云南 | 大理',
        image: '/images1/yuanzhongchating.jpg'
      },
      {
        id: 3,
        name: '梅香古道',
        location: '云南 | 大理',
        image: '/images1/meixianggudao.jpg'
      },
      {
        id: 4,
        name: '美韵花桥',
        location: '云南 | 大理',
        image: '/images1/meiyunhuaqiao.jpg'
      }
    ]
  },

  goToBrowse: function() {
    wx.switchTab({
      url: '/pages/browse/browse'
    })
  },

  showAttractionDetail: function() {
    wx.showModal({
      title: '景点介绍',
      content: '这里展示景点的详细介绍信息，包括历史文化背景、特色景观等。',
      showCancel: false
    })
  },

  showRoute: function() {
    wx.showModal({
      title: '路线推荐',
      content: '最佳游玩路线：\n1. 上午：参观主要景点\n2. 中午：品尝当地美食\n3. 下午：游览周边景点\n4. 晚上：欣赏夜景',
      showCancel: false
    })
  },

  goToAttraction: function(e) {
    const id = e.currentTarget.dataset.id;
    const attraction = this.data.attractions.find(item => item.id === id);
    
    wx.navigateTo({
      url: `/pages/browse/browse?id=${id}&name=${attraction.name}`
    })
  }
})
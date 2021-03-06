// pages/label/label.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    labelArr:[
      { 
        name: "", 
        light: 0 
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var userid = app.d.userId;
    wx.request({
      url: app.d.ceshiUrl + '/Api/Message/label',
      method:'POST',
      data:{userid:userid},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function(res){
        that.setData({
          labelArr:res.data
        })
        console.log(that.data.labelArr);
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  toAddLabel(e) {
    wx.navigateTo({
      url: '/pages/addlabel/addlabel',
    })
  },
  selectLight(e){
    var that = this;
    var id = e.currentTarget.dataset.id;
    if (that.data.labelArr[id].light == 0) {
      that.data.labelArr[id].light = 1;
    } else {
      that.data.labelArr[id].light = 0;
    }
    that.setData({
      labelArr: that.data.labelArr
    })
  }
})
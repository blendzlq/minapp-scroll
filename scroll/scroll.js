// pages/scroll/scroll.js
let t = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollBarShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // 获取scroll 的宽高等属性值
    wx.createSelectorQuery().select('#scroll').boundingClientRect((rect) => {
      this.setData({
        scrollBox: rect
      })
    }).exec()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  bindscroll: function(e) {
    let scrollBound = this.data.scrollBox
    let scrollHeight = e.detail.scrollHeight
    let scrollTop = e.detail.scrollTop
    //滚动条bar高度根据显示区域占内容区域的比例显示
    let barHt = (scrollBound.height / scrollHeight) * scrollBound.height;
    let barTop = (scrollTop / (scrollHeight - scrollBound.height) * (scrollBound.height - barHt));
    this.setData({
      barTop: barTop,
      barHt: barHt,
      barShow: true,
      scrollBarShow: true
    })
    clearInterval(t)
    t = setTimeout(() => {
      this.setData({
        barShow: false
      })
    }, 2000)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
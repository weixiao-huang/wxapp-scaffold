//index.js
//获取应用实例
import { promiseHandle } from '../../utils/util'

const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap () {
    promiseHandle(wx.navigateTo, {
      url: '../logs/logs'
    })
  },
  onLoad () {
    console.log('onLoad')
    //调用应用实例的方法获取全局数据
    app.getUserInfo(userInfo => (
      //更新数据
      this.setData({ userInfo })
    ))
  }
})

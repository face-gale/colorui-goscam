Component({
  options: {
    addGlobalClass: true
  },
  data: {
    devTitle: '我的设备',
    deviceList:[
      {
        tabTitle: 'Goscam摄像头介绍',
        tabMode: 0,
        tabUrl: 'https://test.m.sinopaypal.cn/jypx/theme/ces.mp4'
      },{
        tabTitle: 'Goscam摄像头操作演示',
        tabMode: 0,
        tabUrl: 'https://test.m.sinopaypal.cn/jypx/theme/ces.mp4'
      },{
        tabTitle: 'Goscam摄像头操作演示2',
        tabMode: 1,
        tabUrl: ''
      },{
        tabTitle: 'Goscam摄像头操作演示3',
        tabMode: 1,
        tabUrl: ''
      }
    ],
    elements: [{
        title: '人脸识别',
        name: 'Face recognition',
        color: 'white',
        icon: 'emoji',
        fontColor: 'black',
        iconColor: 'blue'
      },
      {
        title: '相册',
        name: 'Photo album',
        color: 'white',
        icon: 'picfill',
        fontColor: 'black',
        iconColor: 'red'
      }
    ],
  },
  methods: {
    statechange(e) {
      console.log('live-player code:', e.detail.code)
    },
    error(e) {
      console.error('live-player error:', e.detail.errMsg)
    }
  }
})
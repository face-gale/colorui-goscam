Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    devTitle: '我的设备',
    deviceList:[
      {
        tabTitle: 'Goscam摄像头介绍',
        tabUrl: ''
      },{
        tabTitle: 'Goscam摄像头操作演示',
        tabUrl: ''
      },{
        tabTitle: 'Goscam摄像头操作演示2',
        tabUrl: ''
      },{
        tabTitle: 'Goscam摄像头操作演示3',
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
  }
})
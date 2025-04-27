/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  中国书: [
    'Home',

    {
      type: 'category',
      label: '人物传记',
      link: {
        slug: '/中国书',
        type: 'generated-index',
        //description: '',
        //keywords: ['人物传记'],
      },
      items: [
        'china/renwu/戴笠',
      ],
    },

    {
      type: 'category',
      label: '职场工作',
      link: {
        type: 'generated-index',
        //description: ' ',
        //keywords: ['职场工作'],
      },
      items: [
        'china/zhichang/RobotCtrl-STM32通用开发套件',
      ],
    },

    {
      type: 'category',
      label: '文学',
      link: {
        type: 'generated-index',
        //description: ' ',
        //keywords: ['文学'],
      },
      items: [
        'china/wenxue/TinyDVR-小巧身材，满载动力',
      ],
    },

    {
      type: 'category',
      label: '历史',
      link: {
        type: 'generated-index',
        //description: ' ',
        //keywords: ['历史书籍'],
      },
      items: [
        'china/lishi/大秦风云',
      ],
    },

  ],




  美国书: [

    {
    type: 'category',
    label: '人物传记',
    link: {
      slug: '/美国书',
      type: 'generated-index',
      //description: 'describtion to be updated',
      //keywords: ['美国人物传记'],
    },
    items: [
      'usa/renwu/双系统极简安装指南',
    ],
  },

  {
    type: 'category',
    label: '文学',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      //keywords: ['美国文学书籍'],
    },
    items: [
      'usa/wenxue/HAL库开发笔记-环境配置',
    ],
  },

  {
    type: 'category',
    label: '历史',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      //keywords: ['美国历史书籍'],
    },
    items: [
      'usa/lishi/HAL库开发笔记-GPIO',
    ],
  },


  ],


  俄罗斯书: [{
    type: 'category',
    label: 'renwu',
    link: {
      slug: '/俄罗斯书',
      type: 'generated-index',
      //description: 'describtion to be updated',
      //keywords: ['俄罗斯人物传记'],
    },
    items: [
      'eluosi/renwu/团队知识库的搭建-理论',
    ],
  },

  {
    type: 'category',
    label: '历史',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      //keywords: ['俄罗斯历史书籍'],
    },
    items: [
      'eluosi/lishi/Windows常用命令',
    ],
  },

  ],

};

module.exports = sidebars;




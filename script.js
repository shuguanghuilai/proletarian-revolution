const { createApp, ref } = Vue

const options = {
  data() {
    return {
      activeTab: 'story',
      countryRegulations: [
        {
          label: '中华人民共和国劳动法',
          desc:
            `
              第三十八条&nbsp;&nbsp;&nbsp;&nbsp;如果公司没有及时支付足额工资，劳动者可以走被迫离职流程。
              <br />
              第四十条&nbsp;&nbsp;&nbsp;&nbsp;提前三十天告知辞退或支付一个月的全额工资（通知金）。
              <br />
              第四十七条&nbsp;&nbsp;&nbsp;&nbsp;公司工龄 N 年，赔 N 个月（补偿金）。
            `,
          url: 'https://www.gov.cn/flfg/2007-06/29/content_669394.htm'
        },
        {
          label: '工资支付暂行规定',
          desc:
            `
              第十二条&nbsp;&nbsp;&nbsp;&nbsp;劳动者被迫停工且非本人造成的，停工首月需要支付全额工资。
            `,
          url: 'https://www.gov.cn/zhengce/2022-08/31/content_5711284.htm'
        },
        {
          label: '住房公积金管理条例',
          desc: '于1999年4月3日由中华人民共和国国务院发布，国务院分别于2002年3月24日、2019年3月24日进行共两次修订，全文共四十七条。',
          url: 'https://www.gov.cn/gongbao/content/2019/content_5468861.htm'
        }
      ],

      localRegulations: [
        {
          label: '深圳市员工工资支付条例',
          desc:
            `
              第二十八条&nbsp;&nbsp;&nbsp;&nbsp;劳动者被迫停工且非本人造成的，停工首月需要支付全额工资。
            `,
          url: 'https://www.gd.gov.cn/zwgk/wjk/zcfgk/content/post_2532037.html'
        },
        {
          label: '广东省工资支付条例',
          desc: '由广东省第十二届人民代表大会常务委员会第二十八次会议于2016年9月29日通过，现予公布，自公布之日起施行。',
          url: 'https://www.gd.gov.cn/zwgk/wjk/zcfgk/content/post_2532357.html'
        },
        {
          label: '上海市企业工资支付办法',
          desc: '在二O一六年六月二十七日 向 各有关委、办、局，各控股（集团）公司、企业（集团）公司，各区、县劳动和社会保障局 印发了的《上海市企业工资支付办法》，其目的是为维护劳动者通过劳动获得劳动报酬的权利，规范企业的工资支付行为。',
          url: 'https://ghpf.acftu.org/flfg/dfldfg/sjzbsh/202009/t20200929_547180.html?7OkeOa4k=qAc4qqk45dB45dB45aHe.UbzeAoDBlpbg0vbAEnoGQ0qqqqqqqqqqqqq5a'
        },
        {
          label: '北京市工资支付规定',
          desc: '是北京市人民政府于2003年12月22日颁布，为规范工资支付行为和维护劳动者的合法权益，根据《中华人民共和国劳动法》及有关法律、法规的规定而制定。《规定》共四十五条，自2004年1月22日起施行。1994年11月16日市政府第25号令发布、1997年12月31日市政府第12号令修改的《规定》第九条同时废止。',
          url: 'https://www.beijing.gov.cn/zhengce/zhengcefagui/201905/t20190522_56550.html'
        },
        {
          label: '浙江省企业工资支付管理办法',
          desc: '已经省人民政府第81次常务会议审议通过，现予公布，自2017年5月1日起施行。本办法共五章三十八条，自2017 年5 月1 日起施行。',
          url: 'https://www.zj.gov.cn/zjservice/item/detail/lawtext.do?outLawId=99c1ab66-5d2d-4199-aec6-cbf66b3d0c9c&impleType=11'
        }
      ],

      storys: [
        {
          label: '【精选】我用十天的时间，拿到了到了n＋1！',
          desc: '你真的甘心只做有经验的事情吗？那你人生的各种个第一次岂不是永远都不会发生？',
          url: './blog.html?id=1',
          thumbnail: 'blog/blog_1/6.png'
        },
        {
          label: '公司违法解除劳动关系，我是怎样从8万赔偿扩大到30万的？',
          desc: '本来只想要个N+1，但公司逼得我不得不把社保、公积金、加班费追缴回来！',
          url: './blog.html?id=2',
          thumbnail: 'blog/blog_2/1.png'
        }
      ]
    }
  },

  methods: {
    onTabClick(name) {
      this.activeTab = name
    },

    getNavTabClass(name) {
      const clss = []
      if (name === this.activeTab) {
        clss.push('nav-item-active')
      }
      return clss
    },

    onSearch() {

    }
  }
}

createApp(options).mount('#app')
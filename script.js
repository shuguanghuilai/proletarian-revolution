const { createApp, ref } = Vue

const options = {
  data() {
    return {
      activeTab: 'story',
      countryRegulations: [
        {
          label: '中华人民共和国劳动法',
          desc: '简称《劳动法》，是一部中华人民共和国法律。于1995年1月1日生效。',
          url: 'https://www.gov.cn/flfg/2007-06/29/content_669394.htm'
        },
        {
          label: '工资支付暂行规定',
          desc: '是为维护劳动者通过劳动获得劳动报酬的权利，规范用人单位的工资支付行为，根据《中华人民共和国劳动法》有关规定制定。由劳动部于1994年12月6日发布，自1995年1月1日起执行。',
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
          desc: '根据《中华人民共和国劳动法》等法律、法规，结合深圳市实际，制定《深圳市员工工资支付条例》。2004年8月27日深圳市第三届人民代表大会常务委员会第三十三次会议通过，2004年9月24日广东省第十届人民代表大会常务委员会第十三次会议批准，并经历2009年、2019年、2022年三次修订。该条例共十章节六十二条。',
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
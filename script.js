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
        },
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
        },
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
        },
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
        },
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
        },
        {
          label: '北京市工资支付规定',
          desc: '是北京市人民政府于2003年12月22日颁布，为规范工资支付行为和维护劳动者的合法权益，根据《中华人民共和国劳动法》及有关法律、法规的规定而制定。《规定》共四十五条，自2004年1月22日起施行。1994年11月16日市政府第25号令发布、1997年12月31日市政府第12号令修改的《规定》第九条同时废止。',
          url: 'https://www.beijing.gov.cn/gongkai/zfxxgk/zc/gz/202112/W020211224575744072611.pdf'
        }
      ],

      storys: [
        {
          label: '我用十天的时间，拿到了到了n＋1！',
          desc: '杭州，工龄11个月。想裁员不赔偿，我用十天的时间，拿到了到了n+1！你真的甘心只做有经验的事情吗？那你人生的各种个第一次岂不是永远都不会发生？',
          url: './blog/blog_1.html',
          thumbnail: 'blog/blog_1/6.png'
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
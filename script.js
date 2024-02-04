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
              第三十八条&nbsp;&nbsp;&nbsp;&nbsp;如果公司没有及时支付足额工资，劳动者可以走被迫离职流程！
              <br />
              第四十条&nbsp;&nbsp;&nbsp;&nbsp;提前三十天告知辞退或支付一个月的全额工资（通知金）！
              <br />
              第四十七条&nbsp;&nbsp;&nbsp;&nbsp;公司工龄 N 年，赔 N 个月（补偿金）！
            `,
          url: 'https://www.gov.cn/flfg/2007-06/29/content_669394.htm'
        },
        {
          label: '工资支付暂行规定',
          desc:
            `
              第十二条&nbsp;&nbsp;&nbsp;&nbsp;劳动者被迫停工且非本人造成的，停工首月需要支付全额工资！
            `,
          url: 'https://www.gov.cn/zhengce/2022-08/31/content_5711284.htm'
        },
        {
          label: '中华人民共和国社会保险法',
          desc:
            `
            第三十五条&nbsp;&nbsp;&nbsp;&nbsp;公司应该缴纳全额基数社保，不是最低基数，也不是基本工资！
            <br />
            第六十三条&nbsp;&nbsp;&nbsp;&nbsp;个人通知了公司，但仍未及时足额缴纳的，由社保局来通知！
            <br />
            第八十六条&nbsp;&nbsp;&nbsp;&nbsp;公司被社保局通知仍逾期的，从欠缴之日起每日收万分之五的滞纳金！进一步逾期的，收欠缴数额的一到三倍！
          `,
          url: 'http://www.mohrss.gov.cn/xxgk2020/fdzdgknr/zcfg/fl/202011/t20201102_394629.html'
        },
        {
          label: '住房公积金管理条例',
          desc:
            `
            第十七条&nbsp;&nbsp;&nbsp;&nbsp;每月缴纳的公积金基数应是你工资全额的！不是基本工资！
            <br />
            第三十八条&nbsp;&nbsp;&nbsp;&nbsp;公积金是强制缴纳的！不能不缴！
          `,
          url: 'https://www.gov.cn/gongbao/content/2019/content_5468861.htm'
        },
        {
          label: '职工带薪年休假条例',
          desc:
            `
            第五条&nbsp;&nbsp;&nbsp;&nbsp;公司不能强制休年假（如春节前后）；未休完的，需要按三倍折现！
          `,
          url: 'https://www.gov.cn/ziliao/flfg/2007-12/16/content_835527.htm'
        }
      ],

      localRegulations: [
        {
          label: '深圳市员工工资支付条例',
          desc:
            `
              第二十八条&nbsp;&nbsp;&nbsp;&nbsp;劳动者被迫停工且非本人造成的，停工首月需要支付全额工资！
            `,
          url: 'https://www.gd.gov.cn/zwgk/wjk/zcfgk/content/post_2532037.html'
        },
        {
          label: '深圳经济特区住房公积金管理条例',
          desc:
            `
              第三十二条&nbsp;&nbsp;&nbsp;&nbsp;可以追缴三年内的公积金！
            `,
          url: 'https://download.caixin.com/upload/111/fujian1.pdf'
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
      ],

      evilDeeds: [
        {
          label: '停工停岗 / 待岗',
          level: 5,
          desc:
            `
            针对这种行为，首先要判断企业是否达到了停工停岗的条件：
            <br />
            1、公司是否只针对你个人或少数人；
            <br />
            2、公司整体经营状况是否出现问题，可观察别的部门员工是否正常工作。
            <br />
            如果都没有，则一律以书面形式拒绝。
            <br />
            <br />
            你所在的项目是否永久性关闭？如果是，则不适用停工停工的的规定，应该让公司调岗，或者正常的解除劳动合同。
            <br />
            <br />
            如果真的要签，务必看清楚是否写明<b>停工薪资、开始结束日期、待遇等，且停工首月需要发全额工资。</b>
            `
        },
        {
          label: '调岗',
          level: 4,
          desc:
            `
            既然是逼你辞职，新岗位肯定不比现在的好，可能降薪、可能偏远、可能加班多、可能没补贴，各种恶心你。让你受不了然后自己离职。
            <br />
            工资总额是否一致、工资架构（基本工资+岗位工资+绩效工资）、岗位名称、工作内容、工作地点、待遇（差旅费、伙食费、住宿费等），你能找到和原岗位不一致的点，
            放大这些点的严重性，从而提出拒绝！
            <br />
            <br />
            如果他强制你去，只要你没有签署任何协议，你继续回原岗位打卡（可能打卡地点都变了导致你无法正常打卡，你可以视频打卡，务必记录时间、地点和你本人），只要你还有在打卡，管他说你旷工不旷工的， 你首先就没同意这门亲事，是他强买强卖！
            `
        },
        {
          label: '假赔偿真辞退',
          level: 4,
          desc:
            `
            敌人让你<b>同时</b>签两份协议 --- <b>补偿协议 & 离职申请</b>。
            <br />
            然后敌人说要拿回部门签字，回来跟你说<b>不好意思，老板同意你的离职申请，但不同意补偿</b>。
            <br />
            结果就是你“名正言顺”地自主离职了！
            <br />
            <br />
            对于这种做法，你要先拿到补偿后离职。而且！公司辞退你你不需要签任何离职相关合同，而是让公司自己出证明！你是不需要写离职申请的！
            `
        },
        {
          label: '离职证明 & 背调',
          level: 4,
          desc:
            `
            HR会拿<b>离职证明写被辞职</b>和<b>背调说你坏话</b>为由，来吓唬你，你担心不好入职下一家公司就被整退缩了，我给你几个转变心态的思路：
            <br />
            <br />
            不给离职证明的，告！
            <br />
            离职证明上离职原因写了负面信息的，告！离职原因是非必填信息，他要是说要给你离职证明写负面信息的，恭喜你，拿到证明反手告他一把，又有一笔赔偿。
            当然咱们还是以长远考虑为主，吓回他，让他自己读读劳动法得了。
            <br />
            <br />
            背调，这个确实没办法避免了，但你也要对自己有自信！
            <br />
            新公司不会只对一家做背调，肯定是会调多几家，综合来考虑你的个人。而且如果一家公司因为这个pass掉你，你还没入职人家就在考虑怎么裁掉你，你敢去么？还能说啥，谢谢现任公司帮你排雷了。
            `
        }
      ]
    }
  },

  created() {
    const activeTab = getHash() || 'story'
    if (activeTab !== this.activeTab) {
      this.activeTab = activeTab
      pushRouter(this.activeTab)
    }
  },

  methods: {
    onTabClick(name) {
      this.activeTab = name
      pushRouter(name)
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
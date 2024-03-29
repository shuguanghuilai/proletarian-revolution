const { createApp, ref } = Vue

const options = {
  data() {
    return {
      title: '公司违法解除劳动关系，我是怎样从8万赔偿扩大到30万的？',
      contents: [
        [
          `作者：曼秀雷不蹲
          <br />
          链接：<a style='color: var(--color-primary)' href='https://post.smzdm.com/p/a4d8onew/' target='__blank'>什么值得买</a>
          `
        ],
        [
          `省流总结，不推荐入职 <span style='color: var(--color-primary)'>珠海城觅科技有限公司</span>，他们的产品是 <span style='color: var(--color-primary)'>澳觅APP</span>`,
          { fontWeight: 'bold' }
        ],
        [
          `一：先统计公司违法行为`,
          { fontWeight: 'bold' }
        ],
        [
          `公司违法行为1：不按照劳动法缴纳五险一金`,
          { fontWeight: 'bold' }
        ],
        [
          `依据：`
        ],
        [
          `<b>社保</b>：根据《劳动法》第七十二条是关于社会保险基金的规定。 根据《中华人民共和国劳动法》第七十二条 用人单位和劳动者必须依法参加社会保险，缴纳社会保险费。`
        ],
        [
          `<b>公积金</b>：《住房公积金管理条例》规定，公司为职工按全额工资作为基数，再按最高缴存比例为职工缴存公积金。`
        ],
        [
          `<b>社保代缴</b>：根据《劳动法》第72条规定，用人单位和劳动者必须依法参加社会保险，缴纳社会保险费。根据《社会保险法》第58条规定，用人单位应当自用工之日起三十日内为其职工向社会保险经办机构申请办理社会保险登记。
          同时，第10条、23条、33条、44条和53条的内容明确，职工应当参加基本养老保险、基本医疗保险、工伤保险、失业保险和生育保险。`
        ],
        [
          `所以，单位建立劳动关系应当缴纳社保，社保是劳动关系的法定附随义务。不是企业和个人想不交就不交的。职工依法参加社会保险既是自身的合法权益，也是应当履行的法定义务。`
        ],
        [
          `<b>实际行为</b>：这家公司是怎么操作的能？五险一金按照最低系数缴纳，且违法找第三方公司代缴，下面是珠海城觅科技有限公司委托第三方公司北京众合天下管理咨询有限公司南京分公司的缴纳证明;`
        ],
        [
          `./blog/blog_2/1.png`,
          {},
          'image'
        ],
        [
          `该行为存在近2年，违规代缴危害员工利息，会导致员工出现工伤和失业金无法正常申领的情况，事实也导致我离职后无法获取失业金。`
        ],
        [
          `./blog/blog_2/2.jpg`,
          {},
          'image'
        ],
        [
          `公司违法行为2：管理稀烂，管理层极度不负责任`,
          { fontWeight: 'bold' }
        ],
        [
          `一个企业的发展离不开好的管理，该企业是我遇到的管理水平最低下的。`
        ],
        [
          `<b>实际情况：</b>在这家企业我最常遇到的是项目延期，沟通好的项目无法按期上线，直接影响下一个版本的工作。对于这样的情况，我是直接找管理层闫XX，这个闫XX接到我的反馈，并没有主动帮助解决，而是说我帮你问问。
          对于这样不负责任的管理者，员工是有危机的，一旦追责，需要做好背锅的准备。`
        ],
        [
          `./blog/blog_2/3.png`,
          {},
          'image'
        ],
        [
          `./blog/blog_2/4.png`,
          {},
          'image'
        ],
        [
          `公司违法行为3：公司无视劳动法，知法犯法`,
          { fontWeight: 'bold' }
        ],
        [
          `<b>依据：</b>根据《劳动合同法》第36条，用人单位与劳动者协商一致，可以解除劳动合同。 该发第46条第2款规定，用人单位依照《劳动合同法》第36条规定向劳动者提出解除劳动合同并与劳动者协商一致解除劳动合同的，用人单位应当向劳动者支付经济补偿。`
        ],
        [
          `<b>实际情况：</b>开人随意，今天下午邮件通知你，明天要么接受离开南京去1000公里外的珠海工作，要么就被n+1；`
        ],
        [
          `懂不懂什么叫做双方协商解除一致啊，你提出也要对方同意，不是你说什么，对方必须接受，这是强迫，是违法行为。`
        ],
        [
          `./blog/blog_2/5.webp`,
          {},
          'image'
        ],
        [
          `公司违法行为4：该公司无任何可量化考核的绩效管理机制，全靠人治`,
          { fontWeight: 'bold' }
        ],
        [
          `<b>依据：</b>员工绩效考核是需要有标准，可量化的。且必须建立在公平的原则上，企业与劳动者协商一致。`
        ],
        [
          `<b>实际行为：</b>当公司看你不上套，你不是不愿意解除劳动关系么，懂法是不是，我就跟你来阴的，我跟你玩规则，我说你绩效不达标，这样总可以了把。不好意思，企业这种行为也是违法行为。`
        ],
        [
          `./blog/blog_2/6.webp`,
          {},
          'image'
        ],
        [
          `公司违法行为5：公司毫无诚信，各种肮脏小手段恶心员工`,
          { fontWeight: 'bold' }
        ],
        [
          `<b>实际行为：</b>`
        ],
        [
          `1. 整个南京市分公司只有一个监控摄像头，那摄像头就是不离职员工的专属摄像头，直接对着你工位，从你上班到你下班，时时刻刻监控你。`
        ],
        [
          `./blog/blog_2/7.png`,
          {},
          'image'
        ],
        [
          `2. 不走，我让你打不了卡，没办法证明你按时来上班;不但如此，公司管理者还故意不批你的补卡申请`
        ],
        [
          `./blog/blog_2/8.webp`,
          {},
          'image'
        ],
        [
          `./blog/blog_2/9.webp`,
          {},
          'image'
        ],
        [
          `3. 南京人事报警，说我已经通知员工安排到珠海工作，现在他不是我们分公司的人，属于非法入侵，要求警察帮助公司把员工赶出去`
        ],
        [
          `4. 为了断绝员工取证，公司连工资条都不发了，你根本不知道你拿的钱对不对`
        ],
        [
          `./blog/blog_2/10.webp`,
          {},
          'image'
        ],
        [
          `5. 只谈赔偿系数，不谈赔偿金额，人事经理说等你拿到钱就知道有多少了。还不是离职最后一天给赔偿金。另外人事经理还威胁员工，如果你不好好的谈，怕到时候背调的时候肯定出问题。`
        ],
        [
          `./blog/blog_2/11.webp`,
          {},
          'image'
        ],
        [
          `6. 入职之后你不得不配合工作出差，然后公司规章制度200一天住宿，但是人事说住的时间长的不能按照公司规章来，必须按照每个月2000元上限报销，超过的自己补钱，平均一天67元不到，和领导沟通无果`
        ],
        [
          `./blog/blog_2/12.png`,
          {},
          'image'
        ],
        [
          `./blog/blog_2/13.webp`,
          {},
          'image'
        ],
        [
          `7. 最骚的就是升职降薪这种骚操作，告诉你升职了，但是你的职位薪资讲了。顺带降薪水的同时把你的工资结构改了，20%的归绩效，方便后期扣绩效工资。`
        ],
        [
          `逆向升职，这家公司如果这样子操作，估计未来得降职涨薪。`
        ],
        [
          `./blog/blog_2/14.webp`,
          {},
          'image'
        ],
        [
          `./blog/blog_2/15.webp`,
          {},
          'image'
        ],
        [
          `./blog/blog_2/16.webp`,
          {},
          'image'
        ],
        [
          `8. 公司法人王可光立项动员大会上要求项目周期内早10晚9的工作时间，周六加班，同时又怕员工告他，还说万一家里有事还是可以去处理的，刻意规避责任`
        ],
        [
          `./blog/blog_2/17.png`,
          {},
          'image'
        ],
        [
          `9. 23年3月更新，公司在最新的合同里加上了有权给你调整工作内容或因工作需要给你安排到公司任一办公点，这一点就会对员工造成很大的风险。如果未来公司想开你，就给你安排到1000公里以外的地方去上班`
        ],
        [
          `./blog/blog_2/18.webp`,
          {},
          'image'
        ],
        [
          `公司行为5：`,
          { fontWeight: 'bold' }
        ],
        [
          `<b>发律师函：</b>明明员工阐述的事实，公司为了避免自己的历史被更多的人看到，还给我发律师函。发律师函不违法，但是滥发也没有意义，我会保留起诉的权利。`
        ],
        [
          `./blog/blog_2/19.webp`,
          {},
          'image'
        ],
        [
          `二：统计违法辞退的赔偿金和五险一金补缴金额`,
          { fontWeight: ' bold' }
        ],
        [
          `2.1 公司主动赔偿：n（2.5）+1为77897.33元`,
          { fontWeight: ' bold' }
        ],
        [
          `2.2 行政手段`,
          { fontWeight: ' bold' }
        ],
        [
          `2.21 社保补缴`,
          { fontWeight: ' bold' }
        ],
        [
          `我已投诉南京社保稽查科，并经过社保稽查几个月的努力，让该公司支付我的社保账户五险及滞纳金共计106354.42元`
        ],
        [
          `./blog/blog_2/20.webp`,
          {},
          'image'
        ],
        [
          `2.22 公积金补缴`,
          { fontWeight: ' bold' }
        ],
        [
          `还未投诉，预估不低于5万元`
        ],
        [
          `2.3 法律手段：我已起诉珠海城觅科技有限公司，并已经依法维护自己的权利，获得2n和加班费，未休年假的差值共69111.12元`,
          { fontWeight: 'bold' }
        ],
        [
          `一审：判决珠海城觅科技有限公司向我支付69111.12元赔偿金，支持我2n和加班费，未休年假的差值。`,
          { fontWeight: 'bold' }
        ],
        [
          `./blog/blog_2/21.webp`,
          {},
          'image'
        ],
        [
          `二审：维持一审原判`,
          { fontWeight: 'bold' }
        ],
        [
          `./blog/blog_2/22.webp`,
          {},
          'image'
        ],
        [
          `./blog/blog_2/22.webp`,
          {},
          'image'
        ],
        [
          `公司主张内容：节选几个主张内容，觉得非常的搞笑`,
          { fontWeight: 'bold' }
        ],
        [
          `./blog/blog_2/24.webp`,
          {},
          'image'
        ],
        [
          `维权结果：向我支付剩余不愿意承担的差额赔偿`,
          { fontWeight: 'bold' }
        ],
        [
          `./blog/blog_2/25.webp`,
          {},
          'image'
        ],
        [
          `./blog/blog_2/26.webp`,
          {},
          'image'
        ],
        [
          `总计钱款：`
        ],
        [
          `./blog/blog_2/27.webp`,
          {},
          'image'
        ],
        [
          `三：我是怎么做的`,
          { fontWeight: 'bold' }
        ],
        [
          `1. 任何让你签字的行为都需要慎重，一旦签字就必须承担法律后果`
        ],
        [
          `2. 我在和公司的沟通中，据理力争，不要畏惧公司的权威，很多情况下，他们都是违法威胁`
        ],
        [
          `3. 记得保留好凭证，加班打卡申请，上下班的凭证，领导让你加班的沟通，公司和你沟通违规的视频，证据不经意间就会涌现，你得有一个会记录的好习惯`
        ],
        [
          `4. 在动你之前一般都有征兆，比如我的领导会主动询问我的加班内容，并表现质疑，这就是开始挑刺，pua了`
        ],
        [
          `5. 保持一颗良好的心态，即使不安排你工作，收走了你的所有权限，你只要坐在工位上就有一天的钱`
        ],
        [
          `6. 多学习法律知识，像我就明确知道合同履行所在地是不允许更改的，并非你安排我去1000公里外我就必须接搜的`
        ]
      ]
    }
  },

  created() {
    document.title = this.title
  },

  methods: {

  }
}

createApp(options).mount('#app')
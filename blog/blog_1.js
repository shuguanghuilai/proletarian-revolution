const { createApp, ref } = Vue

const options = {
  data() {
    return {
      title: '我用十天的时间，拿到了到了n＋1！',
      contents: [
        [
          `作者：翠花banana
            <br />
            链接：<a style='color: #A55858' href='https://www.zhihu.com/question/27843346/answer/2690213218' target='__blank'>知乎</a>`
        ],
        [
          '杭州，工龄11个月。想裁员不赔偿，我用十天的时间，拿到了到了n+1！'
        ],
        [
          '“我们公司没有赔偿这个文化。”'
        ],
        [
          '“我们公司没有n+1这个先例。”'
        ],
        [
          `2022年8月16日，宣布完项目被砍，项目组的人也要裁掉的通知之后，谈及赔偿问题，我的大领导和人事分别跟我说了这样的话。
            我当时觉得被裁这件事情突然变得很有意思，因为我可能即将要体验到绝大部分的人都没机会体验到的谈判和仲裁经历。`
        ],
        [
          `“没有先例，那就给我开先例！”`,
          { fontWeight: 'bold' }
        ],
        [
          '坐标杭州，工龄11个月。'
        ],
        [
          '8月15日，原定的17号外省培训计划突然被叫停，我隐约觉得有大事发生。'
        ],
        [
          '8月16日一早，两个领导和我们项目研发组的三人开了会，宣布了项目被砍的通知，原因是公司战略层面的决策，给我们的缓冲期是一个星期。'
        ],
        [
          '得知这个消息的瞬间，我就打开了手机录音，为了以防万一，同时提醒我搭档录音。'
        ],
        [
          `既然已经是战略决策，就意味着我们连挣扎的机会都没有了，同时也意味着此刻坐在我面前的领导，立场已经跟我们不一致了，我没有办法一如既往地信任他们，我只能以最大的恶意去揣测他们，
            因为事关赔偿问题，以我对公司的了解，他们一定不会跟我们合法解除劳动合同，所以在我们还没有开始谈及赔偿问题的时候，我就开始套领导的话：比如这个项目被砍的根本原因是什么，
            是否是因为我们在工作中犯了错导致项目进行不下去，其他部门对这个项目的协助工作是否到位等等。`
        ],
        [
          `我的目的很简单：我要拿到谈判的主动权，拿到更多对我有利的证据！`
        ],
        [

          `不知道我的大领导是因为单纯，还是因为顾及我们被裁的心情，回答我的问题时，都很客观：项目被砍是公司层面的问题，没有想到后期要投入那么多的人力和财力，公司没有做这个项目的基因。
            我们做得很好，没有犯错。协同部门的工作没有做到位，也没有匹配相应的人才……`
        ],
        [
          `听到这些，我就知道我拿捏了。`
        ],
        [
          `第一次谈判的最后，是赔偿问题，然而大领导给我们的回答是：“我们公司没有赔偿这个文化。”和我想的一样，这就很有意思了，我的斗志成功地被激发了出来！！！
             但毕竟是第一次谈判，还没有必要撕破脸，只是表示我们无法接受公司这样的安排，希望彼此再冷静思考一下。`
        ],
        [
          `回到办公室，我叮嘱其他两位同事，接下来任何人的谈话，都要提前录音，不要说任何对自己不利的话，不接受任何不合理的安排和协商，要争取n＋1！！
             因为我猜接下来会有好几轮谈判，而我们面对的打击和压力，也会一次比一次严厉。`
        ],
        [
          `果不其然，第二天早上，迎来了第二次谈判，这一次谈判，是把我们三个人分开了，轮流交谈。`
        ],
        [
          `作为团队里最刺儿的一个，我是最先被叫走的，他们采用的策略，是调岗。目标薪酬不变，虽然和我们的专业和岗位还算匹配，但我依旧找到了拒绝调岗的理由：
             薪资架构不同，工作地点不一样，工作内容与现岗位相差较大。`
        ],
        [
          `于是第二轮谈判以失败告终，但小组的另一个小姑娘接受了调岗，只剩下我和我搭档了。`
        ],
        [
          `我猜测，接下来会是狂风暴雨的心理战。`
        ],
        [
          `当天下午，人事开始找我谈。`
        ],
        [
          `人事说话的风格一般都是从亲切到关怀作为开场，先扯些有的没的，但我太知道她的目的了，于是我让她跳过哪些废话，谈赔偿事宜。`
        ],
        [
          `这里我也劝那些正在跟公司谈赔偿的朋友们，当你的利益受到威胁的时候，不要接受人事或者领导的关心，你越犹豫越墨迹，越让自己陷入被动。立场不同时，态度强硬一些，谈判就是一个打心理战的过程，谁强谁赢！`
        ],
        [
          `她想在我口中套出一些我的问题，然而我都把责任甩到了领导身上。比如：你们的工作流程是什么样的，我的回答是：我们每做一项决定，都是跟领导开会通过的。问我入职的时候除了现在的这个工作内容，是不是还包括了别的。我直接回答没有（但实际上口头上有说过，我们的工作内容包含了一部分调岗岗位的内容，但合同里没写）`
        ],
        [
          `这个时候跟他们说话，要滴水不漏，没写进合同的，都不能承认。`
        ],
        [
          `最后谈及我们的诉求，我说要合法合理合规，但是……`
        ],
        [
          `./blog/blog_1/1.png`,
          {},
          'image'
        ],
        [
          `./blog/blog_1/2.png`,
          {},
          'image'
        ],
        [
          `这个谈话让我觉得有些搞笑，居然拿离职证明和背调压我，我猜想他们的水平也就这样了，这不仅又提升了我的战斗的野心。`
        ],
        [
          `我知道这不是最后一场谈判，果然，18号，赢来了最恶劣的一场。`
        ],
        [
          `这次跟我们谈判的是其他两个业务线的老大，也是我们的协同部门，平时的关系处得并不是很好。`
        ],
        [
          `矛盾就在这一场谈判里升级了，到了这里，才算得上是正式交锋。`
        ],
        [
          `8月18日下午，她们两个人把我和我搭档叫到了办公室，亲自来叫的，在这种关键时刻，她们亲自来到我们工位上，且大声地把我们叫走，无疑给了我们很大的压力。`
        ],
        [
          `在进办公室之前，我们都把录音打开了，到了办公室，就把手机面朝下，放在旁边。（这么做是为了让她们以为我们没有防备，没录音，也为了让录音没有杂音。）`
        ],
        [
          `和绝大多数的套路一样，这一场谈判就是甩锅和泼脏水，把项目被砍的原因归结到了产品身上，原因就是我们做出来的东西太烂，与社会脱节，不符合市场需求，被客户投诉，从而导致项目无法进行。但公司出于仁义角度，愿意给我们提供岗位，调岗到另一条业务线。`
        ],
        [
          `我们都知道这意味着什么，之前的关系本来就没处好，我们对这条业务线的老大也很不认可，调过去就是等着被穿小鞋，逼迫我们自动离职。走到了这个地步，我们怎么可能答应，于是在办公室吵了起来。`
        ],
        [
          ``
        ],
        [
          `最难扛的压力大概就是她们甩锅泼脏水这一关了，因为她们会从头到尾否定你的工作和产出，会从各方面来告诉你项目被砍的原因根结是出现在产品身上，作为产出者，这个时候很容易出现自我否定的情绪，如果扛不住，你真的会觉得是自己的工作没做好，在心理上就把你打压到了尘埃里。`
        ],
        [
          `这个时候你一定要坚信，你没错，错的是别人，只要咬住一个对自己有利的点，就反复拿出来跟她们讲，比如项目问题真的是产品问题么？协同部门的产出在哪里，客户的需求协同部门做到了么等等。对方甩锅，你就回甩给他们一堆锅碗瓢盆！！`
        ],
        [
          `她们想现场拿出客户负面反馈的信息和录音让我们看，但我都拒绝了，原因有三：`
        ],
        [
          `1、这种“证据”有可能是伪造的。`
        ],
        [
          `2、这种“证据”你只要看了，必定会就此事又进行一番辩解或争吵，无疑是在浪费精力。`
        ],
        [
          `3、你只要答应看，会给对方一种“你也不是很坚定“的感觉，抗压能力差点儿的，会瞬间把自己置于弱势地位。`
        ],
        [
          `我拒绝了一些她们想摆出来的“证据”，告诉她们没有必要在这里浪费这个时间，各自的证据各自保存，到时候会有仲裁员来评估。`
        ],
        [
          `你要用主人翁的态度来谈判！不能认错，不能流露出一丝胆怯！！告诉自己，他们就是欠你的！`,
          { fontWeight: 'bold' }
        ],
        [
          `在甩锅泼脏水这件事情上，一定是谈不拢的，她们反复地跟我扯皮，我就直接打断了这个话题。`
        ],
        [
          `./blog/blog_1/3.png`,
          {},
          'image'
        ],
        [
          `纠结对错，或者为自己辩解在这种时候是没有多大意义的，因为她们的目的并不是纠结对错，而是在心理上对我们进行打压。如果真的要纠结对错，找项目的问题，应该是在项目进行时，找出问题去做调整，而不是等项目被砍之后才秋后算帐。公司已经宣判了我们的死刑，只是在心理上打压我们，企图让我们不挣扎反抗。`
        ],
        [
          `这种时候，你只需要记住一个原则就好：你没错，错的是别人！！！`
        ],
        [
          `在我再一次明确声明我不接受调岗之后……`
        ],
        [
          `./blog/blog_1/4.png`,
          {},
          'image'
        ],
        [
          '很多人以为，公司提供了调岗，你不接受就是你的问题，但是劳动法规定，调岗要具备合理性，是否具备合理性，我们自己做评估，在我看来，只要我不接受，我能找出很多个不合理的点来进行反驳。',
        ],
        [
          '她们话已至此，这场谈判就该到了收尾的时候了。'
        ],
        [
          `./blog/blog_1/5.png`,
          {},
          'image'
        ],
        [
          `我本来以为这场谈判就此结束，以为她们真的会给我发解聘通知书，但接下来她们补充的一些话让我觉得他们对处理裁员这件事情，表现得有些像法盲了，或者，是他们以为我是法盲。`
        ],
        [
          `我答应说这个通知书要提前一个月发，她们说可以，但是这一个月里面对我们的工作另有安排，我说我只做我合同上面的工作，她们见争执不过我，就说要加大我们的产出量，我说可以`
        ],
        [
          `./blog/blog_1/6.png`,
          {},
          'image'
        ],
        [
          `她们想用这一个月的时候把我们逼走，说句实话，我也怕她们真的这么做，因为漫长的拉扯的确会产生很多内耗，但事情没有走到这一步，我就不能吓到。`
        ],
        [
          `但当她下意识反问为什么赔偿是n这个问题的时候，我又变得无比自信。`
        ],
        [
          `虽然谈判最好心平气和，但有些争吵是有必要的，当你把对方逼得脑子不够用血压飙升的时候，能抓到很多对方的漏洞，这都是对我们极有利的证据，但前提是你在争吵的过程中要保持理智，你的目的不是为了争吵，是为了收集证据。`
        ],
        [
          `争吵到后面，双方的情绪都有些激动，但明显对方有些前言不搭后语，最后说让我们直接去走法律程序。`
        ],
        [
          `无理难辨，态度决定胜负，扛得住压力，找得到漏洞，你就不会输。`
        ],
        [
          `脸已经撕破脸，但这个时候直接去仲裁肯定是不被受理的，我必须要拿到更多的证据。于是从她们办公室出来的时候，我给我领导发了信息`
        ],
        [
          `./blog/blog_1/7.png`,
          {},
          'image'
        ],
        [
          `但他并没有对此作出任何回复。`
        ],
        [
          `我知道战役正式打响，于是我们开始着手收集证据，钉钉信息各种截屏，核算走法律程序的各项诉求金额，其中包含了以下这么多项。`
        ],
        [
          `./blog/blog_1/8.png`,
          {},
          'image'
        ],
        [
          `同时，我们也在找公司层面的证据，比如工资发放漏洞（工资分两笔发），以及如果举报公司各项不合规的操作，公司会付出多大的代价等等。`
        ],
        [
          `相关的劳动法条文反复观看，为下一次谈判争取更大的主动权。`
        ],
        [
          `在这里我只想说一句，自己的权益只能自己守护，靠别人你只能被欺负！！`,
          { fontWeight: 'bold' }
        ],
        [
          `下班之前，我们收到了第一封邮件：调岗通知书，调岗理由如下，要求三天内到新岗位报道`
        ],
        [
          `./blog/blog_1/9.png`,
          {},
          'image'
        ],
        [
          `第二天早上我邮件回复了拒绝调岗的通知函：`
        ],
        [
          `./blog/blog_1/10.png`,
          {},
          'image'
        ],
        [
          `一早上相安无事，下午发现我钉钉上的组织架构变动到了调岗方的架构，并且我在公司打卡属于外勤卡，于是我又给我的领导发了信息`
        ],
        [
          `./blog/blog_1/11.png`,
          {},
          'image'
        ],
        [
          `在下班之前，我们和大领导进行了最后一次谈话。这次他的话很少，知道我们在录音。`
        ],
        [
          `他还是希望我们能接受调岗，但我再一次拒绝了，我跟他说昨天和两条业务线老大的谈话很不愉快，她们是不把法律放在眼里，还是觉得公司的制度可以凌驾在法律之上？我觉得我的人格受到了挑战。`
        ],
        [
          `我给他罗列了如果走法律程序我们的诉求点，不止n+1，该拿的钱一分都不能少，也告诉他接下来公司可能会遇到的麻烦（举报偷税漏税）`
        ],
        [
          `再次问及诉求的时候，我的回答是走法律程序之前，是n+1+三个月的社保。`
        ],
        [
          `./blog/blog_1/12.png`,
          {},
          'image'
        ],
        [
          `最终的谈话不争不吵，能感受到他的不愉快，但我很愉快，三个月的社保加上去，就是故意的，我可以让他们砍掉这个，但是他们休想少的一分钱。`
        ],
        [
          `当天下班，我们是打了外勤走的。`
        ],
        [
          `但是第二天上班，我们发现钉钉被关闭了打卡功能，意图逼迫我们前往调岗岗位，没有打卡记录，就会构成矿工，可以以矿工的理由开除我。也就意味着，昨天跟我领导的谈话，失败了。`
        ],
        [
          `革命尚未成功，同志仍需努力！`,
          { fontWeight: 'bold' }
        ],
        [
          `接下来的几天，都没有人来找我们谈，我领导似乎在躲着我们，一直不出现。`
        ],
        [
          `我们每天上下班都视频打卡，工作装模作样，每天的日报正常写，到点就走。同事们知道我们的处境，也都不愿意和我们走得太近。`
        ],
        [
          `这个时候也是很煎熬的，我每天上下班拍视频都有人用异样的眼光看着，甚至有些还会跟你说：打不了卡了吧？也对，要证明自己来上班。`
        ],
        [
          `这种话没错，但当你身处被孤立的状态时，这种话听起来多少有些风凉。`
        ],
        [
          `脸皮薄的未必扛得住，好在我脸皮厚，每天带着自己的电脑，在自己电脑上整理各种材料，有不好听的直接就怼回去了。`
        ],
        [
          `组下的小姑娘调岗到了另一栋楼办公，她走的那天，在电梯里被协同部门的一个男生说教：“到了那边好好干，被退回来了我们可不要了。”`
        ],
        [
          `当时我不在场，但后来我遇到了那个男生，在大办公区问候他：“xxx，听说xx走的时候，你在电梯里跟她说了一些话，你是代表了***（公司名）还是代表****（业务部门）？”`
        ],
        [
          `他估计没想到我当着这么多人的面这么直接，一个劲儿地陪笑。`
        ],
        [
          `我冷笑着对他说：“我劝你，谨言慎行。”`
        ],
        [
          `公司里总是有这种狗腿子，殊不知，我今天所经历的，他们未来在职场上同样可能会经历到，有什么值得出来踩一脚的。`
        ],
        [
          `8月23日早上，我收到了第二封邮件——限期返岗通知书`
        ],
        [
          `./blog/blog_1/13.png`,
          {},
          'image'
        ],
        [
          `礼尚往来，我自然要再次回复邮件`
        ],
        [
          `./blog/blog_1/14.png`,
          {},
          'image'
        ],
        [
          `到了这一步，我觉得我可以先去社会治理中心找劳动仲裁了（每个区都有专门的劳动仲裁，根据公司的注册地，前往相应的劳动仲裁部门）`
        ],
        [
          `早上回复完这封邮件，我就在钉钉上申请了调休（之前有休未调），但由于组织架构变动，审批人不再是我的领导，于是又通过钉钉告知，但他们均已读不回。`
        ],
        [
          `虽然已经整理了几天的材料，但是到了劳动仲裁区，要填写各种材料的时候，发现自己准备得还远远不够。`
        ],
        [
          `./blog/blog_1/15.png`,
          {},
          'image'
        ],
        [
          `这是全部要提交的材料。`
        ],
        [
          `仲裁申请书里有一个请求事项，要在填写之前一定要想清楚你的诉求，比如你核算好的n+1金额是多少，加班费多少，补足社保或公积金等等，每一列都要走明确的数字。写多了他们不认，写少了你自己亏，所以相关的事项，核算准确清楚之后，再去填表。`
        ],
        [
          `证据清单是非常重要的，收集过来的证据都要自己先整理并分类好，比如工资流水、社保证明、工作证明、打卡证明、聊天记录等等等等，尤其是录音，要转成文本，并刻成光盘。`
        ],
        [
          `这个过程，需要耐心，为了自己的权益，值得你花几天的时间去做这些事情。`
        ],
        [
          `由于当天我的录音没有转成文本，聊天记录、工资条等材料都还是图片格式（应该把它们整理成文档，方便打印和审查），所以当天我们打印了工资流水和社保证明，拿了表格就走了。`
        ],
        [
          `如果你打算仲裁，或者正在跟公司谈判，可以去到当地的仲裁厅先了解一下需要哪些材料，你在网上看再多的案例，也没有你亲自踏入仲裁区的感觉真实。事情可能比我们想象的复杂，也有可能比我们想象中的简单。`
        ],
        [
          `原本想直接回家，但我觉得我应该告诉所有人，我今天去了仲裁部门，于是我在打印店买了几个文件夹，每个文件夹上都写上名字：录音转文本材料、证据清单、工作证明等等，并让他们在文件夹里给我塞上很多废的a4纸，看上去鼓鼓当当的。`
        ],
        [
          `然后回公司，抱着我的这些“材料”在公司走了一圈。`,
          { fontWeight: 'bold' }
        ],
        [
          `第二天又抱到了公司，放在工位最显眼的地方，然后在自己的电脑上把所有的材料都整理好`
        ],
        [
          `./blog/blog_1/16.png`,
          {},
          'image'
        ],
        [
          `经过两天的整理，就差打印和一张解除劳动合同的通知书了`
        ],
        [
          `期间行政等老大来找我聊天，以私交的关系，但我猜想她是他们派来的中间人，想劝我退一步，但可惜她遇到的是我，我把我接下来的计划透露给她：我将会在各大平台搭建账号，记录我的第一次仲裁经历，让大家看一看公司n+1的先例是怎么被打开的，也给其他同事打个样儿。`
        ],
        [
          `顺便跟她打了一下感情牌，在她面前掉了两滴眼泪，哭诉对项目的不舍，对大领导的愧疚。`
        ],
        [
          `“x姐，我只是一个普通的劳动者，不是来陪玩的，我要保障的自己的权益，如果连这点最基本的权益都要靠我拿起法律的武器才能保护，那我一定不会退缩。
            这不仅仅是在保障我自己的权益，也是我对未来职场的期待，你也是有孩子的，你希望二十年以后，你家孩子进入职场是这种环境吗？我自己的权益如果我也不去守护，那靠谁来守护？
            靠老板的良心吗？老板要是有良心的话，我也不至于陷入这种处境里。”`,
          { fontWeight: 'bold' }
        ],
        [
          `行政老大跟我一个多小时的交谈之后，对我说：跟你聊完，我突然很期待你跟他们打官司。然后又试探地问了我一句：你说今天你的这些话，我要不要跟他们说呢？`
        ],
        [
          `我内心笑了，我的答案并不重要，因为她一定会跟他们汇报，毕竟她的立场是公司。我看着她的眼睛，微笑说了一句：如果你真的期待，那你就不要讲。`
        ],
        [
          `和她聊完，我觉得我应该是走不到提交仲裁申请书的那一步了，事实证明，我的猜想是对的。`
        ],
        [
          `25号下午两点多，我碰到了人事，就问了她一句：“什么时候才给我发通知书啊？我都等着急了。”`
        ],
        [
          `人事一时语噎，看着我无奈地笑了。`
        ],
        [
          `下午四点多，我正在工位上打瞌睡，一个人高马大的男同事带了两个人进来，叫我和我搭档的名字，说有人找。`
        ],
        [
          `所有人齐刷刷地往我们这边看，我还以为来的是警察什么的，给我吓一跳，我也没犯事儿啊。一看衣服，是公司的工服，哦，原来是换人了，这两人我也没见过啊。`
        ],
        [
          `短暂的慌乱过后，我就镇定了下来，他们刚想开口说话，就被我打断了：“先等会儿”，然后把手机录音打开，问：“你们是哪位？”`
        ],
        [
          `两人都报了名字，我把每个人都名字都重复了一遍，然后问，什么职位的？`
        ],
        [
          `两人都各自报了自己的职位，原来是公司高层。`
        ],
        [
          `要是平时见到，我多少会有点怵，以表尊敬，但现在我的这种处境，他们是不是高管关我屁事，能不能给我n+1才是最重要的。`
        ],
        [
          `事后我的前同事们跟我说，那个时候我好凶猛，看着就很不好欺负的样子。`
        ],
        [
          `他们想把我和我搭档分开，被我拒绝了：“这是同一件事，不一起聊的话，就没必要聊了。”`
        ],
        [
          `吵架的事情我必须在场！！！`
        ],
        [
          `四人落座之后，对方先发话了，单刀直入，说是来解决问题的，`
        ],
        [
          `我：很好，我们也想解决问题，但是在正式谈之前，我先问两位一个问题。`
        ],
        [
          `我低头沉默两秒，抬头问：“读过劳动法吗？”`
        ],
        [
          `二人表示当然读过。`
        ],
        [
          `我：那就最好了，因为之前跟我们谈的人，似乎都不懂法，我们不想在科普劳动法上面浪费时间。既然两位都懂法，那一切就好谈了。`
        ],
        [
          `我至今觉得，我这句话问得很绝，因为法定n+1的赔偿，不是公司想不想的问题，而是公司不得不想的问题。`,
          { fontWeight: 'bold' }
        ],
        [
          `问我们现在是什么诉求。`
        ],
        [
          `我说：我们在等公司给我们发解除劳动合同的通知。`
        ],
        [
          `几番回合下来，我也感受到对方的诚意，再次问及仲裁前的诉求时，我说n+1+三个月的社保。`
        ],
        [
          `男高层觉得终于轮到他发挥了，说：“我们都是懂法的人，赔偿也是要在法定的范围之内，多出来的部分肯定是不能给的，给的话就不是……”`
        ],
        [
          `“可以啊，三个月的社保砍掉，这三个月的社保我放上来就是给你砍的，原因是因为之前的谈判恶心到我了。”我没有给他发挥的机会，直接同意了他的说法。`
        ],
        [
          `但他们突然答应要赔偿n+1，让我感觉有些难受，想哭又想笑，有些生气地看着他们：“你们这样真没劲，你们让我的人生少了一个很难得的体验。”`
        ],
        [
          `他们说我们可以跟他们去找财务，马上把所有的钱结算清楚。`
        ],
        [
          `“既然已经搞得这么不愉快，我们要求把本月的工资也一起结清。”`
        ],
        [
          `他们也答应了，只希望我们赶紧办交接。但我没答应马上过去，以肚子饿了，要先吃饭为由，把交接的事情拖到了晚上（那天正好是加班日）`
        ],
        [
          `其实是因为他们动作太快，我怕有坑，所以需要一点时间来整理一下。`
        ],
        [
          `整场谈话，对方的姿态都放得很低，但有些细节依旧表露出了 n+1 是他们让步才给的，这种无形的傲慢让我很不舒服，就此话题又跟他们争论了一会儿，直到对方语无伦次，强行搪塞。`
        ],
        [
          `“你们今天来跟我们谈，代表的就是公司，那我也告劝你们一句：尊重劳动者！”`,
          { fontWeight: 'bold' }
        ],
        [
          `当天晚上，行政和财务当着我们的面，以最快的速度核算了我们的考勤和工资，以财务计算n+1数额的生疏度，我们几乎可以断定，我们可能不是这近千人公司的首例n+1，但绝对是位数不多的两个。`
        ],
        [
          `./blog/blog_1/17.png`,
          {},
          'image'
        ],
        [
          `签完字，钉钉也开始办理离职交接，整个过程不到两个小时，我们就彻底失业了。`
        ],
        [
          `收到钱入账的短信，我和搭档愉快地起身朝大门走去，帮我们核算工资的小妹妹跑了出来，问钱有没有收到，我说收到了`
        ],
        [
          `看她眼睛有点微红，欲言又止，我说：没事，我们很开心。`
        ],
        [
          `她说：“我希望我以后也可以像你们一样勇敢。”`
        ],
        [
          `当天晚上，前同事发现我们工位空了，发来了信息。`
        ],
        [
          `./blog/blog_1/18.png`,
          {},
          'image'
        ],
        [
          `我也是第一次经历被裁，在此之前，从未想到自己会有一天会有这样的经历，但是当事情降落到自己身上的时候，所有的迎战和反击动作似乎都是很本能的反应。`
        ],
        [
          `十天的时间让我成长了不少，也让我看到了职场不同人的面貌，有怯懦、有嘲讽、有和事佬、也有想战斗的人，中国的职场环境其实并不好，它需要更多的人去净化。`
        ],
        [
          `法定赔偿不是公司想不想的问题，是不得不想的问题。当你的合法权益收到侵害，你自己不拿起法律的武器来保护自己，反而怪国家没有保护你，那请问法律自己会长腿跑来帮你吗？`,
          { fontWeight: 'bold' }
        ],
        [
          `法律的完善，要靠每一个你我咬牙不舍弃的尊严，很多年以后你想想你被别人欺负恐吓的那个熊样儿，你不憋屈么？合法权益被侵害，你不行动，我不行动，就别指望国家为每一个人伸冤。`,
          { fontWeight: 'bold' }
        ],
        [
          `我觉得我这次遇到的对手并不是很强，从一开始我就拿到了主动权，所以这件事情并没有影响我太多心情。反而让我挺开心，拿着n+1去香格里拉耍了半个月，这多香啊。`
        ],
        [
          `但实际上违法裁员的公司都是半大不小的那种，大厂的裁员多数都很合规且人性化。这也就意味着，公司能干出违法裁员的事情，自身水平也就一般，只要证据足够，底气够足，仲裁稳赢，也不会花费你太多的时间和精力，只要把前期工作做好就行。`
        ],
        [
          `如果你像我一样强势，也许并不需要走到仲裁那一步，周旋十天半个月左右，就能拿到法定赔偿。我原本的打算是，如果真的要走到法庭上，我是不打算请律师的，我要亲自上去手撕资本家。`
        ],
        [
          `可惜他们没有给我这样的机会。`
        ],
        [
          `“你真的甘心只做有经验的事情吗？那你人生的各种个第一次岂不是永远都不会发生？”`,
          { fontWeight: 'bold' }
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
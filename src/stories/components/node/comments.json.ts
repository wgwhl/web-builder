import { IComment } from '@core/interface/node/INode';
export const comments: IComment[] = [
  {
    author: {
      img: {
        src: '/assets/images/avatar/01.jpeg',
        style: { width: '40px', height: '40px', borderRadius: '50%' },
        alt: '小南',
      },
      align: 'center start',
      id: 'b5f0ed94-2ebe-40e9-be07-f480efb50994',
      title: '小南',
      subTitle: '2022-05-20 13:54:31',
    },
    time: '2022-05-20T05:54:31+00:00',
    id: '24213e00-d4b8-4ece-bbea-a588efcc7d8d',
    content:
      '<p>坑不坑人，面试者也要学会在面试的过程当中去辨别，我从一个面试官的角度去说说，或许能够给你一些启发，以前端开发应聘为例。</p><p>一个职位首先公司有人才资源短缺的时候由HR发布招聘信息到相应的渠道，在收集到简历之后，HR会进行初步的筛选，然后把简历给到技术面试官。</p><p>技术面试官根据公司项目的实际情况，包括技术栈、开发能力、项目经验等再进一步筛选确认，HR再去通知预约面试时间。</p>',
    child: [
      {
        author: {
          img: {
            src: '/assets/images/avatar/02.jpeg',
            style: { width: '40px', height: '40px', borderRadius: '50%' },
            alt: 'root',
          },
          align: 'center start',
          id: '15765815-07f2-4d7d-8142-cb598f82af2e',
          title: 'root',
          subTitle: '2022-05-23 10:01:38',
        },
        time: '2022-05-23T02:01:38+00:00',
        id: 'bbbe5e9f-9b85-421e-a839-7d50be0eb7ed',
        content:
          '<p>为了表示我们是一家靠谱的公司，在面试前，其实我会和面试者在微信做简单的沟通，比如：<ul class="list-done"><li>告知面试者公司的官网，可以了解到公司做过的项目案例；</li><li>告知面试者公司属于外包性质，是给需求方做软件的定制开发；</li><li>告知面试者公司大部分的项目使用的是比较传统且老旧的技术栈；</li></ul></p>',
        child: [],
        level: 2,
      },
    ],
    level: 1,
  },
  {
    author: {
      img: {
        src: '/assets/images/avatar/03.jpeg',
        style: { width: '40px', height: '40px', borderRadius: '50%' },
        alt: '表歌',
      },
      align: 'center start',
      id: 'd5fb03cb-abca-43ba-baa5-a162a576e67a',
      title: '表歌',
      subTitle: '2022-05-06 14:38:32',
    },
    time: '2022-05-06T06:38:32+00:00',
    id: '2582f1b8-d91b-4a73-86ac-050fda0b10d1',
    content:
      '<p>所谓丑话说在前头，事实就是坦诚相告，如果这家公司说不出自己的缺点，这是值得警惕的。</p><p>面试者得到这样的信息，通过几天的综合考量还是愿意来面试，会进一步考察：</p><ul class="list-done"><li>通过面对面沟通，了解面试者项目经验，是否存在夸大不真诚的说辞；</li><li>通过现场检验过往项目代码查看代码的风格和代码质量；</li><li>在有限的时间内做技术面试，了解面试者大概的技术水平；</li></ul><p>技术面试过后，会将评分和综合的评价反馈给公司相关的领导，根据职位的初中高级做考量录用，HR也会和面试者谈薪资。</p><p>录用过后，会发Offer通知。</p><p>以上就是敝司一个正常的技术面试流程，坦诚布公优缺点，使双方都能够找到契合点，尽量让开发者能够有归属感，多去关注细枝末节，了解公司的文化背景，打听老板和领导的处事风格，让自己有更好的客观评价。</p>',
    child: [],
    level: 1,
  },
];

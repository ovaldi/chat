const jiji = [{
  id: 2001,
  type: 'text',
  text: '丰臣秀吉（日语：とよとみ ひでよし；1537年3月17日-1598年9月18日），原名木下滕吉郎、羽柴秀吉，是日本战国时代、安土桃山时代大名、天下人，著名政治家，继室町幕府之后，首次以天下人的称号统一日本的战国三杰之一。',
  date: '2019-10-21T08:26:40.197Z'
}, {
  id: 2002,
  type: 'notice',
  notice: '"Rhaegar Targaryen" recalled a message',
  date: '2019-10-21T08:27:40.197Z'
}, {
  id: 2003,
  type: 'images',
  images: [
    'https://qcdn.zhangzhongyun.com/covers/1559012014189.jpg?imageView2/0/w/300/q/75',
    'https://qcdn.zhangzhongyun.com/covers/15589405295108.jpg?imageView2/0/w/300/q/75'
  ],
  date: '2019-10-21T08:28:40.197Z'
}, {
  id: 2004,
  type: 'link',
  link: 'https://github.com',
  date: '2019-10-21T09:56:40.197Z'
}];

const susu = [{
  id: 2001,
  type: 'text',
  text: '武宫正树（1951年1月1日－），日本围棋超一流棋手。日本棋院职业围棋棋手，生于东京，入木谷实门下，与石田芳夫，加藤正夫并称“木谷三羽鸟”。棋风称宇宙流，不惜放弃边角，以中腹为目标，用黑棋时几乎全部用三连星开局，深受业余棋友喜爱。',
  date: '2019-10-21T08:26:40.197Z'
}, {
  id: 2002,
  type: 'notice',
  notice: '"Rhaegar Targaryen" recalled a message',
  date: '2019-10-21T08:27:40.197Z'
}, {
  id: 2003,
  type: 'images',
  images: [
    'https://qcdn.zhangzhongyun.com/covers/1559012014189.jpg?imageView2/0/w/300/q/75',
    'https://qcdn.zhangzhongyun.com/covers/15589405295108.jpg?imageView2/0/w/300/q/75'
  ],
  date: '2019-10-21T08:28:40.197Z'
}, {
  id: 2004,
  type: 'link',
  link: 'https://github.com',
  date: '2019-10-21T09:56:40.197Z'
}];

const xing = [{
  id: 2001,
  type: 'text',
  text: '藤泽秀行，日本著名围棋棋士。1925年生于横滨市。本名保（たもつ），隶属日本棋院东京本院，出自福田正义五段门下，围棋九段。1934年成为日本棋院院生，1963年获九段段位。1992年，藤泽以67岁高龄卫冕日本围棋王座战成功，成为史上年龄最大的围棋锦标获得者。1998年10月13日引退。2009年5月8日逝世。',
  date: '2019-10-21T08:26:40.197Z'
}, {
  id: 2002,
  type: 'notice',
  notice: '"Rhaegar Targaryen" recalled a message',
  date: '2019-10-21T08:27:40.197Z'
}, {
  id: 2003,
  type: 'images',
  images: [
    'https://qcdn.zhangzhongyun.com/covers/1559012014189.jpg?imageView2/0/w/300/q/75',
    'https://qcdn.zhangzhongyun.com/covers/15589405295108.jpg?imageView2/0/w/300/q/75'
  ],
  date: '2019-10-21T08:28:40.197Z'
}, {
  id: 2004,
  type: 'link',
  link: 'https://github.com',
  date: '2019-10-21T09:56:40.197Z'
}];

const xuan = [{
  id: 2001,
  type: 'text',
  text: '武田信玄（日文：たけだ しんげん，英语：Takeda Shingen；1521年12月1日—1573年5月13日），日本战国时期甲斐国著名政治家、军事家。从四位下大膳大夫，信浓守，甲斐守，甲斐武田氏第十七代家督。原名武田晴信，幼名胜千代，通称太郎，出家后法号德荣轩信玄，清和源氏源义光之后，武田信虎嫡长子。',
  date: '2019-10-21T08:26:40.197Z'
}, {
  id: 2002,
  type: 'notice',
  notice: '"Rhaegar Targaryen" recalled a message',
  date: '2019-10-21T08:27:40.197Z'
}, {
  id: 2003,
  type: 'images',
  images: [
    'https://qcdn.zhangzhongyun.com/covers/1559012014189.jpg?imageView2/0/w/300/q/75',
    'https://qcdn.zhangzhongyun.com/covers/15589405295108.jpg?imageView2/0/w/300/q/75'
  ],
  date: '2019-10-21T08:28:40.197Z'
}, {
  id: 2004,
  type: 'link',
  link: 'https://github.com',
  date: '2019-10-21T09:56:40.197Z'
}];

const messages = {
  'xing': xing,
  'xuan': xuan,
  'jiji': jiji,
  'susu': susu
};

export default {
  list (data) {
    return Promise.resolve([
      ...messages[data.id]
    ]);
  }
};

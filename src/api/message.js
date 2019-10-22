const messages = [{
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

export default {
  list () {
    return Promise.resolve([...messages]);
  }
};

const friends = [{
  id: 'xing',
  nickname: '滕泽秀行',
  avatar: '//thirdwx.qlogo.cn/mmopen/U8zmWY97mepEZWYMeopibYLIYfbVTqrsYbKzxPHauwlkzPHiagpJpO2jTZGONVJc1oTLkUFP7AJDY0HfKYYlibPCVnwEItB3hfm/132'
}, {
  id: 'xuan',
  nickname: '武田信玄',
  avatar: '//thirdwx.qlogo.cn/mmopen/B6KaxPJVeibfeHnyP33S0rB4azz6PpabH7ACa6Ty29QXsEZ2mffvrj1Z0Fy7RRsoZj0lXjpiaFdyvneVn21hPT0gmpDXvKo4fD/132'
}, {
  id: 'jiji',
  nickname: '丰臣秀吉',
  avatar: '//thirdwx.qlogo.cn/mmopen/KpVDWRgMhZqspHIYCHyD4omxDqr7TeCVg76Mibia4UefBEtDf2b6034cZ7GvfsibNZibV6lhgFoIQ6MuZcx8wr207cnlm9RenA9T/132'
}, {
  id: 'susu',
  nickname: '武宫正树',
  avatar: '//thirdwx.qlogo.cn/mmopen/eRnGTAQNKNka9olzv0CCCuLZ6WcM8nic3nX4ls3cQewMC69fic10sLzvA9net1mic3AyosolVccTas7y1hEquQB1gTiczw62aJpO/132'
}];

module.exports = app => {
  app.post('/v1/login', (req, res) => {
    res.set('Content-Type', 'application/javascript');
    res.json({
      token: '8f9bd27b88064db8adb25d5862066dde',
      expires_in: 604800
    });
  });

  app.get('/v1/friends/:id', (req, res) => {
    res.set('Content-Type', 'application/javascript');
    const friend = friends.find(it => it.id === req.params.id);
    res.json(friend);
  });

  app.get('/v1/friends', (req, res) => {
    res.set('Content-Type', 'application/javascript');
    res.json(friends);
  });

  app.get('/v1/messages', (req, res) => {
    res.set('Content-Type', 'application/javascript');
    res.json([{
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
    }]);
  });

  app.get('/v1/me/profile', (req, res) => {
    res.set('Content-Type', 'application/javascript');
    res.json({
      id: 1000,
      nickname: '算沙',
      avatar: 'https://thirdwx.qlogo.cn/mmopen/RWb56sgZx9Hlic5ckBtEnicd1s6If6KLfwxWz4tM4MibrpGAiajzgsRnzficWqvIXEpN2qfTkjkVXsgjJ9J0IetiaRJkLAD7jIh9S1/0'
    });
  });
};

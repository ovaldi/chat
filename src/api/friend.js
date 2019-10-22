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

export default {
  get (id) {
    const friend = friends.find(it => it.id === id);
    return Promise.resolve({
      ...friend
    });
  },
  list () {
    return Promise.resolve([...friends]);
  }
};

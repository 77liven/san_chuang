Page({
  data: {
    messages: [], // 存储消息列表
    // 预设问题和对应的回复
    presetReplies: {
      '你能帮我写代码吗？': '当然可以！请告诉我你需要写什么代码？',
      '请推荐一些学习资源': '推荐你看看《JavaScript 高级程序设计》和 MDN 文档，很适合学习！',
      '今天天气怎么样': '今天是2025年3月15日，我可以帮你查天气，请告诉我你所在的城市！'
    }
  },

  // 点击预设问题时触发
  onQuestionTap(e) {
    const question = e.currentTarget.dataset.question; // 获取点击的问题
    const reply = this.data.presetReplies[question]; // 获取对应回复

    // 将问题和回复添加到消息列表
    const newMessages = [...this.data.messages, question, reply];
    this.setData({
      messages: newMessages
    });
  }
});
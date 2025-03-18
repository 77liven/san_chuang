Page({
  data: {
    messages: [], // 消息列表
    inputValue: '' // 输入框内容
  },

  // 监听输入框变化
  handleInput(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },

  // 点击预设问题
  onQuestionTap(e) {
    const question = e.currentTarget.dataset.question;
    this.handleMessage(question);
  },

  // 点击发送按钮
  sendMessage() {
    const { inputValue } = this.data;
    if (!inputValue.trim()) {
      wx.showToast({ title: '请输入内容', icon: 'none' });
      return;
    }
    this.handleMessage(inputValue);
    this.setData({
      inputValue: '' // 清空输入框
    });
  },

  // 通用消息处理函数
  handleMessage(message) {
    const newMessages = [...this.data.messages, message];
    this.setData({
      messages: newMessages
    });

    // 可选：模拟 AI 回复（与预设问题一致）
    setTimeout(() => {
      const aiReply = this.getAIReply(message); // 根据问题生成回复
      this.setData({
        messages: [...newMessages, aiReply]
      });
    }, 500);
  },

  // 模拟 AI 回复逻辑（根据你的需求调整）
  getAIReply(question) {
    if (question === '有什么推荐的景点吗') {
      return ' 亮亮推荐三条线路，“民俗文化体验之旅”、“书香求学探索之旅”、“三雕工艺鉴赏之旅”。每条线路都有特色景点，趣味多多，等你来体验！';
    } else if (question === '推荐哪些特色民俗活动？') {
      return '有日常表演《帝师田逢吉》和《阁老回府》等，想知道更多民俗表演何时上演？紧盯首页推荐，一系列演出活动等你来感受！';
    } else if (question === '我想购买特色的文创产品，有推荐吗？') {
      return '良艺坊和良工坊是文创的宝藏之地！在这里，能体验独一无二的剪纸、木雕技艺，亲手打造专属帆布包、书签等；还能购买琳琅满目的特色文创。快在商城提前预约，等你来解锁！ ';
    } else {
      return '亮亮正携手团队小伙伴全力开发中，更多精彩，敬请期待！';
    }
  }
});
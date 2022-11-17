import Toast, { hideToast } from 'tdesign-miniprogram/toast/index';

Page({
  handleShow() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '轻提示文字内容',
    });
  },
  handleHide() {
    hideToast({
      context: this,
      selector: '#t-toast',
    });
  },
});

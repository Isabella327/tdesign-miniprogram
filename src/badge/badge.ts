/*
 * @Author: rileycai
 * @Date: 2021-06-30 11:22:22
 * @LastEditTime: 2021-09-27 15:54:47
 * @LastEditors: Please set LastEditors
 * @Description: 第一次走查问题修复
 * @FilePath: /tdesign-miniprogram/src/badge/badge.ts
 */
import { SuperComponent, wxComponent } from '../common/src/index';
import props from './props';

@wxComponent()
export default class Badge extends SuperComponent {
  options = {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  };

  externalClasses = ['t-class', 't-class-count', 't-class-content'];

  properties = props;

  data = {
    value: '',
  };
}

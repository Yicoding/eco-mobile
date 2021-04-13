---
group:
  title: Input输入框
---

# InputType 不同场景下输入框

## 基本用法

<code src="./demo/base">

## 手机号输入框

<code src="./demo/phone">

## 银行卡

<code src="./demo/bank">

## 身份证

<code src="./demo/ic">

## 自定义 label

<code src="./demo/customLabel">

## 配合 form 使用

<code src="./demo/form">

## API

| 属性     | 说明                               | 类型                   | 可选项                                                                           | 默认值 |
| -------- | ---------------------------------- | ---------------------- | -------------------------------------------------------------------------------- | ------ |
| value    | 输入框的值，可用作回显使用         | string                 | any                                                                              |        |  |
| classes  | 输入框的类名，可用样式覆盖         | object                 |                                                                                  |
| type     | 输入框的类型，决定显示了那种输入框 | string                 | mobile：手机号；bankCard：银行卡；idCardNumber：身份证号；number：默认数字输入框 | number |
| isLabel  | 是否显示 label                     | boolean                | true / false                                                                     | true   |
| onChange | value 变化回调                     | （val：string）=> void |                                                                                  |        |
| label    | label 的内容                       | string , ReactNode ,   |                                                                                  |        |

## 如何自定义样式

### 外部组件以 less 覆盖 ：

  <code>

      .root {
        border: none;
        margin: 5px 0;

        & > :global(.am-list-item) {
          width: 364px;
          border: none;
          height: 44px;

          :global(.am-input-label) {
            width: 140px;
            text-align: right;
            color: #a35e5e !important;
            font-size: 14px;
            margin-right: 0;
          }
          :global(.am-input-control) {
            flex: 1;
            width: 150px;
            height: 44px;
            border-radius: 5px;
            border: 1px solid rgba(207, 207, 207, 0.867) !important;
            padding: 0 5px;

            :globa(input) {
              font-size: 15px;
            }
          }
        }
      }

  </code>

# 设计思想
## 模块拆分
1. 核心层（core)
   1. 通过 WebAPI 组合来实现一些复杂图形。并丰富 canvas 系统
2. WebAPI (webAPI)
   1. 对标 web canvas 提供的方法，并使用这些方法实现一些基本图形
   2. 方便二开支持小程序
3. 操作模块
   1. 事件系统
## 核心层拆分
核心层主要做了两件事
1. 创建一个场景
   1. 背景填充
      1. color 
      2. 图片
   2. width height 
2. 创建图形
   1. 图形共用父类
      1. x , y
      2. width , height 
      3. border
      4. round
      5. z-index
      6. shadow
   2. 图形子类
      1. 矩形
         1. 展示方式
            1. 填充
            2. 空心
         2. 填充
            1. 图片
            2. 颜色
            3. 渐变
      2. 文字
         1. 字体，字号 ，粗体 ，镂空
         2. 垂直，水平 居 左 中 右
         3. 文字在场景中的真实宽度
         4. 中英文换行问题，英文换行断词问题。
      3. 图片
         1. 路径 ，Img 支持
## WebAPI 拆分
1. 系统API的封装
2. 系统API组合
## 响应层 拆分
1. 对模块数据进行代理
2. 在模块数据发生改变时渲染画布
## 事件层
1. canvas 事件代理
2. 通过位置确定选择元素
# 性能篇
1. 元素持久化，操作元素的独立分层
   1. 分层算法 （ z-index 的分组）
# 辅助篇
1. 二维码生成工具
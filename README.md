# Accordion 折叠面板

## 开发
1. yarn install
2. yarn start
3. 在编辑器中打开src/components/Accordion中的文件

## Data
```javascript
const data = [{
  title: '简介',
  list: [{
    text: '依赖',
    href: '#user-content-依赖'
  },{
    text: '理念',
    href: '#user-content-理念'
  },{
    text: '如何快速构建一个模块',
    href: '#user-content-如何快速构建一个模块'
  },{
    text: '项目中的使用方式',
    href: '#user-content-项目中使用方式'
  }]
}, {
  title: '核心API',
  list: [{
    text: 'get',
    href: '#base-apiGet'
  },{
    text: 'regesiter',
    href: '#base-apiRegesiter'
  },{
    text: 'utils',
    href: '#base-apiUtils'
  }]
}, {
  title: '常用功能函数',
  list: [{
    text: 'extend',
    href: '#base-extend'
  }, {
    text: 'support',
    href: '#base-support'
  }, {
    text: 'getAllOptions',
    href: '#base-getAllOptions'
  }, {
    text: 'getInstance',
    href: '#base-getInstance'
  }, {
    text: 'autoInput',
    href: '#base-autoInput'
  }, {
    text: 'eventProxy',
    href: '#base-eventProxy'
  }, {
    text: 'autoProxyTrigger',
    href: '#base-autoProxyTrigger'
  }, {
    text: 'prefixPath',
    href: '#base-perfixPath',
  }, {
    text: 'ajax',
    href: '#base-ajax'
  }, {
    text: 'setUrls',
    href: '#base-setUrls'
  }, {
    text: 'resetRoot',
    href: '#base-resetRoot'
  }]
},{
  title: '基础模块',
  list: [{
    text: 'List',
    href: '#base-moduleList'
  },{
    text: 'Form',
    href: '#base-moduleForm'
  },{
    text: 'Tabs',
    href: '#base-moduleTabs'
  },
  {
    text: 'Modal',
    href: '#base-moduleModal'
  },
  {
    text: 'Login',
    href: '#base-moduleLogin'
  },
  {
  title: '深入base',
  list: [{
    text: '扩展',
    href: '#base-baseExtend'
  },{
    text: '模块通信',
    href: '#user-content-message'
  }]
}]
```
## Props

<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>是否必填</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>activeIndex</td>
<td>Number</td>
<td>可选</td>
<td>undefined</td>
<td>指定那个面板激活</td>
</tr>
<tr>
<td>data</td>
<td>Array</td>
<td>必须</td>
<td>为空</td>
<td>面板的数据集合</td>
</tr>
<tr>
<td>fixed</td>
<td>Boolean</td>
<td>可选</td>
<td>false</td>
<td>是否固定折叠面板</td>
</tr>
<tr>
<td>data</td>
<td>Array</td>
<td>必须</td>
<td>为空</td>
<td>面板的数据集合</td>
</tr>
<tr>
<td>onlyOneOpen</td>
<td>Boolean</td>
<td>可选</td>
<td>false</td>
<td>只有一个面板处于展开状态</td>
</tr>
<tr>
<td>width</td>
<td>Number/String</td>
<td>可选</td>
<td>100%</td>
<td>面板宽度</td>
</tr>
</tbody>
</table>
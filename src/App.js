import React, { Component } from 'react';
import Perf from 'react-addons-perf';
import './App.css';
import Accordion from './components/Accordion';
const win = window;
win.Perf = Perf;
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
  }]
  // }, {
  //   text: 'Smodule',
  //   href: '#base-moduleS'
  // }, {
  //   text: 'Ajax',
  //   href: '#base-moduleAjax'
  // }, {
  //   text: 'Store',
  //   href: '#base-moduleStore'
  // }, {
  //   text: 'Loader',
  //   href: '#base-moduleLoader'
  // }]
}, {
  title: '深入base',
  list: [{
    text: '扩展',
    href: '#base-baseExtend'
  },{
    text: '模块通信',
    href: '#user-content-message'
  }]
}];
class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion activeIndex={1} data= {data} fixed width={200}/>
      </div>
    );
  }
}

export default App;

import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input'
import Col from './col'
import Row from './row'
import Layout from './layout'
import Header from './header'
import Footer from './footer'
import Sider from './sider'
import Content from './content'
import Toast from './toast'
import plugin from './plugin.js'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-col',Col)
Vue.component('g-row',Row)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-sider',Sider)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.component('g-toast',Toast)
Vue.use(plugin)

new Vue({
    el:'#app',
    data: {
      loading1: false,
      loading2: true,
      loading3: false,
      message:  'hello'  
    },
    methods: {
      showToast() {
        this.$toast('我是 message', {
          closeButton: {
            text: 'got that',
            callback(toast){
              toast.log
            }
          },
          autoClose: {}
        })
      }
    }
})

//单元测试
// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)

// const expect = chai.expect

// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon:'settings'
//         }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-settings')
//     vm.$el.remove()
//     vm.$destroy()
// }

// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon:'settings',
//             loading:true
//         }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-loading')
//     vm.$el.remove()
//     vm.$destroy()
// }

// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon:'settings'
//         }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('1')
//     vm.$el.remove()
//     vm.$destroy()
// }

// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon:'settings',
//             iconPosition:'right'
//         }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('2')
//     vm.$el.remove()
//     vm.$destroy()
// }

// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon:'settings'
//         }
//     })
//     vm.$mount()
//     let spy = chai.spy(function(){})
//     vm.$on('click',spy)
//     let button = vm.$el
//     button.click()
//     expect(spy).to.have.been.called()
//     vm.$el.remove()
//     vm.$destroy()
// }
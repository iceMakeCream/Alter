import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import NewsList from '../views/news/NewsList'
import NewsEdit from '../views/news/NewsEdit'
import NewsDetail from '../views/news/NewsDetail'
import PersonInfo from '../views/PersonInfo.vue'
import TableForm from  '../views/TableForm.vue'

//把VueRouter注入到Vue实例
Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes:[
    {path:'/PersonInfo',component:PersonInfo},
    {path:'/home',component:Home},
    {path:'/about',component:About},
    {path:'/contact',component:Contact},
    {path:'/TableForm',component:TableForm},
    {
      path:'/news',
      component:NewsList,
      children:[
        {
          path:'/news/edit',component:NewsEdit
        },
        {
          path:'list',component:NewsList
        }

      ]
    },
    {
      path:'/news/:id',component:NewsDetail
    }
  ]
})

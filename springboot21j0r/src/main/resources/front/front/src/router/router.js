import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import xueshengList from '../pages/xuesheng/list'
import xueshengDetail from '../pages/xuesheng/detail'
import xueshengAdd from '../pages/xuesheng/add'
import jiaoshiList from '../pages/jiaoshi/list'
import jiaoshiDetail from '../pages/jiaoshi/detail'
import jiaoshiAdd from '../pages/jiaoshi/add'
import kechengfenleiList from '../pages/kechengfenlei/list'
import kechengfenleiDetail from '../pages/kechengfenlei/detail'
import kechengfenleiAdd from '../pages/kechengfenlei/add'
import banjiList from '../pages/banji/list'
import banjiDetail from '../pages/banji/detail'
import banjiAdd from '../pages/banji/add'
import kechengxinxiList from '../pages/kechengxinxi/list'
import kechengxinxiDetail from '../pages/kechengxinxi/detail'
import kechengxinxiAdd from '../pages/kechengxinxi/add'
import xuexikechengList from '../pages/xuexikecheng/list'
import xuexikechengDetail from '../pages/xuexikecheng/detail'
import xuexikechengAdd from '../pages/xuexikecheng/add'
import zuoyetongzhiList from '../pages/zuoyetongzhi/list'
import zuoyetongzhiDetail from '../pages/zuoyetongzhi/detail'
import zuoyetongzhiAdd from '../pages/zuoyetongzhi/add'
import xueshengzuoyeList from '../pages/xueshengzuoye/list'
import xueshengzuoyeDetail from '../pages/xueshengzuoye/detail'
import xueshengzuoyeAdd from '../pages/xueshengzuoye/add'
import pigaizuoyeList from '../pages/pigaizuoye/list'
import pigaizuoyeDetail from '../pages/pigaizuoye/detail'
import pigaizuoyeAdd from '../pages/pigaizuoye/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'xuesheng',
					component: xueshengList
				},
				{
					path: 'xueshengDetail',
					component: xueshengDetail
				},
				{
					path: 'xueshengAdd',
					component: xueshengAdd
				},
				{
					path: 'jiaoshi',
					component: jiaoshiList
				},
				{
					path: 'jiaoshiDetail',
					component: jiaoshiDetail
				},
				{
					path: 'jiaoshiAdd',
					component: jiaoshiAdd
				},
				{
					path: 'kechengfenlei',
					component: kechengfenleiList
				},
				{
					path: 'kechengfenleiDetail',
					component: kechengfenleiDetail
				},
				{
					path: 'kechengfenleiAdd',
					component: kechengfenleiAdd
				},
				{
					path: 'banji',
					component: banjiList
				},
				{
					path: 'banjiDetail',
					component: banjiDetail
				},
				{
					path: 'banjiAdd',
					component: banjiAdd
				},
				{
					path: 'kechengxinxi',
					component: kechengxinxiList
				},
				{
					path: 'kechengxinxiDetail',
					component: kechengxinxiDetail
				},
				{
					path: 'kechengxinxiAdd',
					component: kechengxinxiAdd
				},
				{
					path: 'xuexikecheng',
					component: xuexikechengList
				},
				{
					path: 'xuexikechengDetail',
					component: xuexikechengDetail
				},
				{
					path: 'xuexikechengAdd',
					component: xuexikechengAdd
				},
				{
					path: 'zuoyetongzhi',
					component: zuoyetongzhiList
				},
				{
					path: 'zuoyetongzhiDetail',
					component: zuoyetongzhiDetail
				},
				{
					path: 'zuoyetongzhiAdd',
					component: zuoyetongzhiAdd
				},
				{
					path: 'xueshengzuoye',
					component: xueshengzuoyeList
				},
				{
					path: 'xueshengzuoyeDetail',
					component: xueshengzuoyeDetail
				},
				{
					path: 'xueshengzuoyeAdd',
					component: xueshengzuoyeAdd
				},
				{
					path: 'pigaizuoye',
					component: pigaizuoyeList
				},
				{
					path: 'pigaizuoyeDetail',
					component: pigaizuoyeDetail
				},
				{
					path: 'pigaizuoyeAdd',
					component: pigaizuoyeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})

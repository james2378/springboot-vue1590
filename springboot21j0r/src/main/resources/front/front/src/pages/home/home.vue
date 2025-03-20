<template>
<div class="home-preview" :style='{"width":"100%","margin":"10px auto"}'>



<div class="recommend" :style='{"width":"1200px","margin":"0 auto 10px"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"200px","margin":"40px auto","lineHeight":"54px","textAlign":"center"}'>
		<span :style='{"color":"rgba(0, 0, 0, 1)","fontSize":"28px"}'>课程信息推荐</span>
	</div>
	
	
	
	
	
	<!-- 样式四 -->
	<div class="list list4 index-pv1" :style='{"width":"100%","padding":"10px","position":"relative","flexWrap":"wrap","display":"flex","height":"auto"}'>
		<div v-if="kechengxinxiRecommend.length>0" class="list-item animation-box" @click="toDetail('kechengxinxiDetail', kechengxinxiRecommend[0])" :style='{"border":"1px solid #707070","boxShadow":"50px -50px 0px -0px rgba(63,55,168,0.75)","margin":"0 20px 0 0","overflow":"hidden","borderRadius":"25px","width":"400px","position":"absolute","right":"0","height":"870px"}'>
			<img :style='{"objectFit":"cover","width":"100%","height":"810px"}' v-if="preHttp(kechengxinxiRecommend[0].tupian)" :src="kechengxinxiRecommend[0].tupian.split(',')[0]" alt="" />
			<img :style='{"objectFit":"cover","width":"100%","height":"810px"}' v-else :src="baseUrl + (kechengxinxiRecommend[0].tupian?kechengxinxiRecommend[0].tupian.split(',')[0]:'')" alt="" />
			<div class="title line1" :style='{"color":"rgba(0, 0, 0, 1)","textAlign":"center","background":"rgba(233, 242, 255, 1)","width":"100%","lineHeight":"60px","fontSize":"18px","height":"60px"}'>
                <div>{{kechengxinxiRecommend[0].kechengmingcheng}}</div>
                <div>{{kechengxinxiRecommend[0].kechengfenlei}}</div>
                <div>{{kechengxinxiRecommend[0].jiaoshixingming}}</div>
            </div>
		</div>
		<div class="list-body" :style='{"width":"750px","margin":"0 0 35px","display":"flex","height":"400px"}'>
			<div v-if="kechengxinxiRecommend.length>1" @click="toDetail('kechengxinxiDetail', kechengxinxiRecommend[1])" class="list-item animation-box" :style='{"border":"1px solid #707070","margin":"0 10px","overflow":"hidden","borderRadius":"25px","width":"342px","position":"relative","height":"400px"}'>
				<img :style='{"objectFit":"cover","width":"100%","height":"340px"}' v-if="preHttp(kechengxinxiRecommend[1].tupian)" :src="kechengxinxiRecommend[1].tupian.split(',')[0]" alt="" />
				<img :style='{"objectFit":"cover","width":"100%","height":"340px"}' v-else :src="baseUrl + (kechengxinxiRecommend[1].tupian?kechengxinxiRecommend[1].tupian.split(',')[0]:'')" alt="" />
				<div class="title line1" :style='{"color":"rgba(0, 0, 0, 1)","textAlign":"center","background":"rgba(233, 242, 255, 1)","width":"100%","lineHeight":"60px","fontSize":"18px","height":"60px"}'>
                    <div>{{kechengxinxiRecommend[1].kechengmingcheng}}</div>
                    <div>{{kechengxinxiRecommend[1].kechengfenlei}}</div>
                    <div>{{kechengxinxiRecommend[1].jiaoshixingming}}</div>
                </div>
			</div>
			<div v-if="kechengxinxiRecommend.length>2" @click="toDetail('kechengxinxiDetail', kechengxinxiRecommend[2])" class="list-item animation-box" :style='{"border":"1px solid #707070","margin":"0 10px","overflow":"hidden","borderRadius":"25px","width":"342px","position":"relative","height":"400px"}'>
				<img :style='{"objectFit":"cover","width":"100%","height":"340px"}' v-if="preHttp(kechengxinxiRecommend[2].tupian)" :src="kechengxinxiRecommend[2].tupian.split(',')[0]" alt="" />
				<img :style='{"objectFit":"cover","width":"100%","height":"340px"}' v-else :src="baseUrl + (kechengxinxiRecommend[2].tupian?kechengxinxiRecommend[2].tupian.split(',')[0]:'')" alt="" />
				<div class="title line1" :style='{"color":"rgba(0, 0, 0, 1)","textAlign":"center","background":"rgba(233, 242, 255, 1)","width":"100%","lineHeight":"60px","fontSize":"18px","height":"60px"}'>
                    <div>{{kechengxinxiRecommend[2].kechengmingcheng}}</div>
                    <div>{{kechengxinxiRecommend[2].kechengfenlei}}</div>
                    <div>{{kechengxinxiRecommend[2].jiaoshixingming}}</div>
                </div>
			</div>
		</div>
		<div class="list-body" :style='{"width":"750px","margin":"35px 0 40px","display":"flex","height":"400px"}'>
			<div v-if="kechengxinxiRecommend.length>3" @click="toDetail('kechengxinxiDetail', kechengxinxiRecommend[3])" class="list-item animation-box" :style='{"border":"1px solid #707070","margin":"0 10px","overflow":"hidden","borderRadius":"25px","width":"340px","position":"relative","height":"400px"}'>
				<img :style='{"objectFit":"cover","width":"100%","height":"340px"}' v-if="preHttp(kechengxinxiRecommend[3].tupian)" :src="kechengxinxiRecommend[3].tupian.split(',')[0]" alt="" />
				<img :style='{"objectFit":"cover","width":"100%","height":"340px"}' v-else :src="baseUrl + (kechengxinxiRecommend[3].tupian?kechengxinxiRecommend[3].tupian.split(',')[0]:'')" alt="" />
				<div class="title line1" :style='{"color":"rgba(0, 0, 0, 1)","textAlign":"center","background":"rgba(233, 242, 255, 1)","width":"100%","lineHeight":"60px","fontSize":"18px","height":"60px"}'>
                    <div>{{kechengxinxiRecommend[3].kechengmingcheng}}</div>
                    <div>{{kechengxinxiRecommend[3].kechengfenlei}}</div>
                    <div>{{kechengxinxiRecommend[3].jiaoshixingming}}</div>
                </div>
			</div>
			<div v-if="kechengxinxiRecommend.length>4" @click="toDetail('kechengxinxiDetail', kechengxinxiRecommend[4])" class="list-item animation-box" :style='{"border":"1px solid #707070","margin":"0 10px","overflow":"hidden","borderRadius":"25px","width":"340px","position":"relative","height":"400px"}'>
				<img :style='{"objectFit":"cover","width":"100%","height":"340px"}' v-if="preHttp(kechengxinxiRecommend[4].tupian)" :src="kechengxinxiRecommend[4].tupian.split(',')[0]" alt="" />
				<img :style='{"objectFit":"cover","width":"100%","height":"340px"}' v-else :src="baseUrl + (kechengxinxiRecommend[4].tupian?kechengxinxiRecommend[4].tupian.split(',')[0]:'')" alt="" />
				<div class="title line1" :style='{"color":"rgba(0, 0, 0, 1)","textAlign":"center","background":"rgba(233, 242, 255, 1)","width":"100%","lineHeight":"60px","fontSize":"18px","height":"60px"}'>
                    <div>{{kechengxinxiRecommend[4].kechengmingcheng}}</div>
                    <div>{{kechengxinxiRecommend[4].kechengfenlei}}</div>
                    <div>{{kechengxinxiRecommend[4].jiaoshixingming}}</div>
                </div>
			</div>
		</div>
	</div>
	
	
	
	
	
	
	<div @click="moreBtn('kechengxinxi')" :style='{"border":"0","margin":"10px auto","borderRadius":"10px","textAlign":"center","background":"#6f69be","display":"block","width":"100px","lineHeight":"32px"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"12px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#f5f5f5","fontSize":"12px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
</div>

	<!-- 关于我们 -->
	<div :style='{"padding":"30px 260px","boxShadow":"0 1px 6px rgba(255, 255, 255, .3)","margin":"0 0 10px","flexWrap":"wrap","background":"rgba(233, 242, 255, 1)","display":"flex","width":"100%","position":"relative","height":"960px"}'>
	  <div :style='{"width":"100%","margin":"0px 0 20px","lineHeight":"1.5","fontSize":"40px","color":"#333","textAlign":"center"}'>{{aboutUsDetail.title}}</div>
	  <div :style='{"margin":"0 0 10px","color":"#999","textAlign":"center","display":"none","width":"100%","lineHeight":"1.5","fontSize":"20px"}'>{{aboutUsDetail.subtitle}}</div>
	  <div :style='{"padding":"0 10px","flexDirection":"column","display":"flex","width":"100%","position":"relative","justifyContent":"space-between","height":"810px"}'>
	    <img :style='{"width":"620px","margin":"0 10px","objectFit":"cover","borderRadius":"25px","display":"block","height":"350px"}' :src="baseUrl + aboutUsDetail.picture1">
	    <img :style='{"width":"620px","margin":"0 10px","objectFit":"cover","borderRadius":"25px","display":"block","height":"350px"}' :src="baseUrl + aboutUsDetail.picture2">
	    <img :style='{"margin":"0 10px","objectFit":"cover","borderRadius":"25px","left":"720px","bottom":"0","display":"block","width":"620px","position":"absolute","height":"350px"}' :src="baseUrl + aboutUsDetail.picture3">
	  </div>
	  <div :style='{"padding":"0 260px 0 50px","margin":"0 0 10px 0","overflow":"hidden","color":"rgb(102, 102, 102)","top":"120px","width":"50%","lineHeight":"30px","fontSize":"16px","position":"absolute","right":"0","height":"390px"}' v-html="aboutUsDetail.content"></div>
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	</div>
	<!-- 系统简介 -->
	<div :style='{"padding":"30px 260px","boxShadow":"0 1px 6px rgba(255, 255, 255, .3)","margin":"0 0 10px","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","height":"auto"}'>
	  <div :style='{"width":"100%","lineHeight":"1.5","fontSize":"40px","color":"#333","textAlign":"center"}'>{{systemIntroductionDetail.title}}</div>
	  <div :style='{"width":"100%","margin":"10px 0 20px","lineHeight":"1.5","fontSize":"20px","color":"#999","textAlign":"center"}'>{{systemIntroductionDetail.subtitle}}</div>
	  <div :style='{"width":"60%","padding":"0 10px","flexWrap":"wrap","flexDirection":"column","display":"flex","height":"auto"}'>
	    <img :style='{"border":"5px solid #FFFFFF","margin":"0 10px 0 0","objectFit":"cover","borderRadius":"25px","display":"block","width":"60%","height":"320px"}' :src="baseUrl + systemIntroductionDetail.picture1">
	    <img :style='{"border":"5px solid #FFFFFF","margin":"-150px 0 0 15%","objectFit":"cover","borderRadius":"25px","display":"block","width":"60%","height":"320px"}' :src="baseUrl + systemIntroductionDetail.picture2">
	    <img :style='{"border":"5px solid #FFFFFF","margin":"-150px 0 0 30%","objectFit":"cover","borderRadius":"25px","display":"block","width":"60%","height":"320px"}' :src="baseUrl + systemIntroductionDetail.picture3">
	  </div>
	  <div :style='{"padding":"30px","boxShadow":" 0px 4px 10px 0px rgba(0,0,0,0.302)","margin":"0 0 10px 0","overflow":"hidden","color":"rgb(102, 102, 102)","width":"40%","lineHeight":"30px","fontSize":"16px","height":"690px"}' v-html="systemIntroductionDetail.content"></div>
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	</div>
	
<div class="news" :style='{"padding":"20px 260px","margin":"0 0 10px","background":"rgba(233, 242, 255, 1)"}'>
	<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"200px","margin":"10px auto 20px","lineHeight":"54px","textAlign":"center"}'>
		<span :style='{"color":"#000","fontSize":"28px"}'>新闻公告</span>
	</div>
	
	
	
	
	
	<!-- 样式四 -->
	<div v-if="newsList.length" class="list list4 index-pv1" :style='{"width":"100%","padding":"10px","flexWrap":"wrap","justifyContent":"center","display":"flex","height":"auto"}'>
	    <div @click="toDetail('newsDetail', newsList[0])" v-if="newsList.length>0" class="new-list-item animation-box" :style='{"width":"390px","padding":"20px","height":"300px"}'>
			<div :style='{"margin":"0 0 10px","overflow":"hidden","color":"rgba(0, 0, 0, 1)","textAlign":"center","fontSize":"16px","lineHeight":"25px","height":"50px"}' class="new-list-item-title line1">{{newsList[0].title}}</div>
			<div :style='{"padding":"0 20px","margin":"0 0 10px","overflow":"hidden","color":"#666","fontSize":"14px","lineHeight":"25px","height":"125px"}' class="descript  line3">{{newsList[0].introduction}}</div>
			<div :style='{"width":"100%","padding":"10px","fontSize":"12px","color":"#000","textAlign":"center","background":"rgba(252, 190, 75, 1)"}' class="time">{{newsList[0].addtime}}</div>
	    </div>
	    <div @click="toDetail('newsDetail', newsList[0])" v-if="newsList.length>0" class="new-list-item animation-box" :style='{"width":"390px","background":"#fcbe4b","height":"300px"}'>
			<img :style='{"objectFit":"cover","width":"100%","height":"100%"}' :src="baseUrl + newsList[0].picture" alt="">
	    </div>
	    <div @click="toDetail('newsDetail', newsList[1])" v-if="newsList.length>1" class="new-list-item animation-box" :style='{"width":"390px","padding":"20px","height":"300px"}'>
			<div :style='{"margin":"0 0 10px","overflow":"hidden","color":"#000","textAlign":"center","fontSize":"16px","lineHeight":"25px","height":"50px"}' class="new-list-item-title line1">{{newsList[1].title}}</div>
			<div :style='{"margin":"0 0 10px","fontSize":"14px","lineHeight":"25px","overflow":"hidden","color":"#666","height":"125px"}' class="descript  line3">{{newsList[1].introduction}}</div>
			<div :style='{"padding":"10px","fontSize":"12px","color":"#000","textAlign":"center","background":"#fcbe4b"}' class="time">{{newsList[1].addtime}}</div>
	    </div>
	    <div @click="toDetail('newsDetail', newsList[1])" v-if="newsList.length>1" class="new-list-item animation-box" :style='{"width":"390px","background":"#fcbe4b","height":"300px"}'>
			<img :style='{"objectFit":"cover","width":"100%","height":"100%"}' :src="baseUrl + newsList[1].picture" alt="">
	    </div>
	    <div @click="toDetail('newsDetail', newsList[2])" v-if="newsList.length>2" class="new-list-item animation-box" :style='{"width":"390px","padding":"20px","height":"300px"}'>
			<div :style='{"margin":"0 0 10px","overflow":"hidden","color":"#000","textAlign":"center","fontSize":"16px","lineHeight":"25px","height":"50px"}' class="new-list-item-title  line1">{{newsList[2].title}}</div>
			<div :style='{"margin":"0 0 10px","fontSize":"14px","lineHeight":"25px","overflow":"hidden","color":"#666","height":"125px"}' class="descript  line3">{{newsList[2].introduction}}</div>
			<div :style='{"padding":"10px","fontSize":"12px","color":"#000","textAlign":"center","background":"#fcbe4b"}' class="time">{{newsList[2].addtime}}</div>
	    </div>
	    <div @click="toDetail('newsDetail', newsList[2])" v-if="newsList.length>2" class="new-list-item animation-box" :style='{"width":"390px","background":"#fcbe4b","height":"300px"}'>
			<img :style='{"objectFit":"cover","width":"100%","height":"100%"}' :src="baseUrl + newsList[2].picture" alt="">
	    </div>
	</div>
	
	
	
	
	
	
	
	<div @click="moreBtn('news')" :style='{"border":"0","margin":"10px auto","borderRadius":"10px","textAlign":"center","background":"#fcbe4b","display":"block","width":"100px","lineHeight":"32px"}'>
		<span :style='{"color":"#000","fontSize":"12px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#000","fontSize":"12px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
</div>


<div class="lists" :style='{"margin":"0 0 10px","background":"#fff"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"200px","margin":"20px auto","lineHeight":"54px","textAlign":"center"}'>
	  <span :style='{"color":"#000","fontSize":"28px"}'>课程信息展示</span>
	</div>
	
	
	<!-- 样式一 -->
	<div class="list list1 index-pv1" :style='{"width":"100%","padding":"0 10px","background":"#fff","height":"auto"}'>
		<div :style='{"border":"1px solid #707070","margin":"0 0.8%","background":"#f5f5f5","display":"inline-block","width":"15%","position":"relative","height":"auto"}' v-for="(item,index) in kechengxinxiList" :key="index" @click="toDetail('kechengxinxiDetail', item)" class="list-item animation-box">
			<img :style='{"width":"100%","objectFit":"cover","display":"block","height":"500px"}' v-if="preHttp(item.tupian)" :src="item.tupian.split(',')[0]" alt="" />
			<img :style='{"width":"100%","objectFit":"cover","display":"block","height":"500px"}' v-else :src="baseUrl + (item.tupian?item.tupian.split(',')[0]:'')" alt="" />
			<div class="name line1" :style='{"padding":"10px","lineHeight":"32px","fontSize":"14px","color":"#000","textAlign":"center","background":"rgba(233, 242, 255, 1)"}'>{{item.kechengmingcheng}}</div>
			<div class="name line1" :style='{"padding":"10px","lineHeight":"32px","fontSize":"14px","color":"#000","textAlign":"center","background":"rgba(233, 242, 255, 1)"}'>{{item.kechengfenlei}}</div>
			<div class="name line1" :style='{"padding":"10px","lineHeight":"32px","fontSize":"14px","color":"#000","textAlign":"center","background":"rgba(233, 242, 255, 1)"}'>{{item.jiaoshixingming}}</div>
		</div>
	</div>
	
	
	
	
	
	
	
	
	
	<div @click="moreBtn('kechengxinxi')" :style='{"border":"0","margin":"40px auto","borderRadius":"10px","textAlign":"center","background":"#00b9ea","display":"block","width":"100px","lineHeight":"32px"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"12px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#f5f5f5","fontSize":"12px"}' class="el-icon-d-arrow-right"></i>
	</div>
	

</div>


</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        aboutUsDetail: {},
        systemIntroductionDetail: {},
        newsList: [],
        kechengxinxiRecommend: [],

        kechengxinxiList: [],
      }
    },
    created() {
      this.baseUrl = this.$config.baseUrl;
      this.getNewsList();
      this.getAboutUs();
      this.getSystemIntroduction();
      this.getList();
    },
    //方法集合
    methods: {
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getAboutUs() {
          this.$http.get('aboutus/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.aboutUsDetail = res.data.data;
            }
          })
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
		getNewsList() {
			this.$http.get('news/list', {params: {
				page: 1,
				limit: 6,
			order: 'desc'}}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
          let autoSortUrl = "";
          autoSortUrl = "kechengxinxi/autoSort";
			this.$http.get(autoSortUrl, {params: {
				page: 1,
				limit: 6,
			}}).then(res => {
				if (res.data.code == 0) {
					this.kechengxinxiRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
			
			this.$http.get('kechengxinxi/list', {params: {
				page: 1,
				limit: 6,
			}}).then(res => {
				if (res.data.code == 0) {
					this.kechengxinxiList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {detailObj: JSON.stringify(item)}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
	
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: scale(1.02) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: scale(0.9) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: scale(1) skew(0deg, 0deg) translate3d(0px, -30px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
</style>

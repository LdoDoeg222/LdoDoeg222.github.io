<script>
export default{
    name: 'app'
}
// import Header from "./src/Components/Header.vue"
// import {RouterLink, RouterView} from 'vue-router'
</script>
<!-- <script src="./js/clock.js"></script> -->

<template>
    <Header></Header>
    <!-- 中心弹窗 -->

	<!-- 博客介绍 -->
	<article class="intro">
		<p>
			你好！<br>
			这是 Dy镝 的博客，目前处于起步阶段。
		</p>
		<p>
			23.09.03：目前才开始学 HTML+CSS，所以只有最基础的文本、基本的样式……动画？那是什么？
		</p>
		<p>23.09.16：终于学到 JS 以及 DOM 之类的了……继续加油吧</p>
		<p>
			23.09.24：生病一周……再加上发现 CSS 还有一些坑没填，又得回头看 CSS ;w;<br>
			不过发现 CSS 能实现比较不错的动画，让我挺开心的awa，不妨试试下面的弹窗按钮吧
		</p>

		<div class="blink">
			<button class="blinkButton">试图中心弹窗</button>
			<div class="blinkWindow">
				<h4>title</h4>
				<p>text</p>
				<button>Done</button><button>Cancel</button>
			</div>
		</div>
		<hr>
	</article>

	<!-- 轮播图 -->
	<!-- <div class="slider">
		<img src="" alt="壁纸">
		<div class="box"></div>
	</div> -->

	<!-- 主要活动社区显示 -->
	<ul class="activity-container">

	</ul>
	<div class="feature-container">
		<div class="feature-title">
			<h3>我主要活动的社区</h3>
		</div>
		<div class="feature-banner">
			<div class="feature" id="1">
				<img src="./assets/img/Apple 500.500.bmp" alt="图标">
				<h6>知乎</h6>
				<p>
					知乎目前回答的最高赞数已有 1500+。<br>
					回答和文章主要集中在 Minecraft 社区的探讨。<br>
					账号下也有整个知乎 Minecraft 社区的精选集。<br>
				</p>
			</div>
			<div class="feature" id="2">
				<img src="./assets/img/Apple 500.500.bmp" alt="图标">
				<h6>Bilibili</h6>
				<p>
					B 站只写过一篇专栏。<br>
					实际上是搬运自己知乎的《高版本无用论》<br>
					原文链接：<a href="https://www.zhihu.com/question/320720495/answer/694195246">Minecraft 有什么战斗技巧？</a>
				</p>
			</div>
			<div class="feature" id="3">
				<img src="./assets/img/Apple 500.500.bmp" alt="图标">
				<h6>QQ 频道</h6>
				<p>
					频道号：ahome4infps<br>
					频道名：INFP·心灵小憩之处<br>
					偶尔会组织大家写一写大话题讨论。
					目前人数：500+
				</p>
			</div>
		</div>
	</div>

	<!-- 播放器 -->
	<!-- <div class="music-player">
		<span class="box1">HOYO-MiX - Speechless Sorrows 青藤静掩的愁闷.mp3：</span>
		<div class="box2">
			<audio src="./assets/sound/HOYO-MiX - Speechless Sorrows 青藤静掩的愁闷.mp3" controls></audio>
		</div>
	</div> -->

	<button class="gotoTop">
		返回顶部
	</button>


	<!-- 时钟 -->
	<div class="clock">
		<!-- <link rel="stylesheet" href="./css/clock.css"> -->
		<div class="circle"></div>
		<div class="hour"></div>
		<div class="minute"></div>
		<div class="second"></div>
	</div>

	<div class="linear">
		
	</div>
</template>

<style>
</style>
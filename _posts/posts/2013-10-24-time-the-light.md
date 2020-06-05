---
layout: post
categories: blog
title: 时光
---
<style type="text/css">
.shiguang ul li blockquote {
  height:420px;
  font-size:0.8em;
  cursor: pointer;
}
.shiguang ul li blockquote.active {
  background:#444;
  color:#fff;
  -webkit-animation: fadeIn 400ms linear 100ms both;
  -moz-animation:    fadeIn 400ms linear 100ms both;
  -o-animation:      fadeIn 400ms linear 100ms both;
  animation:         fadeIn 400ms linear 100ms both;
}
.shiguang ul li blockquote.inactive {
  -webkit-animation: fadeOut 400ms linear 100ms both;
  -moz-animation:    fadeOut 400ms linear 100ms both;
  -o-animation:      fadeOut 400ms linear 100ms both;
  animation:         fadeOut 400ms linear 100ms both;
}

</style>
<div class='col12 shiguang'>
	<p>(Allow the translation. Click on one or the other.)</p>
	<ul>
		<li class='col6'>
			<blockquote class='chinese active'>
				<p>时间与光阴<br>
				诗的距离而已</p>
				<p>只是忽然写起以往的句子<br>
				怎么想的 ——<br>
				新的旧东西<br>
				似乎只能存于这样的表达</p>
				<p>这是我出生的地方</p>
			</blockquote>
		</li>
		<li class='col6'>
			<blockquote class='active'>
				<p>This is where I grew up</p>
				<p>The universe in which<br>
				I was conscious<br>
				of my thoughts -<br>
				those old new things</p>
				<p>The passages<br>
				carried by the passenger</p>
			</blockquote>
		</li>
	</ul>
</div>
<script>
	var poem = $('.shiguang ul li blockquote');
	poem.on('click',function(){
		poem.removeClass('active').addClass('inactive')
		$(this).removeClass('inactive').addClass('active');
	});
</script>




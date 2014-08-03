---
layout: post
categories: blog
title: 时光
---
<div class='shiguang'>
	<ul>
		<li>
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
		<li>
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




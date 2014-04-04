---
layout: post
categories: blog
---
<div class='circle'>
<p>I studied two things: geography and architecture. The first one enlightened me, because it opened up a world of phenomena distilled into patterns on a map. The second one inspired me, because to think like an architect, one must constantly empathize and puts forward a vision that excites.</p>
</div>
<script>
$('.circle p').lettering();
var letters = $('.circle p').find('span');
console.log(letters);
for (i = 0;i < letters.length; i++){
	$(letters[i]).css('transform','rotate('+(i+1)*1.243+'deg)');
}
</script>

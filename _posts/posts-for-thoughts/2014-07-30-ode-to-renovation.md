---
layout: post
categories: blog
---
<div class='announce'>
    <p>I am renovating</p>
    <p class='slant a1'>to</p>
    <p class='slant a2'>be</p>
    <p class='slant'>more</p>
    <p>organized</p>
</div>
<script>
$('.announce .slant'
    ).lettering();

slant('a1','right');
slant('a2','left');

function slant(classname,direction){
    var parent = document.getElementsByClassName(classname),
        spans = parent[0].getElementsByTagName('span'),
        margin;

    direction === 'left' ? margin = 'marginRight' : margin = 'marginLeft';

    for (var i=0; i < spans.length; i ++) {

        spans[i].style[margin] = 25*i + 'px'; //Element.style.maginLeft
    }
}
</script>
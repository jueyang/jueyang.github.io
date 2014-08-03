---
layout: post
categories: blog
---
<div class='announce'>
    <h1>I am renovating</h1>
    <h1 class='slant a1'>to</h1>
    <h1 class='slant a2'>be</h1>
    <h1 class='slant'>more<h1>
    <h1>organized</h1>
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
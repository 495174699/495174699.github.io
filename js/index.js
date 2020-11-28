// 当页面滚动一定位置时there里面的两个div显示出来
var one = document.querySelector('.one')
var two = document.querySelector('.two')
var there = document.querySelector('.there')
var flyone = document.querySelector('.fly-one')
var flytwo = document.querySelector('.fly-two')
var flyoneb = document.querySelector('.fly-one-bottom')
var flytwob = document.querySelector('.fly-two-bottom')
var treeone = one.querySelector('.one')
var treetwo = one.querySelector('.two')
var treethere = one.querySelector('.there')
var treeofour = one.querySelector('.four')

// 给document添加滚动事件，当window卷曲超过一定位置时there里里面的两个fly元素显示和隐藏
document.addEventListener('scroll', function() {
    if (window.pageYOffset > one.offsetHeight / 4) {
        flyone.style.left = 0 + 'px'
        flytwo.style.right = 0 + 'px'
        flyoneb.style.bottom = 0 + 'px'
        flytwob.style.bottom = 0 + 'px'

    } else {
        flyone.style.left = -200 + 'px'
        flytwo.style.right = -200 + 'px'
        flyoneb.style.bottom = -90 + '%'
        flytwob.style.bottom = -90 + '%'
    }
})
setTimeout(function() {
    treeone.style.display = 'block'
}, 100)
setTimeout(function() {
    treetwo.style.display = 'block'
}, 200)
setTimeout(function() {
    treethere.style.display = 'block'
}, 300)
setTimeout(function() {
    treeofour.style.display = 'block'
}, 400)
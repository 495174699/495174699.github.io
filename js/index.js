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
var treefour = one.querySelector('.four')
var treefive = one.querySelector('.five')
var treesix = one.querySelector('.six')
var qq = document.querySelector('.qq')
var weixin = document.querySelector('.weixin')
var meqq = document.querySelector('.me-qq')
var meweixin = document.querySelector('.me-weixin')
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
    treefour.style.display = 'block'
}, 400)
setTimeout(function() {
    treefive.style.display = 'block'
}, 500)
setTimeout(function() {
        treesix.style.display = 'block'
    }, 600)
    // qq.onmouseover = function() {
    //     meqq.style.display = 'block'
    // }
    // qq.onmouseout = function() {
    //     meqq.style.display = 'none'
    // }
    // weixin.onmouseover = function() {
    //     meweixin.style.display = 'block'
    // }
    // weixin.onmouseleave = function() {
    //         meweixin.style.display = 'none'
    //     }
    //不显示右击菜单　ｃｏｎｔｅｘｔｍｅｎｕ
// document.addEventListener('contextmenu', function(e) {
//         e.preventDefault();
//     })
//     //禁止选中ｓｅｌｅｃｔｓｔａｒｔ
// document.addEventListener('selectstart', function(e) {
//     e.preventDefault();
// })
  no(document)
function no(document) {
            document.addEventListener('contextmenu', function(e) {
                    e.preventDefault();
                })
                //禁止选中ｓｅｌｅｃｔｓｔａｒｔ
            document.addEventListener('selectstart', function(e) {
                e.preventDefault();
            })
            document.addEventListener('keydown', e => {
                console.log(e.keyCode);
                if (e.keyCode == 123) {
                    // console.log(e.returnValue);
                    alert('管理员禁止操作控制台')
                    e.returnValue = false;
                    return (false);
                }
            })
        }
      

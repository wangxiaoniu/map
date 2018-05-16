//重构后
var allButtons=$('#button > span')
var n =0;
var size = allButtons.length
//遍历按钮 按钮点击切换图片
for (let i = 0; i < allButtons.length; i++) {
  
  $(allButtons[i]).on('click', function(ev) {
    var index = $(ev.currentTarget).index()
    var p = index * -300
    $('#images').css({
      transform: 'translate(' + p + 'px)'
    })
    n = index
    //eq()把dom对象变成jQuery对象 添加样式
    activeButton( allButtons.eq(n))
  })
  
}
//按钮处于活动状态 字体变红色
function activeButton($button){
    $button
    .addClass('red')
   .siblings('.red').removeClass('red')
}


//计时器 规定时间内 触发点击 添加red样式
var timerId = setTimer()
function setTimer(){
    return setInterval(() => {
        n += 1
        allButtons.eq(n % size).trigger('click')
      }, 2000)
}


//鼠标移入 .window 层 停止 计时器
$('.window').on('mouseenter',function(){
    console.log('sdfs')
  window.clearInterval(timerId)
})
//鼠标离开 开启计时器
$('.window').on('mouseleave',function(){
    timerId = setTimer()
})


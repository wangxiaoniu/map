//重构前
var allButtons=$('#button > span')

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
    allButtons.eq(n)
      .addClass('red')
   .siblings('.red').removeClass('red')
  })
  
}

var n =0;
var size = allButtons.length
//计时器 规定时间内 触发点击 添加red样式
var timerId = setInterval(() => {
  n += 1
  allButtons.eq(n % size).trigger('click')
    .addClass('red')
   .siblings('.red').removeClass('red')
}, 2000)

//鼠标移入 .window 层 停止 计时器
$('.window').on('mouseenter',function(){
  window.clearInterval(timerId)
})
//鼠标离开 开启计时器
$('.window').on('mouseleave',function(){
timerId = setInterval(() => {
  n += 1
  allButtons.eq(n % size).trigger('click')
    .addClass('red')
   .siblings('.red').removeClass('red')
}, 2000)
})


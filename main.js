var allButtons = $('#buttons>span') //获取所有按钮
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        let index = $(x.currentTarget).index()
        let p = index * -300
        $('#images').css({
            transform: 'translate(' + p + 'px)'
        })
        n = index //点击时，需要重置n 
        addAndRemoveClass(allButtons.eq(n)) //$allButtons是jquery对象, 但是allButtons[0, 1, 3, 4...] 是具体的标签就不是jquery对象了
    })
}

var n = 0
var size = allButtons.length

addAndRemoveClass(allButtons.eq(n % size).trigger('click'))

var timerId = setTimer(allButtons)
console.dir(timerId)

$('#window').on('mouseenter', function () {
    window.clearInterval(timerId)
})

$('#window').on('mouseleave', function () {
    timerId = setTimer(allButtons) //因为我们clear的是timeid，所以mouseleave的时候，要把setInterval赋值给timeid
})

function setTimer(allButtons) {
    return setInterval(() => {
        n += 1;
        addAndRemoveClass(allButtons.eq(n % size).trigger('click'));
    }, 2000);
}

function addAndRemoveClass(buttons) {
    buttons.addClass('red').siblings('.red').removeClass('red');
}
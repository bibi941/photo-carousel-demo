var allButtons = $('#buttons>span')
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        let index = $(x.currentTarget).index()
        let p = index * -300
        $('#images').css({
            transform: 'translate(' + p + 'px)'
        })
        n=index//点击时，需要重置n
        addAndRemoveClass(allButtons.eq(n))
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
  timerId=setTimer(allButtons)
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
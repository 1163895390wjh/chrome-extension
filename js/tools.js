/**
 * 增加cj函数，展开打印JSON
 */
function injectCC() {
    const old = window.lebron || {}
    const oldEcma = old?.ecma || {}

    window.lebron = {
        ...old,
        cc: function () {
            // example lebron.util.consoleGroup([1,2,3],'jack',{name:'lucy'})
            if (arguments.length === 0) {
                console.log(`cc --> ${util.timeFmt(new Date(), 'yyyy-MM-dd hh:mm:ss')}`)
                return
            }
            for (var p in arguments) {
                console.group(arguments[p])
            }
            for (var p in arguments) {
                console.groupEnd()
            }
        },
        // 显示json的具体属性
        cj(json = null) {
            if (!json) {
                console.log(`cj --> ${util.timeFmt(new Date(), 'yyyy-MM-dd hh:mm:ss')}`)
                return
            }
            console.log(JSON.parse(JSON.stringify(json)))
        },


    }
    window.cc = window.cc || window.lebron.cc || function () {
    }
    window.cj = window.cj || window.lebron.cj || function () {
    }

}

/**
 * 移除CSDN的禁止复制功能
 */
function removeUserSelectEvent() {
    if (window.location.hostname === 'blog.csdn.net') {
        ;[...document.querySelectorAll('#content_views pre')].forEach(el => {
            el.style.userSelect = 'unset'
        })
        ;[...document.querySelectorAll('#content_views pre code')].forEach(el => {
            el.style.userSelect = 'unset'
        })
    }

}


function main() {
    injectCC()
    removeUserSelectEvent()
}


main()

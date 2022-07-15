async function injectBox() {


    let htmlDivElement = document.createElement('div');
    const host = window.location.hostname
    // const hostList = JSON.parse(localStorage.getItem('flagHostList'))

    if (location.hostname === 'localhost') {
        autoCompleteLogin('localhost', '15818787099', 'Ab123456789')
    }
    const {siteList} = await chrome.storage.local.get(['siteList']);
    const {bgColorObject} = await chrome.storage.local.get(['bgColorObject'])

    for (const item of siteList) {

        if (item.site !== host) {
            continue
        }

        autoCompleteLogin(item.site, '15818787099', 'Ab123456789')
        const bgo = bgColorObject[item.target]
        let bc = bgo?.boxColor || '#FF00007F'
        let bgc = bgo?.badgeColor || '#FF0000CC'
        let txt = bgo?.text || '生产'


        htmlDivElement.setAttribute('id', 'ontextflag')
        htmlDivElement.setAttribute('style', 'width: 100vw;height: 100vh;border: 6px solid transparent;box-sizing: border-box;position: fixed;top: 0;left: 0;z-index: 999999999;pointer-events: none;')
        htmlDivElement.style.borderColor = bc
        document.body?.appendChild(htmlDivElement);

        let subHtmlDivElement = document.createElement('div');
        subHtmlDivElement.setAttribute('id', 'ontextflaghander')
        subHtmlDivElement.setAttribute('draggable', 'true')
        subHtmlDivElement.setAttribute('style', ' width: 40px;height: 40px;background-color: red;border-radius: 50%;position: absolute;top: 30px;right: 30px;line-height: 40px;text-align: center;color: white;cursor: move;pointer-events: all;user-select: none;font-size: 14px;')
        htmlDivElement.appendChild(subHtmlDivElement);


        if (!subHtmlDivElement) return
        subHtmlDivElement.innerText = txt
        subHtmlDivElement.style.backgroundColor = bgc

        subHtmlDivElement.ondrag = (args) => {
            const {x, y} = args
            subHtmlDivElement.style.display = 'none'
            subHtmlDivElement.style.top = y - 20 + 'px'
            subHtmlDivElement.style.left = x - 20 + 'px'

        }


        subHtmlDivElement.ondragend = async (args) => {
            const {x, y} = args
            let ax = x, ay = y
            subHtmlDivElement.style.display = 'unset'
            let ofw = document.body.offsetWidth,
                ofh = document.body.offsetHeight

            if (x >= ofw - 46) ax = ofw - 46

            if (x <= 0) ax = 6

            if (y > ofh - 46) ay = ofh - 46

            if (y <= 0) ay = 6


            subHtmlDivElement.style.top = ay + 'px'
            subHtmlDivElement.style.left = ax + 'px'

            // localStorage.setItem('flagHostListPosition', JSON.stringify([ax, ay]))
            await chrome.storage.local.set({'flagHostListPosition': [ax, ay]})
        }
    }


    chrome.storage.local.get(['flagHostListPosition'], (pos) => {

        if (Object.values(pos).length && pos?.flagHostListPosition) {

            let [x, y] = pos.flagHostListPosition
            let ax = x, ay = y
            const ontextflaghander = document.getElementById('ontextflaghander')
            if (ontextflaghander && x && y) {
                let ofw = document.body.offsetWidth,
                    ofh = document.body.offsetHeight

                if (x >= ofw - 46) ax = ofw - 46

                if (x <= 0) ax = 6

                if (y > ofh - 46) ay = ofh - 46

                if (y <= 0) ay = 6

                ontextflaghander.style.top = ay + 'px'
                ontextflaghander.style.left = ax + 'px'
            }
        }
    })
}

function injectToolJS() {
    let temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    temp.src = chrome.runtime.getURL('js/tools.js');
    temp.onload = function () {
        this.parentNode?.removeChild(this);
    };
    document.head.appendChild(temp);
    chrome.runtime.sendMessage(null, 'initAction', {}, async function (e, c, b) {
        await injectBox()
    });
}

/**
 * 自动填充用户名密码
 * @param site
 * @param account
 * @param passwd
 */
function autoCompleteLogin(site, account, passwd) {
    if ((site === location.hostname) && /\/login/gi.test(location.pathname)) {

        const username = document.querySelector('input[name="username"]')
        const password = document.querySelector('input[name="password"]')
        if (username && password) {
            username.value = account
            username.dispatchEvent(new Event('input'))
            password.value = passwd
            password.dispatchEvent(new Event('input'))
        }

    }

}

injectToolJS()

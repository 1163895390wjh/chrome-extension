document.onreadystatechange = async () => {
    if (document.readyState === "complete") {
        const siteList = [
            {
                "badgeColor": "",
                "boxColor": "",
                "default": true,
                "site": "saas.ibtool.cn",
                "target": "pro",
                "text": ""
            },
            {
                "badgeColor": "",
                "boxColor": "",
                "default": true,
                "site": "client.ibtool.cn",
                "target": "pro",
                "text": ""
            },
            {
                "badgeColor": "",
                "boxColor": "",
                "default": true,
                "site": "saas.dev.ibtool.cn",
                "target": "dev",
                "text": ""
            },
            {
                "badgeColor": "",
                "boxColor": "",
                "default": true,
                "site": "saas.sit.ibtool.cn",
                "target": "sit",
                "text": ""
            },
            {
                "badgeColor": "",
                "boxColor": "",
                "default": true,
                "site": "saas.client.dev.ibtool.cn",
                "target": "dev",
                "text": ""
            },
            {
                "badgeColor": "",
                "boxColor": "",
                "default": true,
                "site": "saas.client.sit.ibtool.cn",
                "target": "sit",
                "text": ""
            }
        ]
        // const {siteList} = await chrome.storage.local.get(['siteList'])
        // const {bgColorObject} = await chrome.storage.local.get(['bgColorObject'])
        siteList.forEach(item => {
            const el = document.querySelector('#content .tr:last-child')
            let ele = document.createElement('DIV')
            ele.setAttribute('class', 'tr')
            ele.setAttribute('class', 'context')
            ele.innerHTML = `
                            <span class="td col1">${item.site}</span>
                            <span class="td col2">${item.target}</span>
                            <span class="td col3">${item.default}</span>
                            <span class="td col4">${item.boxColor}</span>
                            <span class="td col5">${item.badgeColor}</span>
                            <span class="td col6">${item.text}</span>
                          `
            el?.insertAdjacentHTML(ele)

        })

    }
}

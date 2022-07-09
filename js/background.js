function initData(){
    chrome.storage.local.get(['bgColorObject'], async (result) => {
        if (!Object.values(result).length) {
            let bgColorObject = {
                dev: {boxColor: '#00FF883A', badgeColor: '#00FF00CC', text: 'DEV'},
                sit: {boxColor:  '#5900FF3E', badgeColor: '#5900FFCC', text: 'SIT'},
                uat: {boxColor:  '#5900FF3E', badgeColor: '#5900FFCC', text: 'UAT'},
                pro: {boxColor: '#FF00007F', badgeColor: '#FF0000CC', text: 'PROD'}
            }
            await chrome.storage.local.set({bgColorObject});
        }
    });

    chrome.storage.local.get(['siteList'], async (result) => {
        if (!Object.values(result).length) {
            console.count('siteList')
            let siteList = [
                {site: 'saas.ibtool.cn', target: 'pro', default:true,boxColor:'', badgeColor: '',text: ''},
                {site: 'client.ibtool.cn', target: 'pro', default:true,boxColor:'', badgeColor: '',text: ''},
                {site: 'saas.dev.ibtool.cn', target: 'dev', default:true,boxColor:'', badgeColor: '',text: ''},
                {site: 'saas.sit.ibtool.cn', target: 'sit', default:true,boxColor:'', badgeColor: '',text: ''},
                {site: 'saas.client.dev.ibtool.cn', target: 'dev', default:true,boxColor:'', badgeColor: '',text: ''},
                {site: 'saas.client.sit.ibtool.cn', target: 'sit', default:true,boxColor:'', badgeColor: '',text: ''},
            ]
            await chrome.storage.local.set({siteList});
        }
    });
}


chrome.runtime.onInstalled.addListener(function (object) {
    if (object.reason === "install") {
       initData()
    }
});


chrome.runtime.onUpdateAvailable.addListener(function (object) {
    console.log('插件有新的版本了')
})

chrome.runtime.onMessage.addListener(function (event, _, sendResponse) {
    // console.log(msg, _, sendResponse)
    switch (event) {
        case 'initAction':
            initHandle(_, sendResponse)
            break
    }
});


function initHandle(_, sendResponse) {
    // console.log(_)
    initData()
    sendResponse()

}


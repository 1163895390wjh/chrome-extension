chrome.runtime.onMessage.addListener(function (event, _, sendResponse) {
    // console.log(msg, _, sendResponse)
    switch (event) {
        case 'initAction':
            initHandle( _, sendResponse)
            break
    }
});




function initHandle( _, sendResponse){
    // console.log(_)

    sendResponse()

}


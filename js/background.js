chrome.runtime.onMessage.addListener(function (msg, _, sendResponse) {
    console.log(msg, _, sendResponse)
    const {event} = msg
    switch (event) {
        case 'initAction':
            initHandle( _, sendResponse)
            break
    }
});


function initHandle( _, sendResponse){
    console.log(_)
    sendResponse()
}

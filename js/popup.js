document.onreadystatechange = () =>{
    if (document.readyState === "complete"){
        document.querySelector('.ext-box')?.addEventListener('click', function (e) {

            const id = getSelection()?.anchorNode?.parentNode?.id
            switch (id) {
                case 'home':
                    chrome.tabs.create({ url: "https://1163895390wjh.github.io/martin/"})
                    break
                case 'time':
                    chrome.tabs.create({ url: "pages/clock.html"})
                    break
                case 'date':
                    alert('date')
                    break
                case 'setting':
                    chrome.tabs.create({ url: "pages/settings.html"})
                    break
                case 'notice':
                    alert('notice')
                    break
                case 'about':
                    alert('about')
                    break
            }
        })
        document.querySelector('#addItem')?.addEventListener('click',function () {
            alert('好尴尬，我还没做呢')
        })
        document.querySelector('#saveItem')?.addEventListener('click',function () {
            alert('好尴尬，我还没做呢')
        })
    }
}

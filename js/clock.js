document.onreadystatechange = () =>{
    if (document.readyState === "complete"){
        const deg = 6;

        const hr = document.querySelector('#hr')
        const mn = document.querySelector('#mn')
        const sc = document.querySelector('#sc')

        let day,
            hh,
            mm,
            ss
        setInterval(() => {
            day = new Date()
            hh = day.getHours() * 30;
            mm = day.getMinutes() * deg
            ss = day.getSeconds() * deg
            hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`
            mn.style.transform = `rotateZ(${mm}deg)`
            sc.style.transform = `rotateZ(${ss}deg)`
        }, 50);
    }
}

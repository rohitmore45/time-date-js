function updateclock(){
        const c1 = document.getElementById("clock")
        const time = new Date().toLocaleTimeString()
        c1.textContent=time

        const dt = document.getElementById("date")
        const date = new Date().toLocaleDateString()
        dt.textContent=date

        const dy = document.getElementById("day")
        const weekday = ["Sunday","Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"]
        const d = new Date()
        const day = weekday[d.getDay()];
        dy.textContent=day

}
setInterval(updateclock,1000)
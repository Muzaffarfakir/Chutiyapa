let d = document.getElementById("d");
window.addEventListener("load", (e) => {
  for (let i = 0; i < 30; i++) {
    d.innerHTML += `  <frameset rows="${i}%">
      <iframe src="https://factmuz.blogspot.com/?m=1"></iframe>
  
    </frameset>`
  }

})
setInterval(()=>{
  window.location.reload(true)

},60000)

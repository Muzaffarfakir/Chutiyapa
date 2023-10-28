let d = document.getElementById("d");
window.addEventListener("load", (e) => {
  for (let i = 0; i < 40; i++) {
    d.innerHTML += `  <frameset rows="${i}%">
      <iframe src="https://adsweb-6zlx.onrender.com/"></iframe>
  
    </frameset>`
  }

})
setInterval(()=>{
  window.location.reload(true)

},60000)

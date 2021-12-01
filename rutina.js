function fijarHora() { 
 const fecha = new Date(); 
 let cadena = fecha.getHours() + ':' + 
fecha.getMinutes() + ':' + fecha.getSeconds(); 
 fecha.
 document.getElementById('hora').innerText = 
cadena; 
} 
window.addEventListener( 
 'load', 
 setInterval(() => fijarHora(), 1000), 
 false); 
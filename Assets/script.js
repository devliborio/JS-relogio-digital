const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dataHoje = new Date();
    
    let hr = dataHoje.getHours();
    let min = dataHoje.getMinutes();
    let sec = dataHoje.getSeconds();

    if (hr < 10) hr = '0' + hr; //se hora for menor que 10 hrs então coloque um zero na frente.

    if (min < 10) min = '0' + min; //se minutos for menor que 10 min então coloque um zero na frente.

    if (sec < 10) sec = '0' + sec; //se segundo for menor que 10 seg então coloque um zero na frente.

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
})
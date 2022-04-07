const hora = document.querySelector ('#horas')
const minuto = document.querySelector ('#minutos')
const segundo = document.querySelector ('#segundos')
const color = document.querySelector ('.main-container')

const relogio = setInterval (function time (){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    hora.textContent = hr;
    minuto.textContent = min;
    segundo.textContent = seg;

    if (hr >= 00) color.style.background = 'linear-gradient(170deg, rgb(233, 161, 28), rgb(241, 222, 134))'
    if (hr >= 12) color.style.background = 'linear-gradient(170deg, rgb(28, 141, 233), rgb(191, 208, 255))'
    if (hr >= 18) color.style.background = 'linear-gradient(170deg, rgb(226, 20, 65), rgb(236, 106, 106))'
})

const sled = document.querySelector('.slider_link');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const sledinfo = document.querySelectorAll('.slider_info');
let oiu = 0;

sled.style.width = `${sledinfo.length*100}%`
right.addEventListener('click', () => {
    oiu += 1;
    if (oiu >= sledinfo.length ) {
        oiu = 0
    }
    sled.style.left = -oiu + `00%`
})
left.addEventListener('click', () => {
    oiu -= 1;
    if (oiu < 0 ) {
        oiu = sledinfo.length-1
    }
    sled.style.left = -oiu + `00%`
})
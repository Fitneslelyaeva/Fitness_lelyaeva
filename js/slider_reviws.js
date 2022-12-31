const sleddd = document.querySelector('.reviws_slider_link');
const lefttt = document.querySelector('.lefttt');
const righttt = document.querySelector('.righttt');
const sledinfoyy = document.querySelectorAll('.reviws_slider_info');
let oioo = 0;

sleddd.style.width = `${sledinfoyy.length*100}%`
righttt.addEventListener('click', () => {
    oioo += 1;
    if (oioo >= sledinfoyy.length ) {
        oioo = 0
    }
    sleddd.style.left = -oioo + `00%`
})
lefttt.addEventListener('click', () => {
    oioo -= 1;
    if (oioo < 0 ) {
        oioo = sledinfoyy.length-1
    }
    sleddd.style.left = -oioo + `00%`
})
const sledd = document.querySelector('.result_slider_link');
const leftt = document.querySelector('.leftt');
const rightt = document.querySelector('.rightt');
const sledinfoy = document.querySelectorAll('.result_slider_info');
let oio = 0;

sledd.style.width = `${sledinfoy.length*100}%`
rightt.addEventListener('click', () => {
    oio += 1;
    if (oio >= sledinfoy.length ) {
        oio = 0
    }
    sledd.style.left = -oio + `00%`
})
leftt.addEventListener('click', () => {
    oio -= 1;
    if (oio < 0 ) {
        oio = sledinfoy.length-1
    }
    sledd.style.left = -oio + `00%`
})
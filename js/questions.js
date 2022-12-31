const btn = document.querySelector(".questions_btn1");
const sre = document.querySelector(".questions_text1");
const btn1 = document.querySelector(".questions_btn2");
const sre1 = document.querySelector(".questions_text2");
const btn2 = document.querySelector(".questions_btn3");
const sre2 = document.querySelector(".questions_text3");
const btn3 = document.querySelector(".questions_btn4");
const sre3 = document.querySelector(".questions_text4");

btn.addEventListener("click", () => {
  sre.classList.toggle("h1001");
  sre1.classList.remove("h1002");
  sre2.classList.remove("h1003");
  sre3.classList.remove("h1004");
});
btn1.addEventListener("click", () => {
  sre1.classList.toggle("h1002");
  sre.classList.remove("h1001");
  sre2.classList.remove("h1003");
  sre3.classList.remove("h1004");
});
btn2.addEventListener("click", () => {
  sre2.classList.toggle("h1003");
  sre.classList.remove("h1001");
  sre1.classList.remove("h1002");
  sre3.classList.remove("h1004");
});
btn3.addEventListener("click", () => {
  sre3.classList.toggle("h1004");
  sre.classList.remove("h1001");
  sre1.classList.remove("h1002");
  sre2.classList.remove("h1003");
});

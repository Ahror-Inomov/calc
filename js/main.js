let elForm = document.querySelector(".form");
let elNumber1 = document.querySelector(".num1");
let elNumber2 = document.querySelector(".num2");
let elAdd = document.querySelector(".add");
let elMinus = document.querySelector(".minus");
let elIncrease = document.querySelector(".incr");
let elDivorce = document.querySelector(".divorce");
let elText = document.querySelector(".subtext");


let name1 = elNumber1.value - 0;
let name2 = elNumber2.value - 0;

elMinus.addEventListener("click", function(evt) {
   evt.preventDefault();
   let name1 = elNumber1.value - 0;
   let name2 = elNumber2.value - 0;
   elText.textContent = (name1 - name2).toFixed(2);
})

elAdd.addEventListener("click", function(evt) {
   evt.preventDefault();
   let name1 = elNumber1.value - 0;
   let name2 = elNumber2.value - 0;
   elText.textContent = (name1 + name2).toFixed(2);
})

elIncrease.addEventListener("click", function(evt) {
   evt.preventDefault();
   let name1 = elNumber1.value - 0;
   let name2 = elNumber2.value - 0;
   elText.textContent = (name1 * name2).toFixed(2);

})

elDivorce.addEventListener("click", function(evt) {
   evt.preventDefault();
   let name1 = elNumber1.value - 0;
   let name2 = elNumber2.value - 0;
   elText.textContent = (name1 / name2).toFixed(2);
})

  
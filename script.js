let input = document.querySelector(".input__text");
let button = document.querySelector("button");
let main__content = document.querySelector(".main__content");
let form = document.querySelector("form");
let bottom = document.querySelector(".main__bottom");
let button__delete_all = document.querySelector(".button__delete_all");
let arrLS = [];

function createItem(el) {
  main__content.classList.add("main__content_on");
  bottom.classList.add("main__bottom_on");
  let main__text = document.createElement("div");
  main__text.className = "main__text";
  main__text.innerHTML = `
  <style>
  form::after {
  z-index: 1;
  content: "C C C C C";
  font-family: "Comfortaa", sans-serif;
  font-size: 30px;
  position: absolute;
  left: 5%;
  top: 89%;
  color: #676868;
  text-shadow: 1px 1px 2px rgb(176, 164, 132);
}
 form::before {
  z-index: 1;
  content: "C C C C C";
  font-family: "Comfortaa", sans-serif;
  font-size: 30px;
  position: absolute;
  left: 65%;
  top: 89%;
  color: #676868;
  text-shadow: 1px 1px 2px rgb(176, 164, 132);
}
.bottom__content::after{
  content: "C C C C C";
  font-family: "Comfortaa", sans-serif;
  font-size: 30px;
  position: absolute;
  top: -52px;
  color: #676868;
  text-shadow: 1px 1px 2px rgb(176, 164, 132);
}
.bottom__content::before {
  z-index:1; 
  content: "C C C C C";
  font-family: "Comfortaa", sans-serif;
  font-size: 30px;
  position: absolute;
  top: -52px;
  right: 5%;
  color: #676868;
  text-shadow: 1px 1px 2px rgb(176, 164, 132);
}
 </style>
<div class="main__text_left">
    <input class="checkbox" type="checkbox" />
     <p class="p">${el}</p>
</div>
<p class="p__close">❌</p>
  `;
  main__content.append(main__text);
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (input.value != "") {
    let obj = { isDone: "не сделано", task: input.value };
    arrLS.push(obj);
    localStorage.setItem("ToDoList", JSON.stringify(arrLS));
    createItem(input.value);
  }
});
if (localStorage.getItem("ToDoList") != null) {
  arrLS = JSON.parse(localStorage.getItem("ToDoList"));
  arrLS.forEach((el) => {
    createItem(el.task);
  });
}
button__delete_all.addEventListener("click", function () {
  localStorage.clear();
  main__content.classList.remove("main__content_on");
  bottom.classList.remove("main__bottom_on");
});

// перезагрузка страницы
// взять сохраненное значение ключа
// перевести его обратно в массив
// проверить что в массиве корректые данные
// перебрать массив и отрисовать каждый объект

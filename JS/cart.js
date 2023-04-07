// находим элементы на странице
const btnMinus = document.querySelector("[data-action='minus']");
const btnPlus = document.querySelector("[data-action='plus']");
const counter = document.querySelector("[data-counter]");

//отслеживаем кнопку минус
btnMinus.addEventListener('click', function(){
	
	//проверяем чтобы число было больше 1
	if (parseInt(counter.innerText) > 1){
		
	//изменяем чинло на его -1	
	counter.innerText = --counter.innerText;
	}
});

//отслеживаем кнопку минус
btnPlus.addEventListener('click', function(){
	
	//изменяем чинло на его +1
	counter.innerText = ++counter.innerText;
});
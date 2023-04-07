
window.addEventListener('click', function(event){
	let counter;
	
	if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
		const mainCounter = event.target.closest('.main-counter');
		
		
		counter = mainCounter.querySelector('[data-counter]');
		
	}
	
	if (event.target.dataset.action === 'plus'){
		
		//изменяем чинло на его +1
		counter.innerText = ++counter.innerText;
		
	}
	
	
	if (event.target.dataset.action === 'minus'){
		
		
		//проверяем чтобы число было больше 1
		if (parseInt(counter.innerText) > 1){
			//изменяем чинло на его -1	
			counter.innerText = --counter.innerText;
			
		} else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
			
			event.target.closest('.cartBasket').remove();
			
			toggleCartStatus();
			
			CalcCartPriceAndDelivery()
		}
}

	if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
		
		CalcCartPriceAndDelivery();
	}
	
	
	
	});

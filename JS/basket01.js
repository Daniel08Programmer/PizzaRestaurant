
const cartWrapper = document.querySelector('.cart-wrapper')

window.addEventListener('click', function(event){
	
	if (event.target.hasAttribute('data-basket')){
		
		const cart = event.target.closest('.cart');
		
	
		const productInfo = {
			id: cart.dataset.id,
			imgSrc: cart.querySelector('.Pizzas').getAttribute('src'),
			title: cart.querySelector('.NamePiz').innerText,
			weight: cart.querySelector('.weight').innerText,
			dia: cart.querySelector('.dia').innerText,
			price: cart.querySelector('.price').innerText,
			counter: cart.querySelector('[data-counter]').innerText,
		};
		
	
	const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
	
	
	if (itemInCart) {
		
		const counterElement = itemInCart.querySelector('[data-counter]');
		
		counterElement.innerText = parseInt(counterElement.innerText)  +  parseInt(productInfo.counter);
		
	}else{
	
	 const cartItemHTML = `
					
					<div data-id="${productInfo.id}" data-cart-basket class="cartBasket" >
						<img class="PizzasBasket" src="${productInfo.imgSrc}">
							<div class="NamePizBas">${productInfo.title}</div> 
						<div class="ItemInfo">
							<span class="diaBas">${productInfo.dia}</span> / <div class="weightBas">${productInfo.weight}</div>
							<div class="priceBas">${productInfo.price}</div>
						</div>
						<div class="main-counter">
						<div class="CounterInBas">
							<button height="20px" id="NoumberOne" class="button" data-action="minus">-</button> 
							<div class="counter" data-counter>${productInfo.counter}</div>
							<button id="NoumberTwo" class="button" data-action="plus">+</button>
						</div>
						</div>
					</div> 
				
				`;
				
	cartWrapper.insertAdjacentHTML ('beforeend', cartItemHTML );	
	
	}
	
	 cart.querySelector('[data-counter]').innerText = '1';
	 
	}
	
	toggleCartStatus();
	
	CalcCartPriceAndDelivery();
	
});





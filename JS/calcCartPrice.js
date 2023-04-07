
function CalcCartPriceAndDelivery(){
	
	const cartWrapper = document.querySelector('.cart-wrapper');
	const cartItems = document.querySelectorAll('.cartBasket');
	const totalPriceEl = document.querySelector('.result');
	const deliveryPrice = document.querySelector('[data-delivery-price]');
	const cartDelivery = document.querySelector('[data-cart-delivery]');
	
	


	let totalPrice = 0;
 	
	cartItems.forEach(function (item){
		
		
		const amountEl = item.querySelector('[data-counter]');
		const priceEl = item.querySelector('.priceBas');
		
		const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
		
		totalPrice += currentPrice;
		
	});
	
	totalPriceEl.innerText = totalPrice;

	if (totalPrice > 0){
		cartDelivery.classList.remove('invisible'); 
	}else{
		cartDelivery.classList.add('invisible');
		
	}
	

	if (totalPrice < 750 ) {
		deliveryPrice.classList.remove('delPri');
		deliveryPrice.innerText = '200 ₽';
	} else {
		deliveryPrice.classList.add('delPri');
		deliveryPrice.innerText = 'бесплатно';
	}
	
}
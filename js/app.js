
function updateCartNumber(isValueIncreasing){
    const cartInput = document.getElementById('cart-number');
    let cartValue = cartInput.value;
    
    if(isValueIncreasing == true){
        cartValue = parseInt(cartValue) + 1;
    }
    else if(cartValue > 0){
        cartValue = parseInt(cartValue) - 1;
    }
    cartInput.value = cartValue;

    // update cart price
    const cartPrice = document.getElementById('cart-price');
    cartPrice.innerText = cartValue * 89;
}

document.getElementById('button-plus').addEventListener('click', function(){
    updateCartNumber(true);
});

document.getElementById('button-minus').addEventListener('click', function(){
    updateCartNumber(false);
});

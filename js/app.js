function updateCartNumber(product, price, isValueIncreasing){
    const cartInput = document.getElementById(product + '-number');
    let cartValue = cartInput.value;
    
    if(isValueIncreasing == true){
        cartValue = parseInt(cartValue) + 1;
    }
    else if(cartValue > 0){
        cartValue = parseInt(cartValue) - 1;
    }
    cartInput.value = cartValue;

    // update cart price
    const cartPrice = document.getElementById(product + '-price');
    cartPrice.innerText = cartValue * price;
}

// handle phone price increase and decrease for phone!
document.getElementById('button-plus').addEventListener('click', function(){
    updateCartNumber('cart', 890, true);
});

document.getElementById('button-minus').addEventListener('click', function(){
    updateCartNumber('cart', 890, false);
});

// handle increase decrease for case!
document.getElementById('case-minus').addEventListener('click', function(){
    updateCartNumber('case', 59, false);
});

document.getElementById('case-plus').addEventListener('click', function(){
    updateCartNumber('case', 59, true);
});






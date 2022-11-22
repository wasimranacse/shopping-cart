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
    // calculate total
    calculateTotal();
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productInputValue = parseFloat(productInput.value);
    return productInputValue;
}
function calculateTotal(){
   const phoneInputTotal = getInputValue('cart') * 890;
   const caseInputTotal = getInputValue('case') * 59;
   const subTotal = phoneInputTotal + caseInputTotal;
   const taxAmount = subTotal / 10;
   const toatlPrice = subTotal + taxAmount;

   // update total on the html
   document.getElementById('sub-total').innerText = subTotal;
   document.getElementById('tax-amount').innerText = taxAmount;
   document.getElementById('total-price').innerText = toatlPrice;
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






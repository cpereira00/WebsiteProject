if(document.readyState=='loading'){
  document.addEventListener('DOMContentLoaded',ready)
}else{
  ready()
}
function ready(){
var removeCartItemButtons = document.getElementsByClassName("btn-danger")
  for (var i=0; i<removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
  }

  var quantityInputs=document.getElementsByClassName("cart-quantity-input")
  for (var i=0; i<quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
  }

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchaseClicked)

}
  function purchaseClicked(){
    alert('Thank you for your purchase! Your Items will arrive shortly.')
    var cartItems=document.getElementsByClassName('cart-items')[0]
    while(cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
  }

  function removeCartItem(event){
    var buttonClicked=event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
  }
function quantityChanged(event){
  var input=event.target
  if(isNaN(input.value)|| input.value<=0){
    input.value =1
  }
  updateCartTotal()
  updateQSTTotal()
  updateGSTTotal()
}
//QST update calculation function
function updateQSTTotal(){
  var cartItemContainer = document.getElementsByClassName("cart-items")[0]
var cartRows= cartItemContainer.getElementsByClassName("cart-row")
var total=0
for (var i=0; i< cartRows.length; i++) {
  var cartRow=cartRows[i]
  var priceElement = cartRow.getElementsByClassName('cart-price')[0]
  var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
  [0]
    var price = parseFloat(priceElement.innerText.replace('$', ''))
    var quantity = quantityElement.value
    total=total+(.0997*(price*quantity))
  }
total=Math.round(total*100)/100
  document.getElementsByClassName("cart-QST-price")[0].innerText='$'+ total
}
//gst update calculation function
function updateGSTTotal(){
  var cartItemContainer = document.getElementsByClassName("cart-items")[0]
var cartRows= cartItemContainer.getElementsByClassName("cart-row")
var total=0
for (var i=0; i< cartRows.length; i++) {
  var cartRow=cartRows[i]
  var priceElement = cartRow.getElementsByClassName('cart-price')[0]
  var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
  [0]
    var price = parseFloat(priceElement.innerText.replace('$', ''))
    var quantity = quantityElement.value
    total=total+(.05*(price*quantity))
  }
total=Math.round(total*100)/100
  document.getElementsByClassName("cart-GST-price")[0].innerText='$'+ total

}
//total price function
function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0]
var cartRows= cartItemContainer.getElementsByClassName("cart-row")
var total=0
for (var i=0; i< cartRows.length; i++) {
  var cartRow=cartRows[i]
  var priceElement = cartRow.getElementsByClassName('cart-price')[0]
  var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
  [0]
    var price = parseFloat(priceElement.innerText.replace('$', ''))
    var quantity = quantityElement.value
    total=total+(price * quantity)+(.05*(price*quantity))+(.0997*(price*quantity))
  }
total=Math.round(total*100)/100
  document.getElementsByClassName("cart-total-price")[0].innerText='$'+ total
}

function calc(a) {
  var q = document.getElementById('quantity').value;
  var p = document.getElementById('itemPrice').innerHTML;
  var t = q * p;
  var tr = t.toFixed(2);
  document.getElementById('totalPrice').innerHTML = '$' + tr;
  sessionStorage.setItem('currentQ' + a, q);
}

function setValues(a) {
  var q = document.getElementById('quantity');
  q.value = sessionStorage.getItem('currentQ' + a);
  calc();
}

function myFunction() {
  var dots = document.getElementById('dots');
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('myBtn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read more';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read less';
    moreText.style.display = 'inline';
  }
}

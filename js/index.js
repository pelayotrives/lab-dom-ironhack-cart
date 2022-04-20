// ITERATION 1

function updateSubtotal(product) {
  let priceDOM = product.querySelector('.price span');
  
  let quantityDOM = product.querySelector('.quantity input');
  let quantity = quantityDOM.value;
 
  let priceTotal = priceDOM.innerHTML * quantity;
 
  let subTotalDOM = product.querySelector('.subtotal span');
  subTotalDOM.innerText = priceTotal;

  return priceTotal;
};

function calculateAll() {

  // ITERATION 2

  let variosProductos = document.querySelectorAll('.product');
  let contenedor = 0;

  for (let elementoProducto of variosProductos) {
    updateSubtotal(elementoProducto);
    let funcionTotalSingle = updateSubtotal(elementoProducto);  
    contenedor += funcionTotalSingle;
  }

  // ITERATION 3
  let totalValueDOM = document.querySelector('#total-value span');
  totalValueDOM.innerText = contenedor;
  console.log(contenedor);
  return contenedor;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
  calculateAll().remove;
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  let allButtons = document.querySelectorAll(".btn-remove");
  allButtons.forEach( (eachButton) => {
    eachButton.addEventListener("click", removeProduct);
  });
  //... your code goes here
});

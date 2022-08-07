const control = document.querySelectorAll(".product__quantity-controls"); 

for (let i = 0; i < control.length; i++) {
  const currentControl = control[i];
  const controlDec = currentControl.querySelector(".product__quantity-control_dec"); 
  const controlValue = currentControl.querySelector(".product__quantity-value"); 
  const controlInc = currentControl.querySelector(".product__quantity-control_inc");
  
  controlInc.addEventListener("click", (e) => {
    controlValue.textContent++;
  })
  controlDec.addEventListener("click", (e) => {
    if (controlValue.textContent > 1) {
      controlValue.textContent--;
    } else {
      controlValue = 1;
    }
  })
}

const cart = document.querySelector(".cart__products");

const addProduct = document.querySelectorAll(".product__add")
for (let b = 0; b < control.length; b++) {
  const currentAdd = addProduct[b];
  currentAdd.addEventListener("click", (e) => {
    const product = currentAdd.closest('.product');
    const id = product.dataset.id;
    const img = product.querySelector('.product__image').src;
    const productValue =  product.querySelector('.product__quantity-value').textContent;
    const productInCart = cart.querySelector(`[data-id="${id}"]`);
    if (productInCart) {
      const currentValue = productInCart.querySelector(".cart__product-count");
      currentValue.innerText = parseInt(productValue) + parseInt(currentValue.textContent);
    } else {
      cart.insertAdjacentHTML("beforeend", 
      `<div class="cart__product" data-id="${id}">
      <img class="cart__product-image" src="${img}">
      <div class="cart__product-count">${productValue}</div>
      </div>`)
    }
  })
}


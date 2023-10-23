// A cart array

let cartData = [];

// product object

let productData = [
    // multiple products
    {
        id: 1,
        name: "Product 1",
        price: 100.0,
    },
    {
        id: 2,
        name: "Product 2",
        price: 120.0,
    },
    {
        id: 3,
        name: "Product 3",
        price: 130.0,
    },
    {
        id: 4,
        name: "Product 4",
        price: 140.0,
    },
    {
        id: 5,
        name: "Product 5",
        price: 150.0,
    },
    {
        id: 6,
        name: "Product 6",
        price: 160.0,
    },
];

/** Function list
 * ATC
 * Remove from cart
 * calcPrice
 * checkout
 * sortPrice
 * displayProducts()
 * */

function displayProducts() {
    const productList = document.querySelector(".products-container");

    // populate the product list from dummy data
    let productHtml = "";
    productData.forEach((product) => {
        productHtml = productHtml + ` <div class="product bg-white">
                            <p class="product-name">${product.name}</p>
                            <p class="product-price">${product.price}</p>
                            <button class="add-to-cart" data-id=${product.id}> Add to cart </button>
                        </div>`;
    });

    productList.innerHTML = productHtml;
}

displayProducts();
// Add to cart function 

const buttonList = document.querySelectorAll('.add-to-cart');

buttonList.forEach(atc => {
    atc.addEventListener('click', (event) => {
        const productId = parseInt(event.target.dataset.id)
        // find if array already have that product then just increase qty

        const product = productData.find(product => product.id === productId);
        // Atc function 
        addToCart(product);

    })
});

// Atc function definition 
function addToCart(product) {
    const existingProduct = cartData.find(cartItem => cartItem.id === product.id);
    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cartData.push({ ...product, quantity: 1 })
    }
    // display  cart 

    displayCart();

}

// calcTotalPrice() definition

function calcTotalPrice() {
    return cartData.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
}



function displayCart() {
    const productList = document.querySelector(".product-list");
    const totalPrice = document.getElementById('total-price');
    // clear product - list in cart
    productList.innerHTML = '';


    // populate products in cart - name - price - remove button -> id  - qty

    let productHtml = '';

    cartData.forEach(cartItem => {

        productHtml = productHtml + ` <div class="product bg-white">
        
        <p class="product-name">${cartItem.name}</p>
        <p class="product-price">${cartItem.price}</p>
        <p class="product-quantity">${cartItem.quantity}</p>
        <button class="remove-from-cart" data-id=${cartItem.id}> Remove</button>
    </div>`;

    })

    productList.innerHTML = productHtml;
    // Update total price
    totalPrice.textContent = calcTotalPrice();


}
function removeFromCart(productId) {
    cartData = cartData.filter(cartItem =>
        cartItem.id !== productId
    )
    displayCart();
}
// remove button event listener 

// const removeButtons = document.querySelectorAll('.remove-from-cart');
// console.log(removeButtons);
// debugger
// removeButtons.forEach(button => {
//     button.addEventListener('click', (event) => {
//         const productId = parseInt(event.target.dataset.id);
//         removeFromCart(productId);
//     })
// })

document.addEventListener('click', event => {
    if (event.target.classList.contains('remove-from-cart')) {
        const productId = parseInt(event.target.dataset.id);
        removeFromCart(productId);
    }
})
// handle checkout

function handleCheckout() {
    alert(`Checkout successful with cart value: ${calcTotalPrice()}`)
    cartData = [];
    displayCart();
}

// Display initial cart

displayCart();

// cosmetics for mouse 

document.body.onmousemove = function (e) {
    this.style.setProperty("--mouse-x", `${e.clientX}px`);
    this.style.setProperty("--mouse-y", `${e.clientY}px`);
};

// // web.js

// document.addEventListener("DOMContentLoaded", function() {
//     // Function to load page content dynamically
//     function loadPage(pageUrl) {
//         fetch(pageUrl)
//             .then(response => response.text())
//             .then(html => {
//                 document.body.innerHTML = html;
//                 initializePage();
//             })
//             .catch(error => console.error("Error loading page:", error));
//     }

//     // Function to initialize page functionality
//     function initializePage() {
//         const addToCartButtons = document.querySelectorAll(".product button");
//         const cartItemsList = document.getElementById("cart-items");
//         const totalPriceDisplay = document.getElementById("total-price");
//         const checkoutBtn = document.getElementById("checkout-btn");
//         let totalPrice = 0;

//         // Function to update cart
//         function updateCart(productName, productPrice) {
//             totalPrice += productPrice;
//             totalPriceDisplay.textContent = totalPrice.toFixed(2);

//             const cartItem = document.createElement("li");
//             cartItem.textContent = productName;
//             cartItemsList.appendChild(cartItem);
//         }

//         // Add event listeners to "Add to Cart" buttons
//         addToCartButtons.forEach(button => {
//             button.addEventListener("click", function() {
//                 const product = button.closest(".product");
//                 const productName = product.querySelector("h2").textContent;
//                 const productPrice = parseFloat(product.querySelector("span").textContent.slice(1));

//                 updateCart(productName, productPrice);
//             });
//         });

//         // Checkout button functionality
//         if (checkoutBtn) {
//             checkoutBtn.addEventListener("click", function() {
//                 alert("Redirecting to checkout page..."); // Replace this with your checkout logic
//             });
//         }

//         // Navigation functionality
//         const navLinks = document.querySelectorAll("nav ul li a");
//         navLinks.forEach(link => {
//             link.addEventListener("click", function(event) {
//                 event.preventDefault(); // Prevent default link behavior
//                 const targetPage = link.getAttribute("href");
//                 loadPage(targetPage);
//             });
//         });
//     }

//     // Initialize page functionality when the DOM is loaded
//     initializePage();
// });
  
// Function to add an item to the cart
function addToCart(itemName, price, buttonId) {
    // Get the cart items stored in local storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add the new item to the cart
    cartItems.push({ name: itemName, price: price });

    // Store the updated cart items back to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Update the button text to indicate that the item was added to the cart
    let button = document.getElementById(buttonId);
    button.textContent = 'Added to Cart';
    button.disabled = true;

    // Redirect to the cart page
    window.location.href = "cart.html";
}

// Function to update the cart display
function updateCartDisplay() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let cartList = document.getElementById('cart-items');
    let totalPrice = 0;

    // Clear the current cart display
    cartList.innerHTML = '';

    // Loop through each item in the cart and add it to the display
    cartItems.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - R${item.price}`;
        cartList.appendChild(li);

        // Update the total price
        totalPrice += parseFloat(item.price);
    });

    // Update the total price display
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Call updateCartDisplay when the page loads to display existing cart items
window.onload = updateCartDisplay;


 // Function to remove an item from the cart
 function removeFromCart(index) {
    // Get the cart items stored in local storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Remove the item at the specified index
    cartItems.splice(index, 1);

    // Store the updated cart items back to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Update the cart display
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let cartList = document.getElementById('cart-items');
    let totalPrice = 0;

    // Clear the current cart display
    cartList.innerHTML = '';

    // Loop through each item in the cart and add it to the display
    cartItems.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - R${item.price}`;
        
        // Add a remove button next to each item
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            removeFromCart(index);
        };

        li.appendChild(removeButton);
        cartList.appendChild(li);

        // Update the total price
        totalPrice += parseFloat(item.price);
    });

    // Update the total price display
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Call updateCartDisplay when the page loads to display existing cart items
window.onload = updateCartDisplay;


// added to  cart
// Function to add an item to the cart
function addToCart(itemName, price, buttonId) {
    // Get the cart items stored in local storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add the new item to the cart
    cartItems.push({ name: itemName, price: price });

    // Store the updated cart items back to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Update the button text to indicate that the item was added to the cart
    let button = document.getElementById(buttonId);
    button.textContent = 'Added to Cart';
    button.disabled = true;

    // Redirect to the cart page
    // window.location.href = "cart.html";
}

//caro



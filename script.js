let cartItems = [];
let cartTotal = 0;

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    cartTotal += price;

    updateCartUI();
}

function toggleCart() {
    var cart = document.getElementById('cart');
    cart.style.display = cart.style.display === 'none' ? 'block' : 'none';
}

function updateCartUI() {
    var cartItemsElement = document.getElementById('cart-items');
    var cartTotalElement = document.getElementById('cart-total');

    // Clear previous items
    cartItemsElement.innerHTML = '';

    // Populate cart items
    cartItems.forEach(item => {
        var listItem = document.createElement('li');
        listItem.textContent = $;item.name} , $$,item.price.toFixed(2),)
        cartItemsElement.appendChild(listItem);
    };

    // Update total
    cartTotalElement.textContent = cartTotal.toFixed(2);

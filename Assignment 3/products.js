document.addEventListener('DOMContentLoaded', function () {
    var addToCartButtons = document.querySelectorAll('.product button');

    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        var product = event.target.closest('.product');
        var productName = product.querySelector('h2').textContent;
        var productPrice = product.querySelector('.price').textContent;

        var cartItems = document.getElementById('cartItems');
        var existingCartItem = cartItems.querySelector(`[data-product="${productName}"]`);

        if (existingCartItem) {
            var quantityElement = existingCartItem.querySelector('.quantity');
            var quantity = parseInt(quantityElement.textContent) + 1;
            quantityElement.textContent = quantity;
        } else {
            var cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.dataset.product = productName;
            cartItem.innerHTML = `
                <p><strong>Product:</strong> ${productName}</p>
                <p><strong>Price:</strong> ${productPrice}</p>
                <p><strong>Quantity:</strong> <span class="quantity">1</span></p>
                <button class="remove-button">Remove</button>
            `;
            cartItems.appendChild(cartItem);
        }

        alert('Product added to cart!');
    }

    document.getElementById('cartItems').addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-button')) {
            var cartItem = event.target.closest('.cart-item');
            var quantityElement = cartItem.querySelector('.quantity');
            var quantity = parseInt(quantityElement.textContent) - 1;

            if (quantity === 0) {
                cartItem.remove();
            } else {
                quantityElement.textContent = quantity;
            }
        }
    });

    document.getElementById('cartItems').addEventListener('mouseover', function (event) {
        if (event.target.classList.contains('remove-button')) {
            event.target.style.backgroundColor = '#ff0000';
        }
    });

    document.getElementById('cartItems').addEventListener('mouseout', function (event) {
        if (event.target.classList.contains('remove-button')) {
            event.target.style.backgroundColor = '';
        }
    });

    var cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.style.margin = '0 auto';
    cartItemsContainer.style.textAlign = 'center';
});

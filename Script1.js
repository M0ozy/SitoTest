

// Funzione per aggiungere un prodotto al carrello
function addToCart(product) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var found = false;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name === product.name) {
            cart[i].quantity += 1;
            found = true;
            break;
        }
    }
    if (!found) {
        product.quantity = 1;
        cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Funzione per visualizzare il carrello
function showCart() {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length > 0) {
        var cartItems = '';
        var total = 0;
        for (var i = 0; i < cart.length; i++) {
            var itemTotal = cart[i].price * cart[i].quantity;
            cartItems += '<div class="cart-item">' +
                '<div class="cart-item-name">' + cart[i].name + '</div>' +
                '<div class="cart-item-quantity">' + cart[i].quantity + '</div>' +
                '<div class="cart-item-price">' + itemTotal.toFixed(2) + '</div>' +
                '</div>';
            total += itemTotal;
        }
        cartItems += '<div class="cart-total">Total: ' + total.toFixed(2) + '</div>';
        document.getElementById('cart').innerHTML = cartItems;
    } else {
        document.getElementById('cart').innerHTML = '<p>Your cart is empty</p>';
    }
    }

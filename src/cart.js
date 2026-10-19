function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cartList = cart, item, number) {
  // не принимает нулевое количество
  if (number <= 0) {
    throw new RangeError('Количество должно быть положительным');
  }

  // не позволяет добавить больше товара, чем есть на складе
  if (item.stock < number) {
    throw new RangeError('Недостаточно товара на складе');
  }

  // увеличивает количество уже добавленного товара
  const exists = cartList.find((cartListItem) => {
    return cartListItem.id === item.id
  })
  
  if(exists) {
    return cartList.map((cartListItem) => {
      if (cartListItem.id === item.id) {
        return {...cartListItem, quantity: cartListItem.quantity + number}
      } else {
        return cartListItem
      }
    })
  }

  // добавляет товар в пустую корзину с указанным количеством    
return [...cartList, { ...item, quantity: number }];
}

function changeQuantity(cart, productID, finalQty) { 
// не принимает нулевое количество
  if (finalQty <= 0) {
    throw new RangeError('не принимает нулевое количество');
  }

// не позволяет указать количество больше остатка
const cartElement = cart.find((cartItem) => {
  return cartItem.id === productID;
})

// оставляет корзину без изменений для отсутствующего товара
if (!cartElement) {
  return cart;
}

if (finalQty > cartElement.stock) {
  throw new RangeError('не позволяет указать количество больше остатка');
}


// меняет количество товара в корзине
  return cart.map((cartItem) => {
    if (cartItem.id === productID) {
      return {...cartItem, quantity: finalQty}
    } else {
      return cartItem
    }
  })
}

function removeFromCart(cart, productId) {
  return cart.filter((cartItem) => cartItem.id !== productId);
}

function calculateCartSubtotal(cart) { 
  return cart.reduce((sum, cartItem) => sum + cartItem.price * cartItem.quantity, 0);
}
function calculateOrderTotal(cart, promocode = '') { 
  const subtotal = calculateCartSubtotal(cart);
  let discount;
  if (promocode === 'SAVE10' && subtotal >= 20000) {
    discount = Math.round(subtotal * 0.1)
  } else {
    discount = 0;
  }
  
  let delivery;
  if (subtotal >= 50000) {
    delivery = 0
  } else {
    delivery = 30000;
  }

  const total = subtotal + delivery - discount
  return {subtotal, discount, delivery, total};
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;

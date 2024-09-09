// Function to add product to the cart
export const addToCart = (product, quantity = 1) => {
  // Get the current cart from local storage (if it exists)
  let cart = JSON.parse(localStorage.getItem("cart")) || {
    items: [],
    billDetails: {
      delivery: 80,
      cartTotal: 0,
      subTotal: 0,
      discount: 0,
      toPay: 0,
    },
  };

  // Check if the product is already in the cart
  const existingItemIndex = cart.items.findIndex(
    (item) => item.product._id === product._id
  );

  if (existingItemIndex >= 0) {
    // If the product exists, update the quantity
    cart.items[existingItemIndex].quantity += quantity;
    cart.items[existingItemIndex].totalPrice += product.price * quantity;
    cart.items[existingItemIndex].totalDiscount +=
      (product.discount || 0) * quantity;
  } else {
    // If the product is not in the cart, add it to the cart
    cart.items.push({
      product: product,
      quantity: quantity,
      totalPrice: product.price * quantity,
      totalDiscount: (product.discount || 0) * quantity,
    });
  }

  // Recalculate bill details
  recalculateBillDetails(cart);

  // Save the updated cart back to local storage
  localStorage.setItem("cart", JSON.stringify(cart));

  console.log("Product added to cart:", cart);
};

// Function to recalculate bill details after any cart changes
const recalculateBillDetails = (cart) => {
  // Recalculate cart totals, discount, and delivery cost
  cart.billDetails.cartTotal = cart.items.reduce(
    (acc, item) => acc + item.totalPrice,
    0
  );
  cart.billDetails.discount = cart.items.reduce(
    (acc, item) => acc + item.totalDiscount,
    0
  );
  cart.billDetails.subTotal =
    cart.billDetails.cartTotal - cart.billDetails.discount;
  cart.billDetails.delivery = cart.billDetails.subTotal >= 999 ? 0 : 80;
  cart.billDetails.toPay =
    cart.billDetails.subTotal + cart.billDetails.delivery;
};

// Function to get the cart from local storage
export const getCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || { items: [] };
  return cart;
};


// Function to remove product from the cart
export const removeFromCart = (productId) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || { items: [] };

  // Filter out the product to be removed
  cart.items = cart.items.filter((item) => item.product._id !== productId);

  // Save the updated cart back to local storage
  localStorage.setItem("cart", JSON.stringify(cart));

  console.log("Product removed from cart:", cart);
};


// Function to clear the entire cart
export const clearCart = () => {
  localStorage.removeItem('cart');
  console.log('Cart cleared');
};
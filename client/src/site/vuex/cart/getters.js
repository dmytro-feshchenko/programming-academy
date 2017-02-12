export const cartProducts = state => {
  return state.cart.map(({ id, quantity }) => {
    const product = state.products.all.find(p => p.id === id);
    return {
      title: product.title,
      price: product.price,
      quantity
    }
  });
}

export const cartCount = state => {
  var totalCount = 0;
  state.cart.added.forEach(({ quantity }) => {
    totalCount += quantity
  });

  return totalCount;
}

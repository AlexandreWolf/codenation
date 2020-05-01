const promotions = ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"];

function getProducts(ids, products) {
  return products.filter((product) => ids.includes(product.id));
}

function getPromotion(filteredProducts) {
  return promotions[listCategories(filteredProducts).length - 1];
}

function getPrice(product, promotionCode) {
  const promo = product.promotions.filter((promotion) =>
    promotion.looks.includes(promotionCode)
  );

  return promo.length === 1 ? promo[0].price : product.regularPrice;
}

function listCategories(filteredProducts) {
  return filteredProducts.reduce((categories, product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }

    return categories;
  }, []);
}

function describeShoppingCart(filteredProducts, promotion) {
  const item = {
    products: [],
    promotion: promotion,
    regularPrice: 0.0,
    totalPrice: 0.0,
    discountValue: 0.0,
    discount: 0.0,
  };

  const results = filteredProducts.reduce((total, product) => {
    total.products.push({ name: product.name, category: product.category });
    total.regularPrice += product.regularPrice;
    total.totalPrice += getPrice(product, promotion);
    return total;
  }, item);

  results.totalPrice = results.totalPrice.toFixed(2);
  results.discountValue = (results.regularPrice - results.totalPrice).toFixed(
    2
  );
  results.discount = `${(
    (results.discountValue * 100) /
    results.regularPrice
  ).toFixed(2)}%`;

  delete results.regularPrice;

  return results;
}

function getShoppingCart(ids, productsList) {
  const filteredProducts = getProducts(ids, productsList);
  const promotion = getPromotion(filteredProducts);
  const shoppingCart = describeShoppingCart(filteredProducts, promotion);

  return shoppingCart;
}

module.exports = { getShoppingCart };

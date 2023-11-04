function formatPrice(price) {
  return Number(price).toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
}

export default formatPrice;

const Order = () => {
  return (
    <div className="container order" style={{ opacity: 1, transform: "none" }}>
      <h2>Thank you for your order :)</h2>
      <p style={{ opacity: 1 }}>You ordered a {base} with:</p>
      {toppings.map((topping) => {
        return <div>{topping}</div>;
      })}
      <div style={{ opacity: 1 }}></div>
    </div>
  );
};

export default Order;

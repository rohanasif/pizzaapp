const Toppings = () => {
  return (
    <div className="toppings container" style="opacity: 1; transform: none;">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        <li>
          <span className="">mushrooms</span>
        </li>
        <li>
          <span className="">peppers</span>
        </li>
        <li>
          <span className="">onions</span>
        </li>
        <li>
          <span className="">olives</span>
        </li>
        <li>
          <span className="">extra cheese</span>
        </li>
        <li>
          <span className="">tomatoes</span>
        </li>
      </ul>
      <a href="/order">
        <button>Order</button>
      </a>
    </div>
  );
};

export default Toppings;

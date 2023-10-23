const Base = () => {
  const handleBase = (e) => {
    // e.target.style = "list-style-type:circle";
    localStorage.setItem("base", JSON.stringify(e.target.innerText));
  };
  return (
    <div className="base container" style={{ opacity: 1, transform: "none" }}>
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        <li onClick={handleBase}>
          <span>Classic</span>
        </li>
        <li onClick={handleBase}>
          <span>Thin &amp; Crispy</span>
        </li>
        <li onClick={handleBase}>
          <span>Thick Crust</span>
        </li>
      </ul>
    </div>
  );
};

export default Base;

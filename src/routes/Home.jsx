const Home = () => {
  localStorage.clear();
  return (
    <div className="home container" style={{ opacity: 1 }}>
      <h2>Welcome to Pizza Joint</h2>
      <a href="/base">
        <button
          style={{
            transform: "none",
            textShadow: "rgb(255, 255, 255) 0px 0px 0px",
            boxShadow: "rgb(255, 255, 255) 0px 0px 0px",
          }}
        >
          Create Your Pizza
        </button>
      </a>
    </div>
  );
};

export default Home;

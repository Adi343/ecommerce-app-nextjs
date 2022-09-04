const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "black",
        padding: "5px",
        height: "50px",
      }}
    >
      <span
        style={{
          fontWeight: "bold",
          color: "#f97316",
        }}
      >
        Adithya's Shop
      </span>
      <button
        style={{
          height: "30px",
          width: "70px",
          borderRadius: "5px",
          backgroundColor: "black",
          border: "1px solid white",
          color: "white",
        }}
      >
        My Cart
      </button>
    </div>
  );
};

export default NavBar;

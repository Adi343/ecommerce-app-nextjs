import { useSelector } from "react-redux";

const NavBar = () => {
  const items = useSelector((state: any) => state.account.itemsInCart);
  // useSelector((state) => {
  //   console.log(JSON.stringify(state));
  // });

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
          width: "90px",
          borderRadius: "5px",
          backgroundColor: "black",
          border: "1px solid white",
          color: "white",
        }}
      >
        My Cart
        <span style={{ marginLeft: "3px" }}>{items.length}</span>
      </button>
    </div>
  );
};

export default NavBar;

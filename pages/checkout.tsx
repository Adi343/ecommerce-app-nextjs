import { useSelector } from "react-redux";
import ProjectCard from "../components/ProductCard";

const checkout = () => {
  const cartItems: [] = useSelector((state: any) => state.account.itemsInCart);
  console.log(JSON.stringify(cartItems));
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        // backgroundColor: "gray",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "whitesmoke",
          height: "60vh",
          width: "60%",
        }}
      >
        {/* {cartItems.map((item: any) => (
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "black",
          width: "300px",
          borderRadius: "10px",
        }}
        >
        <span style={{ color: "#f97316" }}>{item.name}</span>
        <span style={{ color: "#f97316" }}>{item.quantity}</span>
        </div>
      ))} */}
        {cartItems.length === 0 ? (
          <span
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
            }}
          >
            Cart is empty
          </span>
        ) : null}
        {cartItems.map((item: any) => (
          <ProjectCard id={item.id} name={item.name} quantity={item.quantity} />
        ))}
        {cartItems.length > 0 ? (
          <button
            style={{
              alignSelf: "end",
              height: "30px",
              width: "90px",
              borderRadius: "5px",
              margin: "5px",
              backgroundColor: "black",

              color: "white",
            }}
          >
            Checkout
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default checkout;

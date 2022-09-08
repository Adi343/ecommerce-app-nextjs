import { useSelector } from "react-redux";
import ProjectCard from "../components/ProductCard";

const checkout = () => {
  const cartItems: [] = useSelector((state: any) => state.account.itemsInCart);
  console.log(JSON.stringify(cartItems));
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      Checking out...
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
      {cartItems.map((item: any) => (
        <ProjectCard id={item.id} name={item.name} quantity={item.quantity} />
      ))}
    </div>
  );
};

export default checkout;

import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { resetCart } from "../redux/accountSlice";
import ProductCard from "../components/ProductCard";

const checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems: [] = useSelector((state: any) => state.account.itemsInCart);
  const total = cartItems
    .map((item: any) => item.quantity * item.price)
    .reduce(function (result: any, item: any) {
      return result + item;
    }, 0);

  function orderItems() {
    const orderBody = cartItems.map((item: any) => {
      return {
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      };
    });
    fetch("/api/order", {
      method: "POST",
      body: JSON.stringify(orderBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "success") {
          dispatch(resetCart());
          router.push("/about");
        }
      });
  }

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
          height: "100vh",
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
          <ProductCard
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
        {total > 0 ? (
          <div
            style={{
              width: "275px",
              height: "50px",
              borderRadius: "10px",

              backgroundColor: "black",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "orange",
                fontSize: "1.5rem",
              }}
            >
              ₹ {total}
            </span>
          </div>
        ) : null}

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
            onClick={orderItems}
          >
            Checkout
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default checkout;

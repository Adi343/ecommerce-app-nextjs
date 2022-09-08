import Link from "next/link";
import { useSelector } from "react-redux";

const NavBar = () => {
  const items = useSelector((state: any) => state.account.itemsInCart);
  let init = 0;
  const total = items
    .map((item: any) => item.quantity)
    .reduce(function (result: any, item: any) {
      return result + item;
    }, 0);

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
        width: "100%",
      }}
    >
      <Link href="/">
        <span
          style={{
            fontWeight: "bold",
            color: "#f97316",
          }}
        >
          Shop
        </span>
      </Link>
      <div>
        <Link href="/checkout">
          <button
            style={{
              height: "30px",
              width: "90px",
              borderRadius: "5px",
              margin: "5px",
              backgroundColor: "black",
              border: "1px solid white",
              color: "white",
            }}
          >
            My Cart
            <span style={{ marginLeft: "3px" }}>{total}</span>
          </button>
        </Link>
        <button
          style={{
            height: "30px",
            width: "90px",
            borderRadius: "5px",
            margin: "5px",
            backgroundColor: "white",
            border: "1px solid black",
            color: "black",
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default NavBar;

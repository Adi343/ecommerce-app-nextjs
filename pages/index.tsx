import type { NextPage } from "next";
import { useSelector } from "react-redux";

import ProductCard from "../components/ProductCard";
const Home: NextPage = () => {
  const products = useSelector((state: any) => state.store.products);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gap: "10px",
          // gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          margin: "5px",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {products.map((item: any) => {
          return (
            <ProductCard
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;

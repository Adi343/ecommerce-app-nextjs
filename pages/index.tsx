import type { NextPage } from "next";
import { useSelector } from "react-redux";
const Home: NextPage = () => {
  const products = useSelector((state: any) => state.store.products);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
          margin: "5px",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {products.map((item: any) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: "100px",
                borderRadius: "5px",
                backgroundColor: "black",
                color: "#f97316",
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

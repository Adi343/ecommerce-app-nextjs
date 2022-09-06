import type { NextPage } from "next";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
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
        {["P1", "P2", "P3", "P4", "P5", "P6"].map((item) => {
          return (
            <div
              style={{
                width: "100%",
                height: "100px",
                borderRadius: "5px",
                backgroundColor: "black",
                color: "#f97316",
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

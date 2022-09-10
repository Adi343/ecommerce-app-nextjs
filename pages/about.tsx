const about = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100vh",
      }}
    >
      <span
        style={{ fontWeight: "bold", fontSize: "1.25rem", textAlign: "center" }}
      >
        Your order has been saved to a database
      </span>
      <span
        style={{ fontWeight: "bold", fontSize: "1.25rem", textAlign: "center" }}
      >
        Checkout project code at
      </span>
    </div>
  );
};

export default about;

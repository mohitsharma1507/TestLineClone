export const Footer = () => {
  return (
    <div
      className="container"
      style={{
        minWidth: "100%",
        backgroundColor: "grey",
        position: "fixed",
        bottom: "0",
        left: "0",
        padding: "1rem 0",
        zIndex: 1000,
      }}
    >
      <div
        className="tags"
        style={{ textAlign: "center", marginBottom: "0.5rem" }}
      >
        <a
          href="#"
          style={{ margin: "0 1rem", color: "white", textDecoration: "none" }}
        >
          Refund Policy
        </a>
        <a
          href="#"
          style={{ margin: "0 1rem", color: "white", textDecoration: "none" }}
        >
          Privacy
        </a>
        <a
          href="#"
          style={{ margin: "0 1rem", color: "white", textDecoration: "none" }}
        >
          About
        </a>
      </div>
      <div className="para" style={{ textAlign: "center", color: "white" }}>
        <p>
          Copyright © M/S. TESTLINE EDUTECH (OPC) PVT. LTD. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

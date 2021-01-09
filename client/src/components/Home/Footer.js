import React from "react";

const Footer = () => {
  return (
    <footer style={footer}>
      <div style={copypara}>
        <p style={para}>
          Made with <span style={{ color: "#16BFFD" }}>♥</span> and React.JS
        </p>
      </div>
    </footer>
  );
};
const footer = {
  display: "flex",
  backgroundColor: "black",
  height: "50px",
  justifyContent: "center",
};
const copypara = {
  display: "flex",
  color: "white",
  alignContent: "center",
};
const para = {
  fontWeight: 400,
  letterSpacing: "1px",
  fontSize: "90%",
};

export default Footer;

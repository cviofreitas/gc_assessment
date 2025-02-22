import React from "react";
import "./header.css";
import guidelineLogo from "../assets/GuidelineCentralLogo_White.svg";
function Header() {
  return (
    <div className="page-header">
      <h3 style={{ textDecoration: "underline" }}>Catalog</h3>
      <h3>Blog</h3>
      <img src={guidelineLogo} style={{ width: "200px" }} />
      <h3>Contact</h3>
      <h3 style={{ display: "flex", alignItems: "center" }}>
        Login
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="white"
        >
          <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" />
        </svg>
      </h3>
    </div>
  );
}

export default Header;

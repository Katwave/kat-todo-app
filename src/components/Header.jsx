import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const styles = {
    textDecoration: "none",
  };
  return (
    <div className="header">
      <h1>2BDone</h1>
      <div className="nav">
        <ul>
          <Link style={styles} to="/about">
            <li>About</li>
          </Link>
          <Link style={styles} to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

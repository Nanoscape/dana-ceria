import React from "react";

export default function RoundedBg({ src, text }) {
  return (
    <div className="container">
      <div className="rounded-bg">
        <img src={src} alt="Rounded Background" />
      </div>
      <h2>{text}</h2>
    </div>
  );
}

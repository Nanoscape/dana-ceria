import React from 'react';

export default function CardProduct({ src, text }) {
  return (
    <div>
      <div className="rounded-bg">
        <img src={src} alt="Rounded Background" className="rounded-img" />
      </div>
      <h2 className="text-desc-rounded">{text}</h2>
    </div>
  );
}

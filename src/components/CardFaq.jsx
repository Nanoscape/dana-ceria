import React from 'react';

export default function CardFaq({ src, title, desc }) {
  return (
    <div>
      <div className="retangle-bg">
        <div className="border-rounded">
          <img src={src} alt="Card FAQ" className="retangle-img" />
        </div>
        <h2 className="text-title-faq">{title}</h2>
        <h4 className="text-desc-faq">{desc}</h4>
      </div>
    </div>
  );
}

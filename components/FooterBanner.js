import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/client";
const FooterBanner = ({
  footerBanner: { smallText, midText, product, buttonText, image, discount },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <img src={urlFor(image)} className="footer-banner-image" />
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{discount}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText} </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;

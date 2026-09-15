import React from 'react';
import Lottie from '../components/Lottie';
import {assetUrl} from '../assetUrl';

export default function Subscription({flavor, onChange} = {}) {
  return (
    <section id="subscription" className="shopify-section c-newsletterSubscribe negativ">
      <div className="r">
        <img src={assetUrl('inline-005.svg')} className="tenBoirais rainbow visibleFR" alt="" aria-hidden="true" />
        <img src={assetUrl('inline-006.svg')} className="tenBoirais rainbow visibleEN" alt="" aria-hidden="true" />
        <p className="inscrisToi">
          {"Join our tea club* and save 10% on every handcrafted cup."}
        </p>
        <div className="flex flexJCe">
          <a href="#contact" className="btn btnOmbre r current">
            <span>
              {"Join the tea club"}
            </span>
          </a>
        </div>
        <div className="innerFleur a flex flexCe flexJCe">
          <img src={assetUrl('fleur.png')} />
          <p className="a">
            {"We have"}
            <br />
            {"your"}
            <br />
            {"perfect cup"}
          </p>
        </div>
        <Lottie className="lottieFusee" file="lottie_hibi_3.json" />
        <small className="details a">
          {"* Pick up in store or order ahead for your next tea break."}
        </small>
        <img src={assetUrl('inline-007.svg')} className="arrondi" alt="" aria-hidden="true" />
      </div>
    </section>
  );
}

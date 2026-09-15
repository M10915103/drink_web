import React from 'react';
import Lottie from '../components/Lottie';

export default function Subscription({flavor, onChange} = {}) {
  return (
    <section id="shopify-section-template--16245198946546__1659709888bc2b0110" className="shopify-section c-newsletterSubscribe negativ">
      <div className="r">
        <img src="/assets/inline-005.svg" className="tenBoirais rainbow visibleFR" alt="" aria-hidden="true" />
        <img src="/assets/inline-006.svg" className="tenBoirais rainbow visibleEN" alt="" aria-hidden="true" />
        <p className="inscrisToi">
          {"Join our tea club* and save 10% on every handcrafted cup."}
        </p>
        <div className="flex flexJCe">
          <a href="https://en.manayerbamate.com/pages/abonnement" className="btn btnOmbre r current">
            <span>
              {"Join the tea club"}
            </span>
          </a>
        </div>
        <div className="innerFleur a flex flexCe flexJCe">
          <img src="/assets/fleur.png" />
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
        <img src="/assets/inline-007.svg" className="arrondi" alt="" aria-hidden="true" />
      </div>
    </section>
  );
}

import React from 'react';
import Lottie from '../components/Lottie';
import {assetUrl} from '../assetUrl';

export default function BenefitsMarkup({flavor, onChange} = {}) {
  return (
    <div className="margeNeg negativ">
      <div className="sectionCercle sectionCercleH h100 r">
        <img src={assetUrl('inline-001.svg')} className="a arc" alt="" aria-hidden="true" />
        <div className="innerCercle innerCercleCartes innerCercleH a">
          <div className="cercle a">
            <div className="etape h100 flex flexCe flexJCe etapeText">
              <div>
                <h2>
                  {"Tea House ? Bubble Tea ?"}
                  <br />
                  {"What are we pouring today?"}
                </h2>
                <p className="h5">
                  {"(freshly shaken, just for you)"}
                </p>
              </div>
            </div>
          </div>
          <div className="cercle a">
            <div className="etape h100 flex flexCe flexJCe etapeBenefice">
              <div className="data">
                <div className="haut">
                  {"Steady pick-me-up"}
                </div>
                <div className="bas r">
                  <p className="petitTexte2">
                    {"A smooth tea lift that keeps your afternoon moving."}
                  </p>
                  <Lottie file="carte_crash.json" />
                </div>
              </div>
            </div>
          </div>
          <div className="cercle a">
            <div className="etape h100 flex flexCe flexJCe etapeBenefice">
              <div className="data">
                <div className="haut">
                  {"Real brewed tea"}
                </div>
                <div className="bas r">
                  <p className="petitTexte2">
                    {"Brewed tea leaves bring a clean, naturally balanced boost."}
                  </p>
                  <Lottie file="carte_caf.json" />
                </div>
              </div>
            </div>
          </div>
          <div className="cercle a">
            <div className="etape h100 flex flexCe flexJCe etapeBenefice">
              <div className="data">
                <div className="haut">
                  {"Fruit-forward"}
                </div>
                <div className="bas r">
                  <p className="petitTexte2">
                    {"Bright fruit and fragrant tea in every colourful sip."}
                  </p>
                  <Lottie file="carte_antiox.json" />
                </div>
              </div>
            </div>
          </div>
          <div className="cercle a">
            <div className="etape h100 flex flexCe flexJCe etapeBenefice">
              <div className="data">
                <div className="haut">
                  {"Made your way"}
                </div>
                <div className="bas r">
                  <p className="petitTexte2">
                    {"Choose your milk, sweetness and pearls for a cup that is all yours."}
                  </p>
                  <Lottie file="carte_vege.json" />
                </div>
              </div>
            </div>
          </div>
          <div className="cercle a">
            <div className="etape etapeSpe h100 flex flexCe flexJCe r">
              <div className="innerEtoiles">
                <img src={assetUrl('inline-002.svg')} className="rainbow rainbowSpe visibleFR" alt="" aria-hidden="true" />
                <img src={assetUrl('inline-003.svg')} className="rainbow rainbowSpe visibleEN" alt="" aria-hidden="true" />
                <img className="etoile etoileBulle a" src={assetUrl('bulle.svg')} />
                <img className="etoile etoileBulle a" src={assetUrl('bulle.svg')} />
                <img className="etoile etoileBulle a" src={assetUrl('bulle.svg')} />
                <img className="etoile etoileBulle a" src={assetUrl('bulle.svg')} />
                <img className="etoile etoileBulle a" src={assetUrl('bulle.svg')} />
                <img className="etoile etoileBulle a" src={assetUrl('bulle.svg')} />
              </div>
              <img src={assetUrl('inline-004.svg')} className="allBulles a" alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

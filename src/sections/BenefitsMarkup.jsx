import React from 'react';
import Lottie from '../components/Lottie';

export default function BenefitsMarkup({flavor, onChange} = {}) {
  return (
    <div className="margeNeg negativ">
      <div className="sectionCercle sectionCercleH h100 r">
        <img src="/assets/inline-001.svg" className="a arc" alt="" aria-hidden="true" />
        <div className="innerCercle innerCercleCartes innerCercleH a">
          <div className="cercle a">
            <div className="etape h100 flex flexCe flexJCe etapeText">
              <div>
                <h2>
                  {"Mana ? Yerba Maté ?"}
                  <br />
                  {"What are we talking about?"}
                </h2>
                <p className="h5">
                  {"(we're going to tell each other the real things)"}
                </p>
              </div>
            </div>
          </div>
          <div className="cercle a">
            <div className="etape h100 flex flexCe flexJCe etapeBenefice">
              <div className="data">
                <div className="haut">
                  {"Without the crash"}
                </div>
                <div className="bas r">
                  <p className="petitTexte2">
                    {"A gentle wave of energy. To get you going without the crash."}
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
                  {"Natural caffeine"}
                </div>
                <div className="bas r">
                  <p className="petitTexte2">
                    {"This certified organic caffeine comes from the plant. A gift from Mother Nature."}
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
                  {"Antioxidant"}
                </div>
                <div className="bas r">
                  <p className="petitTexte2">
                    {"Richer in antioxidants than tea. Not bad."}
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
                  {"Vegan"}
                </div>
                <div className="bas r">
                  <p className="petitTexte2">
                    {"A plant-based drink that tastes like heaven. Who could ask for more?"}
                  </p>
                  <Lottie file="carte_vege.json" />
                </div>
              </div>
            </div>
          </div>
          <div className="cercle a">
            <div className="etape etapeSpe h100 flex flexCe flexJCe r">
              <div className="innerEtoiles">
                <img src="/assets/inline-002.svg" className="rainbow rainbowSpe visibleFR" alt="" aria-hidden="true" />
                <img src="/assets/inline-003.svg" className="rainbow rainbowSpe visibleEN" alt="" aria-hidden="true" />
                <img className="etoile etoileBulle a" src="/assets/bulle.svg" />
                <img className="etoile etoileBulle a" src="/assets/bulle.svg" />
                <img className="etoile etoileBulle a" src="/assets/bulle.svg" />
                <img className="etoile etoileBulle a" src="/assets/bulle.svg" />
                <img className="etoile etoileBulle a" src="/assets/bulle.svg" />
                <img className="etoile etoileBulle a" src="/assets/bulle.svg" />
              </div>
              <img src="/assets/inline-004.svg" className="allBulles a" alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

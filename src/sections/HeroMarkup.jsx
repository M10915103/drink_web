import React from 'react';
import Lottie from '../components/Lottie';
import CanScene from '../components/CanScene';

export default function HeroMarkup({flavor, onChange} = {}) {
  return (
    <section className="c-HomeHero--part1 r">
      <div className="innerCercle f lotties">
        <div className="step step0 flex flexJCe a">
          <div className="stepChild h100 r flex">
            <img className="a fond" src="/assets/fond1.png" />
            <div className="gauche r">
              <Lottie className="lottie_pamp_1 a" file="lottie_pamp_1.json">
                <img className="a bulles" src="/assets/home_bulles.svg" />
              </Lottie>
              <Lottie className="lottie_pamp_2 a" file="lottie_pamp_2.json" />
            </div>
            <div className="droite r">
              <img src="/assets/woman.svg" className="woman a" />
              <Lottie className="lottie_pamp_4 a" file="lottie_pamp_4.json" />
            </div>
          </div>
        </div>
        <div className="step step1 flex flexJCe a">
          <div className="stepChild h100 r flex">
            <img className="a fond" src="/assets/fond2.png" />
            <div className="gauche r">
              <Lottie className="lottie_hibi_1 a" file="lottie_hibi_1.json">
                <img className="a star" src="/assets/home_star.svg" />
              </Lottie>
              <Lottie className="lottie_hibi_2 a" file="lottie_hibi_2.json">
                <img className="a star" src="/assets/home_star.svg" />
              </Lottie>
            </div>
            <div className="droite r">
              <Lottie className="lottie_hibi_3 a" file="lottie_hibi_3.json">
                <img className="a planet" src="/assets/home_planet.svg" />
                <img className="a star" src="/assets/home_star.svg" />
              </Lottie>
            </div>
          </div>
        </div>
        <div className="step step2 flex flexJCe a">
          <div className="stepChild h100 r flex">
            <img className="a fond" src="/assets/fond3.png" />
            <div className="gauche r">
              <Lottie className="lottie_trop_1 a" file="lottie_trop_1.json">
                <img className="a eau" src="/assets/home_eau.svg" />
              </Lottie>
              <img src="/assets/mangue.svg" className="mangue a" />
            </div>
            <div className="droite r">
              <Lottie className="lottie_trop_2 a" file="lottie_trop_2.json" />
              <Lottie className="lottie_trop_4 a" file="lottie_trop_4.json" />
            </div>
          </div>
        </div>
        <div className="step step3 flex flexJCe a">
          <div className="stepChild h100 r flex">
            <img className="a fond first" src="/assets/fond4.png" />
            <div className="gauche r">
              <div className="introGauche a">
                <img className="a fleur" src="/assets/home_fleur.svg" />
                <Lottie className="lottie_melo_1 a" file="lottie_melo_1.json" />
              </div>
            </div>
            <div className="droite r">
              <div className="introDroite a">
                <Lottie className="lottie_melo_2 a" file="lottie_melo_2.json" />
                <Lottie className="lottie_melo_3 a" file="lottie_melo_3.json" />
              </div>
            </div>
          </div>
        </div>
        <div className="step step4 flex flexJCe a">
          <div className="stepChild h100 r flex">
            <img className="a fond" src="/assets/fond1.png" />
            <div className="gauche r">
              <Lottie className="lottie_pamp_1 a" file="lottie_pamp_1.json">
                <img className="a bulles" src="/assets/home_bulles.svg" />
              </Lottie>
              <Lottie className="lottie_pamp_2 a" file="lottie_pamp_2.json" />
            </div>
            <div className="droite r">
              <img src="/assets/woman.svg" className="woman a" />
              <Lottie className="lottie_pamp_4 a" file="lottie_pamp_4.json" />
            </div>
          </div>
        </div>
        <div className="step step5 flex flexJCe a">
          <div className="stepChild h100 r flex">
            <img className="a fond" src="/assets/fond2.png" />
            <div className="gauche r">
              <Lottie className="lottie_hibi_1 a" file="lottie_hibi_1.json">
                <img className="a star" src="/assets/home_star.svg" />
              </Lottie>
              <Lottie className="lottie_hibi_2 a" file="lottie_hibi_2.json">
                <img className="a star" src="/assets/home_star.svg" />
              </Lottie>
            </div>
            <div className="droite r">
              <Lottie className="lottie_hibi_3 a" file="lottie_hibi_3.json">
                <img className="a planet" src="/assets/home_planet.svg" />
                <img className="a star" src="/assets/home_star.svg" />
              </Lottie>
            </div>
          </div>
        </div>
        <div className="step step6 flex flexJCe a">
          <div className="stepChild h100 r flex">
            <img className="a fond" src="/assets/fond3.png" />
            <div className="gauche r">
              <Lottie className="lottie_trop_1 a" file="lottie_trop_1.json">
                <img className="a eau" src="/assets/home_eau.svg" />
              </Lottie>
              <img src="/assets/mangue.svg" className="mangue a" />
            </div>
            <div className="droite r">
              <Lottie className="lottie_trop_2 a" file="lottie_trop_2.json" />
              <Lottie className="lottie_trop_4 a" file="lottie_trop_4.json" />
            </div>
          </div>
        </div>
        <div className="step step7 flex flexJCe a">
          <div className="stepChild h100 r flex">
            <img className="a fond" src="/assets/fond4.png" />
            <div className="gauche r">
              <img className="a fleur" src="/assets/home_fleur.svg" />
              <Lottie className="lottie_melo_1 a" file="lottie_melo_1.json" />
            </div>
            <div className="droite r">
              <Lottie className="lottie_melo_2 a" file="lottie_melo_2.json" />
              <Lottie className="lottie_melo_3 a" file="lottie_melo_3.json" />
            </div>
          </div>
        </div>
      </div>
      <CanScene flavor={flavor} />
      <div className="slider-navigation flex flexFe flexJCe r">
        <div className="flex r flexSb flexCe">
          <button className="btnRond r heroPrev bounce" onClick={() => onChange(-1)} aria-label="Previous flavor">
            <span className="elBounce flex flexCe flexJCe">
              <img src="/assets/i_arrow.svg" />
            </span>
          </button>
          <div className="innerBtn">
            <a href="https://en.manayerbamate.com/products/pamplemousse" className={"btn btnOmbre r" + (flavor === 0 ? ' current' : '')}>
              <span style={{"backgroundColor":"rgb(241, 91, 64)"}}>
                <span className="premier">
                  {"Grapefruit"}
                </span>
                <span className="a second">
                  {"Grapefruit"}
                </span>
              </span>
            </a>
            <a href="https://en.manayerbamate.com/products/mure-et-hibiscus" className={"btn btnOmbre r btnOmbreBleu" + (flavor === 1 ? ' current' : '')}>
              <span style={{"backgroundColor":"rgb(43, 61, 115)"}}>
                <span className="premier">
                  {"Blackberry & Hibiscus"}
                </span>
                <span className="a second">
                  {"Blackberry & Hibiscus"}
                </span>
              </span>
            </a>
            <a href="https://en.manayerbamate.com/products/punch-tropical" className={"btn btnOmbre r btnOmbreRouge" + (flavor === 2 ? ' current' : '')}>
              <span style={{"backgroundColor":"rgb(231, 47, 99)"}}>
                <span className="premier">
                  {"Tropical"}
                </span>
                <span className="a second">
                  {"Tropical"}
                </span>
              </span>
            </a>
            <a href="https://en.manayerbamate.com/products/melon-et-menthe" className={"btn btnOmbre r btnOmbreVert" + (flavor === 3 ? ' current' : '')}>
              <span style={{"backgroundColor":"rgb(25, 94, 28)"}}>
                <span className="premier">
                  {"Melon & Mint"}
                </span>
                <span className="a second">
                  {"Melon & Mint"}
                </span>
              </span>
            </a>
          </div>
          <button className="btnRond r heroNext bounce" onClick={() => onChange(1)} aria-label="Next flavor">
            <span className="elBounce flex flexCe flexJCe">
              <img className="rotate" src="/assets/i_arrow.svg" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

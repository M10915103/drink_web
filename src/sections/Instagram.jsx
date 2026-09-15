import React from 'react';
import Lottie from '../components/Lottie';
import {assetUrl} from '../assetUrl';

export default function Instagram({flavor, onChange} = {}) {
  return (
    <section id="social" className="shopify-section c-instagramPush">
      <div className="innerInsta r">
        <img className="pushInsta a pushInsta0" src={assetUrl('bubble-tea-collection.png')} loading="lazy" alt="Fresh bubble tea collection" />
        <img className="pushInsta a pushInsta1" src={assetUrl('bubble-tea-hero.png')} loading="lazy" alt="Brown sugar bubble tea" />
        <img className="pushInsta a pushInsta2" src={assetUrl('bubble-tea-collection.png')} loading="lazy" alt="Fruit tea collection" />
        <img className="pushInsta a pushInsta3" src={assetUrl('bubble-tea-hero.png')} loading="lazy" alt="Fresh milk tea" />
        <div className="flex flexJCe datasInsta">
          <div>
            <p className="h5">
              {"@teahouse.daily"}
            </p>
            <h2 className="h2">
              {"For a dose of energy in your feed."}
            </h2>
            <div>
              <a className="btn btnOmbre btnRond3 r" href="#social" aria-label="Instagram profile unavailable">
                <span className="flex flexCe flexJCe">
                  <img src={assetUrl('i_ig.svg')} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src={assetUrl('inline-008.svg')} className="arrondi" alt="" aria-hidden="true" />
    </section>
  );
}

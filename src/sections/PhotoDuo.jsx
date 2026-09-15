import React from 'react';
import Lottie from '../components/Lottie';

export default function PhotoDuo({flavor, onChange} = {}) {
  return (
    <section id="shopify-section-template--16245198946546__cd87ee4d-7e12-4763-8242-6882c2339a77" className="shopify-section c-imagesDuo">
      <div className="imgDuo r">
        <div className="parallax flex">
          <img src="/assets/left_5a17133c-fc16-4907-af73-f964dc926e47_700x750_crop_center.jpg" srcSet="/assets/left_5a17133c-fc16-4907-af73-f964dc926e47_700x750_crop_center@2x.jpg 2x" alt="" />
          <img src="/assets/right_f9e5bdd5-3bee-41c9-996c-ee432de1bd0a_700x750_crop_center.jpg" srcSet="/assets/right_f9e5bdd5-3bee-41c9-996c-ee432de1bd0a_700x750_crop_center@2x.jpg 2x" alt="" />
        </div>
      </div>
    </section>
  );
}

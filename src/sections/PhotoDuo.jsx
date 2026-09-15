import React from 'react';
import {assetUrl} from '../assetUrl';

export default function PhotoDuo(){
 return <section id="story" className="shopify-section c-imagesDuo">
  <div className="imgDuo r"><div className="parallax flex">
   <img src={assetUrl('left_5a17133c-fc16-4907-af73-f964dc926e47_700x750_crop_center.jpg')} srcSet={assetUrl('left_5a17133c-fc16-4907-af73-f964dc926e47_700x750_crop_center@2x.jpg')+' 2x'} alt=""/>
   <img src={assetUrl('right_f9e5bdd5-3bee-41c9-996c-ee432de1bd0a_700x750_crop_center.jpg')} srcSet={assetUrl('right_f9e5bdd5-3bee-41c9-996c-ee432de1bd0a_700x750_crop_center@2x.jpg')+' 2x'} alt=""/>
  </div></div>
 </section>;
}

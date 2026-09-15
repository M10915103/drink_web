import React from 'react';
import {assetUrl} from '../assetUrl';

export default function Flavors(){
 return <section id="flavors" className="shopify-section c-wordParagraph negativ"><section className="c-HomeHero--part3">
  <div className="innerEtoiles r"><h2 className="grosTitre grosTitreSpe rainbow">
   {['T','e','a',' ','F','l','avors'].map((letter,index)=><span className={'c-beige lettre '+['ls','la','lv','le','lu','lr','ls'][index]} key={index}>{letter}</span>)}
  </h2><div className="parallaxEtoile">
   {[0,1,2,3].map(i=><img className="etoile a" src={assetUrl('etoile.svg')} alt="" key={i}/>)}
  </div>{[4,5,6].map(i=><img className="etoile a" src={assetUrl('etoile.svg')} alt="" key={i}/>)}</div>
  <div className="wrap"><p className="petitTexte">Fresh tea, creamy milk, chewy pearls and bright fruit awaken your taste buds.</p></div>
 </section></section>;
}

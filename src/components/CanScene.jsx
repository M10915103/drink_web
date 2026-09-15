import {useEffect,useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const drinks=[
  {name:'Passion Fruit Green Tea',filter:'hue-rotate(32deg) saturate(1.15) drop-shadow(0 26px 25px rgba(34,20,8,.24))'},
  {name:'Berry Jasmine Tea',filter:'hue-rotate(285deg) saturate(1.25) drop-shadow(0 26px 25px rgba(34,20,8,.24))'},
  {name:'Mango Oolong Tea',filter:'hue-rotate(15deg) saturate(1.2) drop-shadow(0 26px 25px rgba(34,20,8,.24))'},
  {name:'Brown Sugar Milk Tea',filter:'drop-shadow(0 26px 25px rgba(34,20,8,.24))'},
];

export default function CanScene({flavor=3}){
  const host=useRef(null);
  const image=useRef(null);
  useEffect(()=>{
    const node=image.current;
    if(!node)return;
    const move=e=>{
      const x=(e.clientX/innerWidth-.5)*18;
      const y=(e.clientY/innerHeight-.5)*12;
      gsap.to(node,{x,y,rotation:x*.08,duration:.8,ease:'power2.out'});
    };
    const ctx=gsap.context(()=>{
      if(innerWidth>600){
        gsap.timeline({scrollTrigger:{trigger:'.c-HomeHero--part1',start:'top top',end:'bottom bottom',scrub:true}})
          .to(node,{rotation:-22,y:()=>innerHeight*.42,scale:.92,ease:'power1.inOut'},0);
      }
    },host);
    window.addEventListener('pointermove',move);
    return()=>{ctx.revert();window.removeEventListener('pointermove',move);};
  },[]);
  const drink=drinks[flavor]||drinks[3];
  return <div ref={host} className="mainCanvas bubbleCanvas f flex flexCe flexJCe" data-loaded="true">
    <img ref={image} className="bubble-hero" src="/assets/bubble-tea-hero.png" alt={drink.name} style={{filter:drink.filter}}/>
  </div>;
}

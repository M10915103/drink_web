import {useEffect,useRef,useState} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import HeroMarkup from './HeroMarkup';
import BenefitsMarkup from './BenefitsMarkup';
gsap.registerPlugin(ScrollTrigger);
const handles=['pamplemousse','mure-et-hibiscus','punch-tropical','melon-et-menthe'];
export default function Hero(){
 const [step,setStep]=useState(3);const flavor=((step%4)+4)%4;const root=useRef(null);
 useEffect(()=>{document.body.dataset.boisson=handles[flavor];gsap.to('.innerCercle.lotties',{rotation:-45*step,duration:1.15,ease:'power3.inOut'});},[step,flavor]);
 useEffect(()=>{
  const ctx=gsap.context(()=>{
   gsap.set('.mainCanvas',{xPercent:-50,y:0});gsap.set('.slider-navigation',{y:0});gsap.set('.introGauche,.introDroite',{x:0,rotation:0});
   if(innerWidth>600){
    gsap.to('.step .gauche',{x:'-50%',y:'-80%',rotation:-20,ease:'none',scrollTrigger:{trigger:'.c-HomeHero--part1',start:'top top',end:'bottom bottom',scrub:true}});
    gsap.to('.step .droite',{x:'50%',y:'-80%',rotation:20,ease:'none',scrollTrigger:{trigger:'.c-HomeHero--part1',start:'top top',end:'bottom bottom',scrub:true}});
    gsap.to('.slider-navigation',{y:'140%',immediateRender:false,duration:.4,scrollTrigger:{trigger:'.c-HomeHero--part1',start:()=>`top -${innerHeight}px`,toggleActions:'play none none reverse'}});
    gsap.to('.innerCercleCartes',{rotation:-130,ease:'power1.inOut',scrollTrigger:{trigger:'.sectionCercle',start:'top top',end:()=>'+='+3*innerWidth,scrub:true,pin:true,anticipatePin:1,invalidateOnRefresh:true}});
   }
   gsap.to('.arc',{scaleY:1,ease:'none',scrollTrigger:{trigger:'.sectionCercle',start:()=>`top bottom-=${.06*innerWidth}`,end:'top top',scrub:true}});
   ScrollTrigger.create({trigger:'.offCanvas',start:'top top',onEnter:()=>root.current?.classList.add('off'),onLeaveBack:()=>root.current?.classList.remove('off')});
  },root);
  return()=>ctx.revert();
 },[]);
 return <section ref={root} className="shopify-section c-HomeHero" aria-label="MANA flavors and benefits"><div className="c-HomeHero-fond"><h1 className="sr-only">MANA — organic energizing yerba mate</h1><HeroMarkup flavor={flavor} onChange={delta=>setStep(s=>s+delta)}/><BenefitsMarkup/></div><div className="offCanvas"/></section>;
}

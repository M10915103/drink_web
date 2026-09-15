import React,{useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Header from './sections/Header';
import Hero from './sections/Hero';
import PhotoDuo from './sections/PhotoDuo';
import Flavors from './sections/Flavors';
import Products from './sections/Products';
import Subscription from './sections/Subscription';
import Instagram from './sections/Instagram';
import Footer from './sections/Footer';
import './original.css';
import './styles.css';
gsap.registerPlugin(ScrollTrigger);
function App(){
 useEffect(()=>{
  const ctx=gsap.context(()=>{
   gsap.to('.imgDuo .parallax',{y:0,ease:'none',scrollTrigger:{trigger:'.imgDuo',start:'top bottom',end:'bottom top',scrub:true}});
   gsap.to('.c-wordParagraph .lettre',{color:'#0e0e0e',scale:1,stagger:.05,duration:.6,scrollTrigger:{trigger:'.c-wordParagraph',start:'top 90%',toggleActions:'play none none reverse'}});
   gsap.set('.c-wordParagraph .etoile',{scale:1});
   document.querySelectorAll('.arrondi').forEach(el=>gsap.to(el,{scaleY:1,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'top top',scrub:true}}));
   [[-80,30,0],[0,-10,-10],[-80,-60,-10],[-100,10,5]].forEach(([y,x,rotation],i)=>gsap.to('.pushInsta'+i,{yPercent:y,xPercent:x,rotation,ease:'none',scrollTrigger:{trigger:'.innerInsta',start:'top bottom',end:'bottom top',scrub:true}}));
  });
  document.fonts.ready.then(()=>ScrollTrigger.refresh());return()=>ctx.revert();
 },[]);
 return <><a className="skip-link" href="#MainContent">Skip to content</a><Header/><main id="MainContent"><Hero/><PhotoDuo/><Flavors/><Products/><Subscription/><Instagram/><Footer/></main></>;
}
createRoot(document.getElementById('root')).render(<App/>);

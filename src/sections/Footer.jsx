import {useEffect,useRef,useState} from 'react';
import Lottie from '../components/Lottie';

export default function Footer(){
 const [jumping,setJumping]=useState(false),[score,setScore]=useState(0),[credits,setCredits]=useState(false);const root=useRef(null),timer=useRef(null);
 const jump=()=>{if(timer.current)return;setJumping(true);setScore(s=>s+1);timer.current=setTimeout(()=>{setJumping(false);timer.current=null;},750);};
 useEffect(()=>{const key=e=>{if(e.code==='Space'&&root.current?.getBoundingClientRect().top<innerHeight*.8&&e.target===document.body){e.preventDefault();jump();}};window.addEventListener('keydown',key);return()=>{window.removeEventListener('keydown',key);clearTimeout(timer.current);};},[]);
 return <footer className="mana-footer shopify-section c-Footer" ref={root}>
  <div className="footer-socials">{[['fb','#','Facebook'],['li','#','LinkedIn'],['ig','#','Instagram']].map(([icon,url,label])=><a href={url} key={icon} aria-label={label}><img src={'/assets/i_'+icon+'.svg'} alt=""/></a>)}</div>
  <div className="game-landscape"><Lottie className="landscape-art" file="jeu_paysage.json"/><Lottie className={'game-runner '+(jumping?'jumping':'')} file={jumping?'jeu_jump.json':'jeu_walk.json'}/><img className="game-cloud" src="/assets/nuage.svg" alt=""/></div>
  {jumping&&<div className="boost" aria-hidden="true">SHAKE!</div>}
  <button className="jump-button" onClick={jump}>Press Space to shake{score>0&&<span aria-live="polite"> · {score}</span>}</button>
  <div className="footer-bottom"><span>2026 © Tea House</span><div><a href="#">Terms of use</a><a href="#">Refund policy</a><button onClick={()=>setCredits(!credits)}>Credits</button></div></div>
  {credits&&<div className="credits" role="dialog" aria-label="Credits"><button onClick={()=>setCredits(false)} aria-label="Close credits">×</button><p>Tea House drink photography and local React experience.</p><p>Freshly shaken every day.</p></div>}
 </footer>;
}

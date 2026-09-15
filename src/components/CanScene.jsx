import {useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader.js';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const textures=['MANA_canette_pamp_color_for_mat_v2.png','MANA_canette_hibiscus_color_for_mat.png','MANA_canette_tropical_color_for_mat.png','MANA_canette_melon_mint_mat.png'];

export default function CanScene({flavor}){
 const host=useRef(null),model=useRef(null),maps=useRef([]),current=useRef(flavor);
 const [failed,setFailed]=useState(false);
 useEffect(()=>{current.current=flavor;if(model.current&&maps.current[flavor])model.current.children[1].material.map=maps.current[flavor];},[flavor]);
 useEffect(()=>{
  let renderer;try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});}catch{setFailed(true);return;}
  let disposed=false;const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(40,1,1,200);
  const group=new THREE.Group(),mouse=new THREE.Group();scene.add(group);group.add(mouse);
  scene.add(new THREE.AmbientLight(0xffffff,.45));
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1;renderer.outputEncoding=THREE.sRGBEncoding;
  host.current.appendChild(renderer.domElement);renderer.domElement.setAttribute('aria-label','Interactive 3D MANA yerba mate can');
  const size=()=>innerWidth>=650?Math.min(900,Math.max(650,innerWidth/2)):.9*innerWidth;
  const resize=()=>{renderer.setSize(size(),size());camera.position.z=innerWidth>=650?84:70;camera.position.y=innerWidth<650?.6:0;};resize();
  const loader=new THREE.TextureLoader();
  maps.current=textures.map(name=>{const t=loader.load('/assets/'+name);t.encoding=THREE.sRGBEncoding;t.flipY=false;t.minFilter=THREE.LinearFilter;t.anisotropy=renderer.capabilities.getMaxAnisotropy();return t;});
  new RGBELoader().load('/assets/MANA_hdr.hdr',texture=>{if(disposed){texture.dispose();return;}texture.mapping=THREE.EquirectangularReflectionMapping;scene.environment=texture;},undefined,()=>setFailed(true));
  let ctx;
  new GLTFLoader().load('/assets/MANA_canettes__v5_WEBGL.gltf',gltf=>{
   if(disposed)return;
   const can=gltf.scene;model.current=can;can.scale.setScalar(270);can.rotation.y=0;
   can.traverse(o=>{o.frustumCulled=false;if(o.isMesh&&o.material.map)o.material.envMapIntensity=2.02;});
   can.children[1].material.map=maps.current[current.current];mouse.add(can);
   ctx=gsap.context(()=>{
    if(innerWidth>600){
     gsap.timeline({scrollTrigger:{trigger:'.c-HomeHero--part1',start:'top top',end:'bottom bottom',scrub:true}})
      .to(group.rotation,{z:-Math.PI,y:-Math.PI,x:1.12*Math.PI,ease:'power1.inOut'},0)
      .to(renderer.domElement,{y:()=>.58*size()+(innerHeight-size())/2,ease:'power1.inOut'},0)
      .to(group.position,{z:20,ease:'power1.inOut'},0).to(camera.position,{y:8,ease:'power1.inOut'},0);
     gsap.to(can.rotation,{y:2*Math.PI,ease:'power1.inOut',scrollTrigger:{trigger:'.sectionCercle',start:'top top',end:()=>'+='+3*innerWidth,scrub:true}});
    }
   });
   host.current.dataset.loaded='true';ScrollTrigger.refresh();
  },undefined,()=>setFailed(true));
  const target={x:0,y:0};const move=e=>{target.x=e.clientX/innerWidth-.5;target.y=e.clientY/innerHeight-.5;};
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const render=()=>{if(document.hidden||host.current?.closest('.off'))return;if(!reduce){mouse.position.x+=(target.x*2-mouse.position.x)*.06;mouse.position.y+=(-target.y*4-mouse.position.y)*.06;mouse.rotation.y+=(target.x/2-mouse.rotation.y)*.06;mouse.rotation.x+=(target.y*Math.PI/12-mouse.rotation.x)*.06;mouse.rotation.z+=(target.x/10-mouse.rotation.z)*.06;}renderer.render(scene,camera);};
  gsap.ticker.add(render);window.addEventListener('pointermove',move);window.addEventListener('resize',resize);
  return()=>{disposed=true;ctx?.revert();gsap.ticker.remove(render);window.removeEventListener('pointermove',move);window.removeEventListener('resize',resize);scene.traverse(o=>{if(o.isMesh){o.geometry.dispose();o.material.dispose();}});maps.current.forEach(t=>t.dispose());scene.environment?.dispose();renderer.dispose();renderer.domElement.remove();model.current=null;};
 },[]);
 return <div ref={host} className="mainCanvas f flex flexCe">{failed&&<img className="can-fallback" src="/assets/1-1eie_827x980.jpg" alt="MANA Melon & Mint"/>}</div>;
}

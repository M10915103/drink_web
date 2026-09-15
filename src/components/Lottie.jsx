import {useEffect,useRef} from 'react';
import lottie from 'lottie-web';

/** Owns one animation; offscreen animations pause and unmounts dispose it. */
export default function Lottie({file,className='',children,loop=true,...props}){
  const host=useRef(null);
  useEffect(()=>{
    const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animation=lottie.loadAnimation({container:host.current,renderer:'svg',loop,autoplay:false,path:'/assets/'+file});
    animation.addEventListener('DOMLoaded',()=>{if(reduce)animation.goToAndStop(30,true);});
    const observer=new IntersectionObserver(([entry])=>{
      if(!reduce&&entry.isIntersecting)animation.play();else animation.pause();
    });observer.observe(host.current);
    return()=>{observer.disconnect();animation.destroy();};
  },[file,loop]);
  return <div className={className} {...props}>{children}<div className="lottie-renderer" ref={host}/></div>;
}

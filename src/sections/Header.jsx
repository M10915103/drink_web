import {useEffect,useRef,useState} from 'react';
import products from '../products.json';
import {assetUrl} from '../assetUrl';
export default function Header(){
 const [banner,setBanner]=useState(true),[menu,setMenu]=useState(null);const root=useRef(null);
 useEffect(()=>{const close=e=>{if(e.key==='Escape'||(e.type==='pointerdown'&&!root.current?.contains(e.target)))setMenu(null);};window.addEventListener('keydown',close);window.addEventListener('pointerdown',close);return()=>{window.removeEventListener('keydown',close);window.removeEventListener('pointerdown',close);};},[]);
 return <header className="site-header" ref={root}>
  {banner&&<div className="announcement"><a href="#products">FREE SHIPPING ON ALL PURCHASES OF $35 OR MORE QUEBEC AND ONTARIO</a><button aria-label="Dismiss shipping announcement" onClick={()=>setBanner(false)}>×</button></div>}
<nav className="main-nav" aria-label="Main navigation"><a href="#home" className="brand tea-brand" aria-label="Tea House home"><span>TEA<br/>HOUSE</span></a><div className="nav-links">
   <button className="nav-pill" aria-expanded={menu==='shop'} onClick={()=>setMenu(menu==='shop'?null:'shop')}>Shop <span className="chevron"/></button>
   <button className="nav-pill" aria-expanded={menu==='learn'} onClick={()=>setMenu(menu==='learn'?null:'learn')}>Learn <span className="chevron"/></button>
   <a className="nav-pill subscription-link" href="#subscription">Subscription</a><a className="nav-pill language" href="#home" aria-label="Language option unavailable">En</a>
   <a className="nav-pill nav-icon account-link" aria-label="Account option unavailable" href="#home"><svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="14" cy="14" r="11"/><circle cx="14" cy="10" r="3.6"/><path d="M6 22v-3q8-7 16 0v3"/></svg></a>
   <button className="nav-pill nav-icon" aria-label="Open cart" aria-expanded={menu==='cart'} onClick={()=>setMenu(menu==='cart'?null:'cart')}><svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h4l3 15h14l3-11H7"/><circle cx="11" cy="24" r="2"/><circle cx="22" cy="24" r="2"/></svg></button>
  </div></nav>
  {menu&&<div className={'nav-panel '+(menu==='shop'?'shop-panel':'')}>
   {menu==='shop'?<>{products.map(p=><a href="#products" key={p.name}><img src={assetUrl(p.image)} alt=""/><span>{p.name}</span></a>)}<a className="all-products" href="#products">See all our products ↗</a></>:menu==='learn'?<>{[['Our drinks','#flavors'],['Our story','#story'],['Tea club','#subscription'],['Contact','#contact']].map(([label,href])=><a href={href} key={href}>{label} ↗</a>)}</>:<><h2>Your cart</h2><p>Your cart is empty.</p><a href="#products">Continue shopping ↗</a></>}
  </div>}
 </header>;
}

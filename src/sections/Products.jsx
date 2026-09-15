import {useRef} from 'react';
import products from '../products.json';
export default function Products(){
 const rail=useRef(null);
 const slide=direction=>{const el=rail.current;const distance=el.clientWidth*.6;const next=el.scrollLeft+direction*distance;el.scrollTo({left:next<0?el.scrollWidth:next>=el.scrollWidth-el.clientWidth-2?0:next,behavior:'smooth'});};
 return <section className="shopify-section c-productsSlider" id="products" aria-label="Recommended products"><div className="product-heading"><h2>Recommended products</h2><a href="https://en.manayerbamate.com/collections/all">See all our products</a></div><div className="product-viewport"><div className="product-rail" ref={rail}>{products.map(p=><article className="product-card" key={p.name}><a href={p.href}><img className="product-base" src={p.image} srcSet={p.image2x} alt={p.name} width="827" height="980" loading="lazy"/><img className="product-hover" src={p.hover} srcSet={p.hover2x} alt="" width="827" height="980" loading="lazy"/><h3>{p.name}</h3><span className="product-discover">Discover this product ↗</span></a></article>)}</div><div className="product-controls"><button aria-label="Previous products" onClick={()=>slide(-1)}>←</button><button aria-label="Next products" onClick={()=>slide(1)}>→</button></div></div></section>;
}

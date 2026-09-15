import fs from 'node:fs/promises';
import {load} from 'cheerio';
const html=await fs.readFile('source.html','utf8');const $=load(html);
await fs.mkdir('src/sections',{recursive:true});await fs.mkdir('src/components',{recursive:true});
let svgIndex=0;const inline=[];
function local(value){return value.replace(/(?:https?:)?\/\/[^\s"'<>]+\/(?:assets|files)\/([^\s"'<>?]+)(?:\?[^\s"'<>]*)?/g,(_,name)=>'/assets/'+name);}
const camel=s=>s.replace(/-([a-z])/g,(_,c)=>c.toUpperCase());
function render(node,depth=0){
 const indent='  '.repeat(depth);
 if(node.type==='text'){const t=node.data.replace(/\s+/g,' ').trim();return t?indent+'{'+JSON.stringify(t)+'}':'';}
 if(node.type!=='tag'||['script','style'].includes(node.name))return '';
 const attrs={...node.attribs};let tag=node.name;
 if(tag==='svg'){
  const filename=`inline-${String(++svgIndex).padStart(3,'0')}.svg`;
  let svg=$.html(node);if(!svg.includes('xmlns='))svg=svg.replace('<svg ','<svg xmlns="http://www.w3.org/2000/svg" ');
  inline.push(fs.writeFile('public/assets/'+filename,svg));
  return indent+`<img src="/assets/${filename}" className=${JSON.stringify(attrs.class||'')} alt="" aria-hidden="true" />`;
 }
 let extras='';const cls=attrs.class||'';
 if(cls.includes('mainCanvas'))return indent+'<CanScene flavor={flavor} />';
 const lot=cls.match(/\blottie_(?:melo|pamp|hibi|trop)_\d/);
 if(lot){tag='Lottie';extras+=' file="'+lot[0]+'.json"';}
 if(cls==='lottieFusee'){tag='Lottie';extras+=' file="lottie_hibi_3.json"';}
 if(cls==='bas r'&&$(node).closest('.etapeBenefice').length){
  const n=$('.etapeBenefice .bas').index(node);extras='';
  node.__lottie=['carte_crash.json','carte_caf.json','carte_antiox.json','carte_vege.json'][n];
 }
 if(cls.includes('heroPrev'))extras+=' onClick={() => onChange(-1)} aria-label="Previous flavor"';
 if(cls.includes('heroNext'))extras+=' onClick={() => onChange(1)} aria-label="Next flavor"';
 if($(node).parent().hasClass('innerBtn')){const i=$(node).index();delete attrs.class;extras+=` className={${JSON.stringify(cls.replace(' current',''))} + (flavor === ${i} ? ' current' : '')}`;}
 const attrText=Object.entries(attrs).filter(([k])=>!k.startsWith('on')&&!k.startsWith('data-wg')&&k!=='style').map(([k,v])=>{
  if(k==='class')k='className';if(k==='srcset')k='srcSet';if(k==='tabindex')k='tabIndex';
  if(k==='href'&&v.startsWith('/'))v='https://en.manayerbamate.com'+v;
  return `${k}=${JSON.stringify(local(v))}`;
 }).join(' ');
 if(attrs.style){const o={};for(const rule of attrs.style.split(';')){let p=rule.indexOf(':');if(p>0)o[camel(rule.slice(0,p).trim())]=rule.slice(p+1).trim();}extras+=' style={'+JSON.stringify(o)+'}';}
 const start=indent+`<${tag}${attrText?' '+attrText:''}${extras}`;
 if(['img','br','hr','input'].includes(tag))return start+' />';
 let children=(node.children||[]).map(n=>render(n,depth+1)).filter(Boolean);
 if(node.__lottie)children.push(indent+'  <Lottie file="'+node.__lottie+'" />');
 return children.length?start+'>\n'+children.join('\n')+'\n'+indent+`</${tag}>`:start+` />`;
}
const sections=[['HeroMarkup','.c-HomeHero--part1'],['BenefitsMarkup','.margeNeg'],['PhotoDuo','.c-imagesDuo'],['Flavors','.c-wordParagraph'],['Subscription','.c-newsletterSubscribe'],['Instagram','.c-instagramPush']];
for(const [name,selector]of sections){let jsx=render($(selector).get(0),2);await fs.writeFile(`src/sections/${name}.jsx`,`import React from 'react';\nimport Lottie from '../components/Lottie';\n${name==='HeroMarkup'?"import CanScene from '../components/CanScene';\n":''}\nexport default function ${name}({flavor, onChange} = {}) {\n  return (\n${jsx}\n  );\n}\n`);}
const logo=$('.header a').first().find('svg').first();if(logo.length){let s=$.html(logo);if(!s.includes('xmlns='))s=s.replace('<svg ','<svg xmlns="http://www.w3.org/2000/svg" ');s=s.replace('fill="none"','fill="#fef7e6"');await fs.writeFile('public/assets/mana-logo.svg',s);}
const products=$('.productThumb').map((i,e)=>({name:$(e).find('.sousTitre').text().trim(),href:'https://en.manayerbamate.com'+$(e).find('a').attr('href'),image:local($(e).find('img.base').attr('src')),image2x:local($(e).find('img.base').attr('srcset')||''),hover:local($(e).find('img.hover').attr('src')),hover2x:local($(e).find('img.hover').attr('srcset')||'')})).get();
await fs.writeFile('src/products.json',JSON.stringify(products,null,2));
await Promise.all(inline);
let css=local(await fs.readFile('public/assets/app.css','utf8'));await fs.writeFile('src/original.css',css);
await fs.writeFile('audit/sections.json',JSON.stringify(sections.map(([component,selector])=>({component,selector,sourceElements:$(selector).find('*').length})),null,2));
console.log('Extracted sections',sections.length,'inline SVGs',svgIndex,'products',products.length,'logo',logo.length);

import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
const root=process.cwd();
await fs.mkdir('public/assets',{recursive:true});await fs.mkdir('audit',{recursive:true});
const html=await fs.readFile('source.html','utf8');
const records=new Map();const queue=[];
function add(raw,base='https://en.manayerbamate.com/'){
 raw=raw.replaceAll('&amp;','&').replaceAll('\\/','/');
 if(raw.startsWith('data:')||raw.startsWith('#'))return;
 let url;try{url=new URL(raw,base).href}catch{return}
 if(!/\.(png|jpe?g|webp|gif|svg|woff2?|ttf|otf|json|gltf|glb|bin|hdr|css|js|mp4)(\?|$)/i.test(url))return;
 if(!/manayerbamate\.com|cdn\.shopify\.com/.test(url))return;
 if(/shopifycloud|extensions|trekkie|standard-actions|checkouts/.test(url))return;
 if(records.has(url))return;
 const filename=decodeURIComponent(new URL(url).pathname.split('/').pop());
 const rec={url,path:'/assets/'+filename};records.set(url,rec);queue.push(rec);
}
for(const m of html.matchAll(/(?:https?:)?\/\/[^\s"'<>]+/g))add(m[0]);
for(let i=0;i<queue.length;i+=6){await Promise.all(queue.slice(i,i+6).map(async r=>{
 try{const res=await fetch(r.url);if(!res.ok)throw Error('HTTP '+res.status);const data=Buffer.from(await res.arrayBuffer());await fs.writeFile(path.join(root,'public',r.path),data);r.bytes=data.length;r.sha256=crypto.createHash('sha256').update(data).digest('hex');r.status=200;
 if(/\.(css|js|gltf|json)(\?|$)/.test(r.url)){let s=data.toString();for(const m of s.matchAll(/(?:https?:)?\/\/[^\s"'<>\)]+/g))add(m[0],r.url);for(const m of s.matchAll(/url\(["']?([^\)"']+)|"uri"\s*:\s*"([^"]+)"/g))add(m[1]||m[2],r.url);}
 console.log(r.path,data.length);
 }catch(e){r.status='failed';r.error=e.message;console.log('FAILED',r.url,e.message)}
}));}
await fs.writeFile('audit/assets.json',JSON.stringify([...records.values()],null,2));
console.log('TOTAL',records.size,'FAILED',[...records.values()].filter(r=>r.status!==200).length);

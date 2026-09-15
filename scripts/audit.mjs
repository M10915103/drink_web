import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import zlib from 'node:zlib';
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
async function list(dir){const result=[];for(const e of await fs.readdir(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())result.push(...await list(p));else result.push(p);}return result;}
const files=await list('public/assets'),records=[];
for(const p of files){const data=await fs.readFile(p);records.push({path:p.replaceAll('\\','/'),bytes:data.length,sha256:hash(data)});}
const manifest=JSON.parse(await fs.readFile('audit/assets.json','utf8'));
const missing=[];for(const r of manifest){try{await fs.access('public'+r.path);}catch{missing.push(r.path);}}
const dependencies=[];
for(const p of files.filter(f=>/\.(gltf|json)$/.test(f))){const data=JSON.parse(await fs.readFile(p,'utf8'));const refs=[...(data.buffers||[]),...(data.images||[])].map(x=>x.uri).filter(Boolean);for(const ref of refs){if(ref.startsWith('data:'))continue;try{await fs.access(path.join(path.dirname(p),decodeURIComponent(ref)));}catch{dependencies.push({from:p,missing:ref});}}}
const built=[];for(const p of await list('dist')){const b=await fs.readFile(p);built.push({path:p.replaceAll('\\','/'),bytes:b.length,gzipBytes:zlib.gzipSync(b).length,sha256:hash(b)});}
const report={generatedAt:new Date().toISOString(),source:'https://en.manayerbamate.com/',downloadRecords:manifest.length,successfulDownloads:manifest.filter(r=>r.status===200).length,uniqueLocalAssets:records.length,assetBytes:records.reduce((n,r)=>n+r.bytes,0),missing,missingNestedDependencies:dependencies,buildBytes:built.reduce((n,r)=>n+r.bytes,0),code:built.filter(r=>/\.(js|css)$/.test(r.path)&&!r.path.endsWith('/global.js')&&!r.path.endsWith('/app.css')),buildFingerprint:hash(Buffer.from(built.map(r=>r.path+':'+r.sha256).sort().join('\n'))),assets:records,build:built};
await fs.writeFile('audit/build-report.json',JSON.stringify(report,null,2));
console.log(JSON.stringify({...report,assets:undefined,build:undefined},null,2));
if(missing.length||dependencies.length)process.exitCode=1;

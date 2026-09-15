from PIL import Image,ImageChops,ImageStat,ImageEnhance,ImageDraw
from pathlib import Path
import json
root=Path(__file__).resolve().parent.parent
shots=root/'audit/screenshots'
results=[]
for section,phase in [('hero','before'),('hero','after'),('footer','before'),('footer','after'),('products','after'),('subscription','after')]:
 a=Image.open(shots/f'reference-{section}.png').convert('RGB')
 b=Image.open(shots/f'local-{section}-{phase}.png').convert('RGB')
 if a.size!=b.size:raise ValueError(f'Mismatched viewport: {section} {a.size} {b.size}')
 diff=ImageChops.difference(a,b)
 mae=sum(ImageStat.Stat(diff).mean)/3
 threshold=diff.convert('L').point(lambda x:255 if x>24 else 0)
 changed=ImageStat.Stat(threshold).mean[0]/255*100
 score=100*(1-mae/255)
 diff=ImageEnhance.Contrast(diff).enhance(3)
 diff.save(shots/f'difference-{section}-{phase}.png')
 results.append({'section':section,'phase':phase,'viewport':a.size,'score':round(score,2),'meanAbsoluteChannelError':round(mae,3),'pixelsOver24Percent':round(changed,2)})
 if phase=='after':
  w,h=a.size;canvas=Image.new('RGB',(w*3,h+38),'#fef7e6');draw=ImageDraw.Draw(canvas)
  for i,(im,label) in enumerate([(a,'ORIGINAL'),(b,'REACT'),(diff,'DIFFERENCE x3')]):canvas.paste(im,(i*w,38));draw.text((i*w+20,12),label,fill='#0e0e0e')
  canvas.resize((1920,round(canvas.height*1920/canvas.width))).save(shots/f'compare-{section}.jpg',quality=90)
data={'method':'100 × (1 − RGB mean absolute error / 255). Full viewport, no masks. Not SSIM or a claim of exact visual identity. Lottie frames and pointer positions are not synchronized.','results':results}
(root/'audit/visual-scores.json').write_text(json.dumps(data,indent=2),encoding='utf-8')
print(json.dumps(data,indent=2))

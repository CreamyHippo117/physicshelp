#!/usr/bin/env python3
"""Pack the app into ONE self-contained file: dist/physics-c-coach.html (no server, works offline)."""
import re,base64,os
R=os.path.dirname(os.path.abspath(__file__)); rd=lambda p:open(os.path.join(R,p),encoding='utf-8').read()
css=rd('js/vendor/katex.min.css')
def font(m):
    d=base64.b64encode(open(os.path.join(R,'js/vendor/fonts',m.group(1)),'rb').read()).decode()
    return 'url(data:font/woff2;base64,%s)'%d
css=re.sub(r'url\(fonts/([^)]+\.woff2)\)',font,css)+'\n'+rd('css/style.css')
man=re.search(r'files=\[(.*?)\]',rd('content/manifest.js')).group(1)
files=re.findall(r'"([^"]+)"',man)
js=['js/vendor/katex.min.js','js/vendor/auto-render.min.js','js/core.js','js/examfacts.js']+['content/%s.js'%f for f in files]+['js/app.js']
body=''.join('<script>\n%s\n</script>\n'%rd(j).replace('</script','<\\/script') for j in js)
html=rd('index.html')
html=re.sub(r'<link rel="stylesheet" href="js/vendor/katex.min.css">\s*<link rel="stylesheet" href="css/style.css">','<style>\n'+css.replace('\\','\\\\')+'\n</style>',html)
html=re.sub(r'<script src=.*?</script>\s*','',html,flags=re.S).replace('</body>',body+'</body>')
os.makedirs(os.path.join(R,'dist'),exist_ok=True)
open(os.path.join(R,'dist/physics-c-coach.html'),'w',encoding='utf-8').write(html)
print('dist/physics-c-coach.html',round(len(html)/1e6,2),'MB')

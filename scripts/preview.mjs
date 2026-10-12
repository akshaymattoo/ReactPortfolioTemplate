import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('build');
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.gif':'image/gif','.svg':'image/svg+xml','.xml':'application/xml','.ico':'image/x-icon'};
http.createServer(async(req,res)=>{
  try {
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    let file=path.resolve(root,'.'+pathname);
    if(file!==root && !file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
    let stat=await fs.stat(file).catch(()=>null);
    if(stat?.isDirectory()) {file=path.join(file,'index.html');stat=await fs.stat(file).catch(()=>null);}
    // Existing article HTML wins. Only application routes use the SPA fallback.
    if(!stat && ['/', '/about','/blog','/portfolio'].includes(pathname.replace(/\/$/,'') || '/')) {file=path.join(root,'index.html');stat=await fs.stat(file);}
    if(!stat?.isFile()){res.writeHead(404).end('Not found');return;}
    res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});
    res.end(await fs.readFile(file));
  }catch {res.writeHead(400).end('Invalid request');}
}).listen(3002,'127.0.0.1',()=>console.log('Production preview: http://127.0.0.1:3002'));

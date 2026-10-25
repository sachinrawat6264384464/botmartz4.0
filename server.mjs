import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const portIndex = process.argv.indexOf('--port');
const port = Number(portIndex >= 0 ? process.argv[portIndex + 1] : (process.env.PORT || 3000));
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error('Use a valid port, for example: npm run dev -- --port 3001');
  process.exit(1);
}
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon' };
const server = http.createServer(async (req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, { Allow: 'GET, HEAD' }); res.end(); return; }
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const requested = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
    const file = path.resolve(root, requested);
    if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403); res.end('Forbidden'); return; }
    const ext = path.extname(file).toLowerCase();
    if (!types[ext]) { res.writeHead(404); res.end('Not found'); return; }
    if (!(await stat(file)).isFile()) { res.writeHead(404); res.end('Not found'); return; }
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[ext], 'Content-Length': body.length, 'Cache-Control': 'no-cache' });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch { res.writeHead(404); res.end('Not found'); }
});
server.on('error', (error) => { console.error(error.code === 'EADDRINUSE' ? `Port ${port} is busy. Run: npm run dev -- --port 3001` : error.message); process.exitCode = 1; });
server.listen(port, '127.0.0.1', () => console.log(`Botmartz is running at http://localhost:${port}
Press Ctrl+C to stop.`));

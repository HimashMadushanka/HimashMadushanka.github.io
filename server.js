const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const rootDirectory = path.resolve(__dirname);
const port = Number(process.env.PORT) || 8000;
const mimeTypes = {
    '.css': 'text/css; charset=utf-8',
    '.html': 'text/html; charset=utf-8',
    '.ico': 'image/x-icon',
    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpeg',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.pdf': 'application/pdf',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp'
};

http.createServer((request, response) => {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
        response.writeHead(405, { Allow: 'GET, HEAD' });
        response.end('Method not allowed');
        return;
    }

    let requestPath;
    try {
        requestPath = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    } catch {
        response.writeHead(400);
        response.end('Bad request');
        return;
    }

    const relativePath = requestPath === '/' ? 'index.html' : requestPath.replace(/^\/+/, '');
    const filePath = path.resolve(rootDirectory, relativePath);
    if (!filePath.startsWith(`${rootDirectory}${path.sep}`)) {
        response.writeHead(403);
        response.end('Forbidden');
        return;
    }

    if (relativePath.split(/[\\/]/).some(segment => segment.startsWith('.'))) {
        response.writeHead(404);
        response.end('Not found');
        return;
    }

    fs.stat(filePath, (statError, stats) => {
        if (statError || !stats.isFile()) {
            response.writeHead(404);
            response.end('Not found');
            return;
        }

        response.writeHead(200, {
            'Content-Length': stats.size,
            'Content-Type': mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
            'X-Content-Type-Options': 'nosniff'
        });

        if (request.method === 'HEAD') {
            response.end();
            return;
        }

        fs.createReadStream(filePath).pipe(response);
    });
}).listen(port, '127.0.0.1', () => {
    console.log(`Portfolio running at http://localhost:${port}`);
});

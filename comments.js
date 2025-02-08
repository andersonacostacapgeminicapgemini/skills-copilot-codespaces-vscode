//create web server using node.js
const http = require('http');
const fs = require('fs');
const url = require('url');

//create server
http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const filename = q.pathname === '/' ? 'index.html' : q.pathname.slice(1);
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end('404 Not Found');
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

// Output: 
// Open http://localhost:8080 in your browser to see the index.html page.
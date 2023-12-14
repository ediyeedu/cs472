const http = require('http');
const fs = require('fs');

const drive = http.createServer((re, rs) => {
     if (re.url === '/image') {
   
    rs.setHeader('Content-Type', 'image/jpeg'); 
    fs.createReadStream('./1329558.jpeg').pipe(rs); 
  } else if (re.url === '/pdf') {
    
    rs.setHeader('Content-Type', 'application/pdf'); 
    fs.createReadStream('./my.pdf').pipe(rs); 
  } else if (re.url === '/home') {
   
    rs.setHeader('Content-Type', 'text/plain');
    rs.end('Welcome to my website');
  } else {
    
    re.writeHead(404, { 'Content-Type': 'text/plain' });
    re.end('Not Found');
  }
});

const PORT = 3000;
drive.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
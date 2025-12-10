#!/usr/bin/env node
/**
 * Simple Node.js server para testar o formulário de contato
 * Simula a Netlify Function respondendo aos POSTs
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 8000;
const HOST = 'localhost';

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Handle contact form POST
  if (req.method === 'POST' && (req.url === '/api/contact' || req.url === '/.netlify/functions/contact')) {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        
        console.log('\n📧 CONTATO RECEBIDO:');
        console.log(`   Nome: ${data.name}`);
        console.log(`   Email: ${data.email}`);
        console.log(`   Telefone: ${data.phone || '(não informado)'}`);
        console.log(`   Assunto: ${data.subject || '(não informado)'}`);
        console.log(`   Mensagem: ${data.message}`);
        console.log('');

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          message: 'Email enviado com sucesso!'
        }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: false,
          message: 'Erro ao processar dados: ' + e.message
        }));
      }
    });

    return;
  }

  // Serve static files
  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = path.join(__dirname, filePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('404 - Arquivo não encontrado');
      return;
    }

    let contentType = 'text/html';
    if (filePath.endsWith('.js')) contentType = 'application/javascript';
    if (filePath.endsWith('.css')) contentType = 'text/css';
    if (filePath.endsWith('.json')) contentType = 'application/json';
    if (filePath.endsWith('.png')) contentType = 'image/png';
    if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) contentType = 'image/jpeg';
    if (filePath.endsWith('.svg')) contentType = 'image/svg+xml';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`
🚀 Servidor rodando em: http://${HOST}:${PORT}
📂 Servindo arquivos de: ${__dirname}

📖 Próximos passos:
   1. Abra http://${HOST}:${PORT} no navegador
   2. Role até a seção #contact
   3. Preencha o formulário e clique em "Enviar Mensagem"
   4. Verifique o console do navegador (F12) e aqui neste terminal

✋ Para parar: Ctrl+C
`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n\n✋ Servidor parado.');
  process.exit(0);
});

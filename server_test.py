#!/usr/bin/env python3
"""
Simple local server para testar o formulário de contato.
Simula a Netlify Function respondendo aos POSTs de /api/contact
"""

from http.server import HTTPServer, SimpleHTTPRequestHandler
import json
import os

PORT = 8000

class ContactHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        # Serve files normally
        super().do_GET()
    
    def do_POST(self):
        if self.path == '/api/contact':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            
            try:
                data = json.loads(body)
                print(f"\n📧 Contato recebido:")
                print(f"   Nome: {data.get('name')}")
                print(f"   Email: {data.get('email')}")
                print(f"   Telefone: {data.get('phone')}")
                print(f"   Assunto: {data.get('subject')}")
                print(f"   Mensagem: {data.get('message')}")
                
                # Responde com sucesso
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                response = json.dumps({'success': True, 'message': 'Email enviado com sucesso!'})
                self.wfile.write(response.encode())
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                response = json.dumps({'success': False, 'message': str(e)})
                self.wfile.write(response.encode())
        else:
            self.send_response(404)
            self.end_headers()
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

if __name__ == '__main__':
    # Get the directory where this script is located
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    server = HTTPServer(('localhost', PORT), ContactHandler)
    print(f"\n🚀 Servidor rodando em: http://localhost:{PORT}")
    print(f"📂 Servindo arquivos de: {os.getcwd()}")
    print(f"\nAbra seu navegador em: http://localhost:{PORT}")
    print(f"Tente enviar o formulário - as mensagens vão aparecer aqui.\n")
    
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n\n✋ Servidor parado.")
        server.shutdown()

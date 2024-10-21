from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import os
import mimetypes

class CORSRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        allowed_origins = ['http://localhost:5173', 'http://localhost:8888', 'https://localhost:5173', 'https://localhost:8888']
        if self.headers['Origin'] not in allowed_origins:
            self.send_response(403)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            return

        path = self.path

        if path == '/':
            self.send_response(200)
            self.send_header('Access-Control-Allow-Origin', self.headers['Origin'])
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            with open('articles.json', 'r') as f:
                data = json.load(f)
            self.wfile.write(json.dumps(data).encode())
        else:
            file_path = os.path.join(os.getcwd(), path[1:])
            if os.path.exists(file_path):
                self.send_response(200)
                self.send_header('Access-Control-Allow-Origin', self.headers['Origin'])
                mime_type, _ = mimetypes.guess_type(file_path)
                self.send_header('Content-type', mime_type)
                self.end_headers()
                with open(file_path, 'rb') as f:
                    self.wfile.write(f.read())
            else:
                self.send_response(404)
                self.send_header('Content-type', 'text/plain')
                self.end_headers()
                self.wfile.write(b'File not found')

def run_server():
    server_address = ('', 8888)
    httpd = HTTPServer(server_address, CORSRequestHandler)
    print('Running server on port 8888...')
    httpd.serve_forever()

run_server()
"""Tavern Dices API Enpoint"""
from http.server import BaseHTTPRequestHandler
import random
import json

class handler(BaseHTTPRequestHandler):
    """Handler for http request"""
    def do_POST(self):
        """Receive POST request"""
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data.decode('utf-8'))

        if 'dices' in data:
            data = data['dices'].split()
            try:
                result=""
                sum_of_dices = 0
                for dice in data:
                    rolls, limit = map(int, dice.split('d'))
                    result +=','+','.join(str(random.randint(1, limit)) for r in range(rolls))
                result = result[1:]
                values = result.split(sep=',')
                for value in values:
                    sum_of_dices += int(value)
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                response = {
                'dices': result,
                'sumofdices': sum_of_dices,
                }
                self.wfile.write(json.dumps(response).encode('utf-8'))
                return
            except Exception:
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                response = {
                    'dices': 'Por favor escreva os dados no formato NdN!',
                    'sumofdices': ''
                }
                self.wfile.write(json.dumps(response).encode('utf-8'))
                return
        else:
            self.send_response(400)
            self.end_headers()

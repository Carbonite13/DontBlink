from flask import Flask,render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio=SocketIO(app)

@app.route('/')
def __():
   return render_template('index.html')

@app.route('/shuffle',method="POST")
def handle_blink():
   socketio.emit("blinked",{"msg":"blue"})
   return 'signal detected'

app.run(port=9007,host='127.0.0.1')
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/data', methods=['POST'])
def get_data():
    data = request.get_json()
    print(data) # 웹에서 받은 데이터를 출력합니다.
    return jsonify({'message': 'success'}), 200

if __name__ == '__main__':
    app.run(port=5000, debug=True)

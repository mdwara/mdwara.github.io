from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://mdkutbul:Razi1234!@mdkutbul.mysql.pythonanywhere-services.com/mdkutbul$bmi'
db = SQLAlchemy(app)

class Data(db.Model):
    __tablename__ = "data"
    id = db.Column(db.Integer, primary_key=True)
    email_ = db.Column(db.String(120), unique=True)
    height_ = db.Column(db.Integer)
    weight_ = db.Column(db.Integer)

    def __init__(self, email, height, weight):
        self.email_ = email
        self.height_ = height
        self.weight_ = weight

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/thankyou", methods=['POST'])
def thankyou():
    if request.method == 'POST':
        email = request.form["email_name"]
        height = request.form["height_name"]
        weight = request.form["weight_name"]
        print(request.form)

        data = Data(email, height, weight)
        db.session.add(data)
        db.session.commit()

        return render_template("thankyou.html")

if __name__ == '__main__':
    with app.app_context():
        db.create_all()

    app.debug = True
    app.run()





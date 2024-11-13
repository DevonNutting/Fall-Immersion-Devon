# Import the Flask class from the flask library
from flask import Flask

# Create a flask application in a variable named 'myApp'
myApp = Flask(__name__)

# Create a route within the flask app
# The index function will be called when loading the home page of the app
@myApp.route('/')
def index():
    return "Hello World!"

# Check if the script is being run directly and not being imported
# Runs the flask app with debug mode on, which enables error messages
# and automatically reloads the page after editing the codebase
if __name__ == '__main__':
    myApp.run(debug = True)

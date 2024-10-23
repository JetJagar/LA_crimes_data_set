from flask import Flask, jsonify, render_template
from sqlalchemy import create_engine
import pandas as pd

app = Flask(__name__)

# Set up database connection
engine = create_engine('postgresql://postgres:ut2024!@34.170.166.149:5432/postgres')

app = Flask(__name__, template_folder='.')
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/crime-data')
def crime_data():
    query = '''
   SELECT 
    location.lat, 
    location.lon, 
    crimedata.location, 
    crimedata.date_occ, 
    crimedata.date_rptd, 
    crime.crm_cd_desc AS crime_type
FROM 
    location
JOIN 
    crimedata ON location.location = crimedata.location
LEFT JOIN 
    crime ON crimedata.crm_cd = crime.crm_cd
LIMIT 100;




    '''
    df = pd.read_sql(query, con=engine)
    return jsonify(df.to_dict(orient="records"))

if __name__ == "__main__":
    app.run(debug=True)

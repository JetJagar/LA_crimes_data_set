# LA_crimes_data_set

## Project structure

    LA_crimes_data_set 
    │  
    ├── crime.ipynb
    ├── Data Engineering_Schema  
    ├── QBD - ERD_Screenshot.png  
    ├── Resources  
    │   ├── Crime_Data_from_2020_to_present.csv  
    └── README.md 
## Objective

This project leverages **ETL workflows** to extract, transform, and load crime data for Los Angeles (LA) into a structured **PostgreSQL database hosted on Google Cloud**. The purpose is to facilitate easy querying and analysis of crime patterns using a robust data pipeline. The project utilizes **four tables** to store transformed data and ensures that ethical practices are followed throughout the data processing steps.

---

## Instructions

### 1. Implement ETL Workflow for LA Crime Data  
- **Extract:** Pull raw crime data from public LA Crime data set.
- **Transform:** Clean and filter the data by removing duplicates, populating null values, and normalizing field names.  
- **Load:** Store the transformed data into the chosen database (Postgres).

As part of the ETL process we utilized the module great_expectations for Python data cleaning and transformation.
The great_expectations module is a powerful open-source framework used in data engineering for data quality and validation in Python. It helps ensure that the data being processed meets certain quality standards before it's used in further analysis or machine learning models. With great_expectations, you can define and enforce expectations about your data, such as its structure, values, and distribution, and catch data issues early in your data pipeline.

### 2. Database Structure  
- **Choice of Database:**  
Since the source of our data was in CSV files we dcided it would be best to utilize a relation databse, we utilized Postgre SQL for our DB and stored it in the cloud utilizing Google Cloud for Postgre SQL.
Hosting PostgreSQL on Google Cloud combines the power and flexibility of a widely-used open-source database with the benefits of a fully managed, scalable, and secure cloud infrastructure. This makes it ideal for enterprises, startups, and developers who want to avoid the complexities of managing a database while taking advantage of the cloud's capabilities.

- **Tables:**  
  - **Crime Reports (crimedata):** Contains reported crime details such as reported date, date/time crime occurred, geographic area code, crime code, location code, and official file number.  
  - **Look up tables:**
    - **Geographic Area (address):** Stores area name for geographic area code
    - **Crime Code (address):** Stores crime code description for crime code
    - **Crime location (location):** Stores latitude and longitude for location code
      
### 3. Visualize and Interact with Data  
- **Display Data via Pandas:**  
  Using **Pandas DataFrames** to display insights, such as the number of crimes by type or location. This project uses an interactive map to display crime data in Los Angeles. The map is built using Leaflet.js, which allows users to explore crime incidents by hovering over markers for detailed information about the crime type, location, and dates. Data is retrieved from a Flask API that queries a PostgreSQL database containing crime records. Each marker on the map represents a crime location, and users can click on the markers to see a popup with details of the crime, such as "Crime Type," "Location," "Date Occurred," and "Date Reported."

You can view the mapping output below.
This description highlights the interactivity and technical structure of the mapping functionality.
![Mapping Output](output/mapping.png)
Link:


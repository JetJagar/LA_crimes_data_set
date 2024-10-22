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

### 2. Database Structure  
- **Choice of Database:**  
  [Document the database used and the rationale behind the choice, e.g., SQL for structured analysis or MongoDB for unstructured or semi-structured data.]

- **Tables or Collections:**  
  - **Crime Reports:** Contains details like crime type, date, time, location (latitude, longitude), and report ID.  
  - **Precinct Information:** Stores data about law enforcement jurisdictions or stations, linked to crime reports.

### 3. Visualize and Interact with Data  
- **Display Data via Pandas:**  
  Using **Pandas DataFrames** to display insights, such as the number of crimes by type or location.  


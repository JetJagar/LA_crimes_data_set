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



## Instructions

Extract: The initial phase of the ETL process involved systematically loading crime data from a CSV file into a pandas DataFrame. This step serves as the foundation for subsequent transformations, enabling efficient data manipulation and analysis.
Transform: During the transformation phase, the raw data was meticulously processed to create several specialized DataFrames corresponding to distinct database tables: crimedata, address, crime_code, and location. The data underwent rigorous cleaning, which included renaming columns for clarity and consistency, as well as removing duplicate entries to ensure the integrity of the dataset. Once transformed, these DataFrames were exported as separate CSV files, facilitating organized storage and easy access for the loading phase.
Load: In the loading stage, a robust connection to a PostgreSQL database was established, allowing for seamless integration of the cleaned data. The refined datasets were imported from the previously generated CSV files into their respective tables within the PostgreSQL database, ensuring that the data was structured appropriately for future queries and analyses.
Validation: To ensure the reliability of the ETL process, comprehensive validation checks were performed. This involved executing SQL queries against the database to confirm that the data had been accurately loaded, thereby verifying the success of the entire ETL workflow. This step is crucial, as it not only assures data integrity but also reinforces the credibility of any subsequent analyses conducted on the imported datasets.
This structured approach to ETL not only enhances data quality but also lays the groundwork for informed decision-making based on accurate and well-organized data.
4:50

### 1. 
-
- 

### 2. 
- 
- 

### 3. 
- 
- 

### 4. 



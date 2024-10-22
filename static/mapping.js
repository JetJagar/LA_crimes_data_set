// Initialize the map and set the view to Los Angeles
var map = L.map('map').setView([34.0522, -118.2437], 11);

// Add a tile layer (the background of the map)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fetch crime data from Flask API
fetch('/crime-data')
    .then(response => response.json())
    .then(data => {
        // Loop through the data and add markers to the map
        data.forEach(crime => {
            const popupContent = `
                <b>Crime Type:</b> ${crime.crime_type || 'Unknown'}<br>
                <b>Location:</b> ${crime.location}<br>
                <b>Date Occurred:</b> ${new Date(crime.date_occ).toUTCString()}<br>
                <b>Date Reported:</b> ${new Date(crime.date_rptd).toUTCString()}
            `;

            // Add marker to the map
            L.marker([crime.lat, crime.lon]).addTo(map)
                .bindPopup(popupContent);
        });
    })
    .catch(error => {
        console.error('Error fetching crime data:', error);
    });

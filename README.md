# PriceLabs Booking.com Listing Scraper

A Node.js script that retrieves hotel listing data from Booking.com's GraphQL API and exports it to a CSV file. It extracts specific fields—Listing ID, Listing Title, Page Name, and Amount Per Stay—using user-specified location coordinates and page size.

## Features
- Retrieves listing data via Booking.com's GraphQL API.
- Exports data to `listings.csv` with the specified fields.
- Modular structure with dedicated files for API requests, data parsing, CSV generation, and configuration.
- Validates latitude, longitude, and page size inputs.
- Robust error handling and detailed logging for troubleshooting.
- Employs the complete GraphQL query to ensure API schema compatibility.

## Prerequisites
- **Node.js**: Version 14.x or higher.
- **npm**: Included with Node.js.
- **Internet Connection**: Necessary for accessing the Booking.com API.

## Installation
1. Clone the repository and set up the project:
   ```bash
   git clone https://github.com/Ritik92/script.git
   cd script
   npm install
2. Run
    ```bash
   node app.js
   
   

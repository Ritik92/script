const { createObjectCsvWriter } = require('csv-writer');

async function writeCsv(listings) {
  const csvWriter = createObjectCsvWriter({
    path: 'listings.csv',
    header: [
      { id: 'listingId', title: 'Listing ID' },
      { id: 'listingTitle', title: 'Listing Title' },
      { id: 'pageName', title: 'Page Name' },
      { id: 'amountPerStay', title: 'Amount Per Stay' },
    ],
  });

  try {
    await csvWriter.writeRecords(listings);
    console.log('CSV file "listings.csv" generated successfully.');
  } catch (error) {
    throw new Error(`Failed to write CSV: ${error.message}`);
  }
}

module.exports = { writeCsv };
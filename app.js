const { fetchListings } = require('./api');
const { extractListingData } = require('./dataParser');
const { writeCsv } = require('./csvWriter');

async function main() {
  // Get command-line arguments
  const [address, lat, lon, pageSize] = process.argv.slice(2);

  // Input validation
  if (!address || !lat || !lon || !pageSize) {
    console.error('Usage: node app.js <address> <latitude> <longitude> <pageSize>');
    process.exit(1);
  }

  const latNum = parseFloat(lat);
  const lonNum = parseFloat(lon);
  const pageSizeNum = parseInt(pageSize, 10);

  if (isNaN(latNum) || latNum < -90 || latNum > 90 ||
      isNaN(lonNum) || lonNum < -180 || lonNum > 180 ||
      isNaN(pageSizeNum) || pageSizeNum <= 0) {
    console.error('Invalid inputs: Latitude (-90 to 90), Longitude (-180 to 180), Page size (> 0)');
    process.exit(1);
  }

  try {
    console.log('Fetching listings...');
    const results = await fetchListings(address, latNum, lonNum, pageSizeNum);

    if (results.length === 0) {
      console.log('No listings found.');
      return;
    }

    console.log(`Found ${results.length} listings. Processing data...`);
    const listings = extractListingData(results);

    console.log('Writing to CSV...');
    await writeCsv(listings);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
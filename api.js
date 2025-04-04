const axios = require('axios');
const fs = require('fs');
const { API_URL, HEADERS, TEMPLATE_INPUT } = require('./config');

// Load GraphQL query from file
const QUERY = fs.readFileSync('./query.graphql', 'utf8');

function buildVariables(address, lat, lon, pageSize) {
  const input = JSON.parse(JSON.stringify(TEMPLATE_INPUT));
  input.location.searchString = address;
  input.location.latitude = lat;
  input.location.longitude = lon;
  input.pagination.rowsPerPage = pageSize;
  return {
    input,
    carouselLowCodeExp: false,
  };
}

async function fetchListings(address, lat, lon, pageSize) {
  const variables = buildVariables(address, lat, lon, pageSize);
  try {
    const response = await axios.post(API_URL, {
      operationName: 'FullSearch',
      variables,
      query: QUERY,
    }, { headers: HEADERS });

    const data = response.data;
    if (data.errors) {
      console.error('GraphQL errors:', JSON.stringify(data.errors, null, 2));
      return [];
    }

    return data.data?.searchQueries?.search?.results || [];
  } catch (error) {
    throw new Error(`API request failed: ${error.message}`);
  }
}

module.exports = { fetchListings };
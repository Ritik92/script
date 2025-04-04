function extractListingData(results) {
    return results.map(result => ({
      listingId: result.basicPropertyData.id,
      listingTitle: result.displayName.text,
      pageName: result.basicPropertyData.pageName,
      amountPerStay: result.priceDisplayInfoIrene?.displayPrice?.amountPerStay?.amount ?? 'N/A',
    }));
  }
  
  module.exports = { extractListingData };
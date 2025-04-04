const API_URL = 'https://www.booking.com/dml/graphql';

const HEADERS = {
  'accept': '*/*',
  'content-type': 'application/json',
  'cookie': 'your_cookie_here', // Replace with valid cookie
  'origin': 'https://www.booking.com',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
  'x-booking-csrf-token': 'your_csrf_token_here', // Replace with valid CSRF token
};

const TEMPLATE_INPUT = {
  acidCarouselContext: null,
  childrenAges: [],
  dates: {
    checkin: "2024-06-18",
    checkout: "2024-06-19",
  },
  doAvailabilityCheck: false,
  encodedAutocompleteMeta: null,
  enableCampaigns: true,
  filters: {
    selectedFilters: "distance=3000",
  },
  selectedFilterSources: ["PREVIOUS"],
  flexibleDatesConfig: {
    broadDatesCalendar: {
      checkinMonths: [],
      los: [],
      startWeekdays: [],
    },
    dateFlexUseCase: "DATE_RANGE",
    dateRangeCalendar: {
      checkin: ["2024-06-18"],
      checkout: ["2024-06-19"],
    },
  },
  forcedBlocks: null,
  location: {
    searchString: "",
    destType: "LATLONG",
    latitude: 0,
    longitude: 0,
  },
  metaContext: {
    metaCampaignId: 0,
    externalTotalPrice: null,
    feedPrice: null,
    hotelCenterAccountId: null,
    rateRuleId: null,
    dragongateTraceId: null,
    pricingProductsTag: null,
  },
  nbRooms: 1,
  nbAdults: 1,
  nbChildren: 0,
  showAparthotelAsHotel: true,
  needsRoomsMatch: false,
  optionalFeatures: {
    forceArpExperiments: true,
    testProperties: false,
  },
  pagination: {
    rowsPerPage: 50,
    offset: 0,
  },
  rawQueryForSession: "",
  referrerBlock: null,
  sbCalendarOpen: false,
  sorters: {
    selectedSorter: null,
    referenceGeoId: null,
    tripTypeIntentId: null,
  },
  travelPurpose: 2,
  seoThemeIds: [],
  useSearchParamsFromSession: true,
  merchInput: {
    testCampaignIds: [],
  },
};

module.exports = { API_URL, HEADERS, TEMPLATE_INPUT };
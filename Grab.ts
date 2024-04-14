type OpeningHours = {
  open: boolean;
  displayedHours: string;
  sun: string;
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
};

type PriceV2 = {
  amountInMinor: number;
  amountDisplay: string;
};

type Campaign = {
  campaignID: string;
  campaignTags: { tag: string }[];
  decisionID: string;
  attributionData: AttributionData;
};

type AttributionData = {
  decisionID: string;
  discoveryID: string;
  campaignID: string;
};

type Modifier = {
  ID: string;
  name: string;
  available: boolean;
  priceInMinorUnit: number;
  sortOrder: number;
  priceV2: PriceV2;
  CustomisedData: CustomisedData;
};

type CustomisedData = {
  Name: { Value: { en: string } };
};

type ModifierGroup = {
  ID: string;
  name: string;
  available: boolean;
  selectionType: number;
  selectionRangeMax: number;
  modifiers: Modifier[];
  CustomisedData: CustomisedData;
};

type MenuItem = {
  ID: string;
  name: string;
  available?: boolean;
  priceInMinorUnit: number;
  description?: string;
  sortOrder: number;
  campaignID?: string;
  campaignName?: string;
  discountedPriceInMin: number;
  priceV2: PriceV2;
  discountedPriceV2: PriceV2;
  metadata?: string;
  discountPercentage?: string;
  itemAttributes?: { displayedTexts: {} };
  takeawayPriceInMin: number;
  discountedTakeawayPriceInMin: number;
  merchantID: string;
  campaigns?: Campaign[];
  imgHref?: string;
  thumbImages?: string[];
  images?: string[];
  imgHrefFallback?: string;
  modifierGroups?: ModifierGroup[];
  recommendationSource?: number;
  discoveryMetadata?: DiscoveryMetadata;
  topSeller?: string[];
};

type DiscoveryMetadata = {
  discovery: {
    requestID: string;
    service: string;
    method: string;
    discoverID: string;
  };
};

type MenuCategory = {
  name: string;
  available: boolean;
  items: MenuItem[];
  sortOrder: number;
  categoryType?: number;
  elementCards?: ElementCard[];
  ID?: string;
  CustomisedData?: CustomisedData;
  createdAt?: { seconds: number; nanos: number };
};

type ElementCard = {
  type: number;
  item: MenuItem;
};

type CampaignInfo = {
  ID: string;
  campaignLevel: string;
  startTime: { seconds: number };
  endTime: { seconds: number };
  label: string;
  name: string;
  priority: string;
  status: string;
  tcDetails: string[];
  decisionID: string;
  attributionData: AttributionData;
};

type TimeSlot = {
  from: { seconds: number };
  to: { seconds: number };
  available: boolean;
};

type ScheduleTimeSlot = {
  timeSlots: TimeSlot[];
};

type Merchant = {
  ID: string;
  name: string;
  cuisine: string;
  photoHref: string;
  timeZone: string;
  ETA: number;
  openingHours: OpeningHours;
  isIntegrated: boolean;
  distanceInKm: number;
  section: string;
  latlng: { latitude: number; longitude: number };
  menu: {
    categories: MenuCategory[];
    menuMeta: MenuMeta;
    campaigns: CampaignInfo[];
    stackableOfferOption: number;
  };
  currency: { code: string; symbol: string };
  rating: number;
  voteCount: number;
  deliverBy: string;
  radius: number;
  estimatedDeliveryFee: EstimatedDeliveryFee;
  promo: Promo;
  schedulerOrderConfig: SchedulerOrderConfig;
  deliveryOptions: string[];
  sectionOpenHours: OpeningHours;
  popularItems: MenuItem[];
  status: string;
  sofConfiguration: SofConfiguration;
  businessType: string;
  ratingDetail: RatingDetail[];
  serviceBasedMenuEnabled: boolean;
  merchantGroupID: string;
  photoHrefFallback: string;
  menuLanguageList: MenuLanguage[];
  menuTranslationInfo: MenuTranslationInfo;
};

type MenuMeta = {
  orderValueLimit: number;
  noLocationOrderValueLimit: number;
};

type EstimatedDeliveryFee = {
  currency: { code: string; symbol: string };
  price: number;
  priceDisplay: string;
  multiplier: number;
  priceDisplayHtml: string;
  hasDiscountedPrice: boolean;
};

type Promo = {
  hasPromo: boolean;
  description: string;
};

type SchedulerOrderConfig = {
  enableScheduleOrder: boolean;
  scheduleTimeSlots: ScheduleTimeSlot[];
  scheduleTimeSpan: number;
  scheduleIntervalTime: number;
  preSelectedStartTime: { seconds: number };
  minAdvancePeriodInMin: number;
};

type SofConfiguration = {
  thresholdInMin: number;
  thresholdForDisplay: PriceV2;
  calculationMode: string;
  fixFeeInMin: number;
  fixFeeForDisplay: PriceV2;
};

type RatingDetail = {
  score: number;
  voteCountPercentage: number;
};

type MenuLanguage = {
  languageCode: string;
  content: string;
  isAppliedOnMenu?: boolean;
  subtitle?: string;
};

type MenuTranslationInfo = {
  menuLanguageSheet: MenuLanguageSheet;
};

type MenuLanguageSheet = {
  title: string;
  menuLanguageList: MenuLanguage[];
};

type MerchantResult = {
  merchant: Merchant;
  promotions: any;
  enableServiceBasedMenu: boolean;
  enableSTO: boolean;
};

export type {
  OpeningHours,
  PriceV2,
  Campaign,
  AttributionData,
  Modifier,
  CustomisedData,
  ModifierGroup,
  MenuItem,
  DiscoveryMetadata,
  MenuCategory,
  ElementCard,
  CampaignInfo,
  TimeSlot,
  ScheduleTimeSlot,
  Merchant,
  MenuMeta,
  EstimatedDeliveryFee,
  Promo,
  SchedulerOrderConfig,
  SofConfiguration,
  RatingDetail,
  MenuLanguage,
  MenuTranslationInfo,
  MenuLanguageSheet,
  MerchantResult,
};

//category
type Address = {
  name: string;
};

type LatLng = {
  latitude: number;
  longitude: number;
};

type OpenHours = {
  open?: boolean;
  displayedHours: string;
  sun: string;
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
  tempClosed?: boolean;
};

type Currency = {
  code: string;
  symbol: string;
};

type PromoInfo = {
  hasPromo?: boolean;
  description?: string;
};

type StatusInfo = {
  status: string;
  statusText?: string;
  tipText?: string;
};

type SideLabel = {
  type: string;
  displayedTextHtmlFormat: string;
  backgroundColor: string;
  displayedText: string;
  icon: string;
  attributionData?: {
    decisionID?: string;
    discoveryID?: string;
    campaignID?: string;
  };
  shortDisplayedTag?: string;
};

type Source = {
  type: string;
  ID: string;
  displayIndex?: number;
};

type BottomTextLabel = {
  textContent: string;
  backgroundColorHex: string;
  fontColorHex: string;
  sortOrder: number;
  type: string;
};

type LittleIconLabel = {
  littleIconLabelURL: string;
  labelText: string;
  labelDescription: string;
  labelID: string;
  labelName: string;
};

type SearchResultMerchant = {
  id: string;
  address: Address;
  latlng: LatLng;
  estimatedDeliveryTime: number;
  merchantBrief: {
    cuisine: string[];
    photoHref: string;
    smallPhotoHref: string;
    iconHref?: string;
    isIntegrated: boolean;
    openHours: OpenHours;
    distanceInKm: number;
    rating?: number;
    vote_count?: number;
    promo: PromoInfo;
    deliverBy: string;
    photoHrefFallback: string;
    smallPhotoHrefFallback: string;
    iconHrefFallback?: string;
    closedText?: string;
    closedTextType?: string;
  };
  chainID?: string;
  chainName?: string;
  estimatedDeliveryFee: {
    currency: Currency;
    price: number;
    priceDisplay: string;
    multiplier: number;
    priceDisplayHtml: string;
    discountedPrice?: number;
    hasDiscountedPrice: boolean;
  };
  merchantStatusInfo: StatusInfo;
  sideLabels?: {
    data: SideLabel[];
    metadata: {
      sources: Source[];
    };
  };
  businessType?: string;
  score?: number;
  branchMerchants?: SearchResultMerchant[];
  branchName?: string;
  littleIconLabel?: LittleIconLabel[];
  bottomTextLabelMaps?: {
    "Saver Delivery Available": BottomTextLabel;
  };
  withSaverDeliveryOption?: boolean;
};

type SearchResult = {
  searchID: string;
  totalCount: number;
  searchMerchants: SearchResultMerchant[];
  offset: number;
  hasMore: boolean;
};

type BottomTextLabelMaps = {
  "Saver Delivery Available": BottomTextLabel;
};

type BottomTextLabels = {
  textContent: string;
  backgroundColorHex: string;
  fontColorHex: string;
  sortOrder: number;
  type: string;
};

type CategoryResult = {
  categoryName: string;
  categoryImageURL: string;
  categoryDescription: string;
  searchResult: SearchResult;
  shortcutID: string;
  categoryImageURLFallback: string;
};

export type {
  Address,
  LatLng,
  OpenHours,
  Currency,
  PromoInfo,
  StatusInfo,
  SideLabel,
  Source,
  BottomTextLabel,
  LittleIconLabel,
  SearchResultMerchant,
  SearchResult,
  BottomTextLabelMaps,
  BottomTextLabels,
  CategoryResult,
};

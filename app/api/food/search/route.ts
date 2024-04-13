import axios from "axios";

export async function POST(req: Request) {
  const body = await req.json();
  const data = await axios
    .post("https://portal.grab.com/foodweb/v2/search", body)
    .catch((err) => {
      return { data: undefined };
    });

  return Response.json(data.data);
}

export type FoodSearchResult = {
  searchResult: {
    searchID: string;
    totalCount: number;
    searchMerchants: {
      id: string;
      address: {
        name: string;
      };
      latlng: {
        latitude: number;
        longitude: number;
      };
      estimatedDeliveryTime: number;
      merchantBrief: {
        cuisine: Array<string>;
        photoHref: string;
        smallPhotoHref: string;
        isIntegrated: boolean;
        openHours: {
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
        distanceInKm: number;
        rating: number;
        vote_count: number;
        promo: {
          hasPromo?: boolean;
          description?: string;
        };
        deliverBy: string;
        displayInfo: {
          primaryText: string;
        };
        priceTag?: number;
        deliverOptions: string;
        photoHrefFallback: string;
        smallPhotoHrefFallback: string;
        secondaryCuisine?: Array<string>;
        operationHours?: string;
      };
      estimatedDeliveryFee: {
        currency: {
          code: string;
          symbol: string;
        };
        price: number;
        priceDisplay: string;
        multiplier: number;
        priceDisplayHtml: string;
        hasDiscountedPrice: boolean;
        discountedPrice?: number;
      };
      dishes?: Array<{
        ID: string;
        name: string;
        available: boolean;
        priceInMinorUnit: number;
        imgHref?: string;
        description?: string;
        sortOrder: number;
        discountedPriceInMin: number;
        priceV2: {
          amountInMinor: number;
          amountDisplay: string;
        };
        discountedPriceV2: {
          amountInMinor: number;
          amountDisplay: string;
        };
        metadata?: string;
        itemAttributes: {};
        discoveryMetadata: {
          origin: Array<string>;
          discovery: {
            requestID: string;
            service: string;
            method: string;
            discoverID: string;
          };
        };
        takeawayPriceInMin: number;
        discountedTakeawayPriceInMin: number;
        merchantID: string;
        currency: string;
        thumbImages?: Array<string>;
        images?: Array<string>;
        imgHrefFallback?: string;
        discountPercentage?: string;
        campaigns?: Array<{
          campaignID: string;
          campaignTags: Array<{
            tag: string;
            showType?: number;
          }>;
          decisionID: string;
          attributionData: {
            decisionID: string;
            discoveryID: string;
            campaignID: string;
          };
          campaignType?: string;
        }>;
        campaignID?: string;
        campaignName?: string;
      }>;
      merchantStatusInfo: {
        status: string;
      };
      sideLabels?: {
        data: Array<{
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
        }>;
        metadata: {
          sources: Array<{
            type: string;
            ID: string;
            displayIndex?: number;
          }>;
        };
      };
      businessType: string;
      bottomTextLabels?: Array<{
        textContent: string;
        backgroundColorHex: string;
        fontColorHex: string;
        sortOrder: number;
        type: string;
      }>;
      withSaverDeliveryOption?: boolean;
      isFixOrderBranch: boolean;
      collectionIDs?: Array<string>;
      reviews: {};
      chainID?: string;
      chainName?: string;
      branchMerchants?: Array<{
        id: string;
        address: {
          name: string;
        };
        latlng: {
          latitude: number;
          longitude: number;
        };
        estimatedDeliveryTime: number;
        merchantBrief: {
          cuisine: Array<string>;
          photoHref: string;
          smallPhotoHref: string;
          isIntegrated: boolean;
          openHours: {
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
          distanceInKm: number;
          rating: number;
          vote_count: number;
          promo: {
            hasPromo?: boolean;
            description?: string;
          };
          deliverBy: string;
          displayInfo: {
            primaryText: string;
          };
          priceTag: number;
          deliverOptions: string;
          photoHrefFallback: string;
          smallPhotoHrefFallback: string;
          secondaryCuisine?: Array<string>;
          iconHref?: string;
          iconHrefFallback?: string;
          operationHours?: string;
          closedText?: string;
          closedTextType?: string;
        };
        chainID: string;
        chainName: string;
        branchName: string;
        estimatedDeliveryFee?: {
          currency: {
            code: string;
            symbol: string;
          };
          price: number;
          priceDisplay: string;
          multiplier: number;
          priceDisplayHtml: string;
          discountedPrice?: number;
          hasDiscountedPrice: boolean;
        };
        merchantStatusInfo: {
          status: string;
          guideText?: string;
          earliestAvailableTime?: string;
        };
        sideLabels?: {
          data: Array<{
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
          }>;
          metadata: {
            sources: Array<{
              type: string;
              ID: string;
              displayIndex?: number;
            }>;
          };
        };
        businessType: string;
        bottomTextLabelMaps?: {
          "Saver Delivery Available": {
            textContent: string;
            backgroundColorHex: string;
            fontColorHex: string;
            sortOrder: number;
            type: string;
          };
        };
        withSaverDeliveryOption?: boolean;
        collectionIDs?: Array<string>;
        reviews: {};
      }>;
    }[];
    requestID: string;
    offset: number;
    hasMore: boolean;
    hasDishResult: boolean;
    announcements: Array<{
      desc: string;
      announcementDetail: {
        link: string;
      };
      iconUrl: string;
      backgroundUrl: string;
      backgroundColor: string;
    }>;
  };
};

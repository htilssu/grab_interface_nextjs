import axios from "axios";

export async function GET(req: Request) {
  const params = req.url.split("?")[1];
  const data = await axios
    .get(`https://portal.grab.com/foodweb/v2/category?${params}`)
    .catch((err) => {
      return { data: null };
    });

  return Response.json(data.data);
}

export type CategorySearchResult = {
  categoryName: string;
  categoryImageURL: string;
  categoryDescription: string;
  searchResult: {
    searchID: string;
    totalCount: number;
    searchMerchants: Array<{
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
        iconHref?: string;
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
        photoHrefFallback: string;
        smallPhotoHrefFallback: string;
        iconHrefFallback?: string;
      };
      chainID?: string;
      chainName?: string;
      estimatedDeliveryFee: {
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
      businessType?: string;
      score?: number;
      branchMerchants?: Array<{
        id: string;
        address: {
          name: string;
        };
        latlng: {
          latitude: number;
          longitude: number;
        };
        estimatedDeliveryTime?: number;
        merchantBrief: {
          cuisine: Array<string>;
          photoHref: string;
          smallPhotoHref: string;
          iconHref?: string;
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
          rating?: number;
          vote_count?: number;
          promo: {
            hasPromo?: boolean;
            description?: string;
          };
          deliverBy: string;
          photoHrefFallback: string;
          smallPhotoHrefFallback: string;
          iconHrefFallback?: string;
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
          hasDiscountedPrice: boolean;
          discountedPrice?: number;
        };
        merchantStatusInfo?: {
          status: string;
          statusText?: string;
          tipText?: string;
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
        littleIconLabel?: Array<{
          littleIconLabelURL: string;
          labelText: string;
          labelDescription: string;
          labelID: string;
          labelName: string;
        }>;
      }>;
      littleIconLabel?: Array<{
        littleIconLabelURL: string;
        labelText: string;
        labelDescription: string;
        labelID: string;
        labelName: string;
      }>;
      bottomTextLabels?: Array<{
        textContent: string;
        backgroundColorHex: string;
        fontColorHex: string;
        sortOrder: number;
        type: string;
      }>;
      withSaverDeliveryOption?: boolean;
      branchName?: string;
      bottomTextLabelMaps?: {
        "Saver Delivery Available": {
          textContent: string;
          backgroundColorHex: string;
          fontColorHex: string;
          sortOrder: number;
          type: string;
        };
      };
    }>;
    offset: number;
    hasMore: boolean;
  };
  shortcutID: string;
  categoryImageURLFallback: string;
};

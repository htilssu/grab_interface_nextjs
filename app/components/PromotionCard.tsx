import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Distance from "@/app/components/Distance";
import Rating from "@/app/components/Rating";
import VoucherTag from "@/app/components/VoucherTag";

interface PromotionCardProps {
  promotion?: {
    openHours: {
      thu: string;
      tue: string;
      displayedHours: string;
      wed: string;
      sat: string;
      fri: string;
      sun: string;
      mon: string;
      open: boolean;
    };
    specialItemType: null;
    address: string;
    city: string;
    hasPromo: boolean;
    estimatedDeliveryTime: number;
    latitude: number;
    rating: number;
    description: string;
    cuisine: string[];
    promoDescription: string;
    photoSmallHref: string;
    closedText: string;
    distanceInKm: number;
    photoHref: string;
    name: string;
    iconHref: string;
    isIntegrated: boolean;
    id: string;
    closingSoonText: string;
    longitude: number;
  };
}

const PromotionCard = ({ promotion }: PromotionCardProps) => {
  return (
    <div className={"hover:cursor-pointer"}>
      <a href={`/food?q=${1}`}>
        <Card variant="outlined">
          <CardMedia
            component={"img"}
            height={"140"}
            src={promotion?.photoHref}
            alt={"food"}
          />
          <CardContent>
            <div className={"font-bold md:text-base text-xl"}>
              {promotion?.name}
            </div>
            <span
              className={"flex md:text-sm items-center justify-between gap-2"}
            >
              <Rating rating={promotion?.rating} />
            </span>
            <Distance
              distance={{
                distance: promotion!.distanceInKm + " km",
                time: promotion!.estimatedDeliveryTime + " phút",
              }}
            />
            <div className={"flex items-center gap-3 mt-2"}>
              <VoucherTag voucher={promotion?.promoDescription} />
            </div>
          </CardContent>
        </Card>
      </a>
    </div>
  );
};

export default PromotionCard;

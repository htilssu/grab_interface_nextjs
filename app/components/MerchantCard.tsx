import { Card, CardContent, CardMedia } from "@mui/material";
import Distance from "@/app/components/Distance";
import Rating from "@/app/components/Rating";
import VoucherTag from "@/app/components/VoucherTag";

interface PromotionCardProps {
  merchant: {
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

const MerchantCard = ({ merchant }: PromotionCardProps) => {
  return (
    <div className={"hover:cursor-pointer"}>
      <a href={`/food?q=${1}`}>
        <Card variant="outlined">
          <CardMedia
            component={"img"}
            height={"140"}
            src={merchant?.photoHref}
            alt={"food"}
          />
          <CardContent>
            <div className={"font-bold md:text-base text-xl"}>
              {merchant?.name}
            </div>
            <span
              className={"flex md:text-sm items-center justify-between gap-2"}
            >
              <Rating rating={merchant?.rating} />
            </span>
            <Distance
              distance={{
                distance: merchant!.distanceInKm + " km",
                time: merchant!.estimatedDeliveryTime + " phút",
              }}
            />
            <div className={"flex items-center gap-3 mt-2"}>
              <VoucherTag voucher={merchant?.promoDescription} />
            </div>
          </CardContent>
        </Card>
      </a>
    </div>
  );
};

export default MerchantCard;

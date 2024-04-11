import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import testImg from "../../public/img1.webp"
import Distance from "@/app/components/Distance";
import Rating from "@/app/components/Rating";
import VoucherTag from "@/app/components/VoucherTag";

const ShopCard = () => {
    return (
        <div className={"hover:cursor-pointer"}>

            <a href={`/food?q=${1}`}><Card variant="outlined">
                <CardMedia
                    component={"img"}
                    height={"140"}
                    image={testImg.src}
                    alt={"food"}
                />
                <CardContent>
                    <Typography variant="h6" color="black" align={"left"}
                                sx={{
                                    fontWeight: "bold"
                                }}>
                        Quán ăn 3
                    </Typography>
                    <Typography variant="body1" align="left" sx={{
                        marginTop: "1rem",
                        color: "#696969",
                    }}>
                        Bò né
                    </Typography>
                    <span className={"flex items-center justify-between gap-2"}>
                        <Rating rating={4.5}/>
                        </span>
                    <Distance distance={{time: '10 phút', distance: '10km'}}/>
                    <div className={"flex items-center gap-3 mt-2"}>
                        <VoucherTag voucher={"Ưu đãi đến 56k"}/>
                    </div>
                </CardContent>

            </Card></a>
        </div>
    );
};

export default ShopCard;
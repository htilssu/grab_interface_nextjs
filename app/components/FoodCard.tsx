import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import testImg from "../assets/img1.webp"
import {FaStar} from "react-icons/fa";
import {CiClock2, CiShoppingTag} from "react-icons/ci";
import {GoDotFill} from "react-icons/go";

const FoodCard = () => {
    return (
        <div className={"hover:cursor-pointer"}>

            <Card sx={{
                minWidth: 300
            }} variant="outlined">
                <CardMedia
                    component={"img"}
                    height={"140"}
                    image={testImg}
                    alt={"food"}
                />
                <CardContent>
                    <Typography variant="h6" color="black" align={"left"}
                                sx={{
                                    fontWeight: "bold"
                                }}>
                        Tên món ăn 342424234 món ăn 34242423
                    </Typography>
                    <Typography variant="body1" align="left" sx={{
                        marginTop: "1rem",
                        color: "#696969",
                    }}>
                        Bò né
                    </Typography>
                    <span className={"flex items-center justify-between gap-2"}>
                        <span className={"flex items-center gap-2"}>
                            <FaStar className="text-yellow-400"/>
                        <span className="text-gray-500">4.5</span>
                        </span>
                        <span className={"flex items-center gap-2"}><CiClock2/> 20 phút
                        <GoDotFill />
                            <span>10 km</span>
                        </span>
                    </span>
                    <div className={"flex items-center gap-3 mt-2"}>
                        <CiShoppingTag className={"w-6 h-6 text-green-600"} />
                        <span>Ưu đãi đến 56k</span>
                    </div>
                </CardContent>

            </Card>
        </div>
    );
};

export default FoodCard;
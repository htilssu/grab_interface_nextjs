import React from 'react';
import {FaStar} from "react-icons/fa";

interface RatingProps {
    rating?: number
}

const Rating = ({rating}: RatingProps) => {
    return (
        <div>
            <span className={"flex items-center gap-2"}>
                <FaStar className="text-yellow-400"/>
            <span className="text-gray-500">{rating}</span>
            </span>
        </div>
    );
};

export default Rating;
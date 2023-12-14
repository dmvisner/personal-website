import React, { useState } from "react"

import WithSize, { getSizeValue } from "~/types/props/with-size";

type StarRatingProps = {
    rating?: number;
    length: number;
} & WithSize

const StarRating: React.FC<StarRatingProps> = ({rating = 0, length, size}) => {
    const [newRating, setRating] = useState<number>((rating));

    return (
        <ul className="flex">
            { Array.from({ length: length }).map((_, index) => (
                <Star 
                    key={index} 
                    isFilled={index < newRating} 
                    handleClick={() => setRating(index + 1)} 
                    size={size}
                />
            ))}
        </ul>
    )
}

type StarProps = {
    isFilled: boolean;
    handleClick: () => void;
} & WithSize


const Star: React.FC<StarProps> = ({ isFilled, handleClick, size }) => {
    const sizeValue = getSizeValue(size);
    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
            fill={isFilled ? "gold" : "none"} 
            viewBox="0 0 24 24"
            strokeWidth={0.5} 
            stroke="currentColor" 
            className={`w-${sizeValue} h-${sizeValue}`}
            onClick={handleClick}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
    );
};

export default StarRating;
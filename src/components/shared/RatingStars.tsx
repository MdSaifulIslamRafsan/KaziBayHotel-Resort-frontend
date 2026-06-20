"use client";

import { Star } from "lucide-react";

interface RatingStarsProps {
    rating: number;
}

const RatingStars = ({
    rating,
}: RatingStarsProps) => {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, index) => {
                const fillPercentage = Math.max(
                    0,
                    Math.min(100, (rating - index) * 100)
                );

                return (
                    <div
                        key={index}
                        className="relative"
                        style={{ width: 16, height: 16 }}
                    >
                        {/* Empty Star */}
                        <Star
                            size={16}
                            className="absolute inset-0 text-gray-300"
                        />

                        {/* Filled Part */}
                        <div
                            className="absolute inset-0 overflow-hidden"
                            style={{ width: `${fillPercentage}%` }}
                        >
                            <Star
                                size={16}
                                className="fill-yellow-500 text-yellow-500"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default RatingStars;
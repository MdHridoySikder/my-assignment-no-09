import React from "react";
import { Link } from "react-router";

const PopularSkills = ({ data }) => {
  const { skillName, rating, image, price } = data;

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="rounded-xl overflow-hidden hover:shadow-xl duration-300 flex flex-col border border-gray-200">
      <img src={image} alt={skillName} className="w-full h-48 object-cover" />

      {/* Card Body */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {skillName}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400 text-lg">
              {Array(fullStars)
                .fill()
                .map((_, i) => (
                  <span key={`full-${i}`}>★</span>
                ))}

              {hasHalfStar && <span>☆</span>}

              {Array(emptyStars)
                .fill()
                .map((_, i) => (
                  <span key={`empty-${i}`} className="text-gray-300">
                    ★
                  </span>
                ))}
            </div>

            <span className="ml-2 text-gray-600 text-sm font-medium">
              {rating}
            </span>
          </div>

          <p className="text-gray-700 font-semibold mb-4">
            Price: <span className="text-blue-600">${price}</span>
          </p>
        </div>

        {/* Button stays at bottom */}
        <Link to={`/details/${data.skillId}`} className="mt-auto">
          <button className="w-full py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-500 shadow hover:scale-105 transform transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularSkills;

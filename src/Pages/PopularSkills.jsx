import React from "react";

const PopularSkills = ({ data }) => {
  const { skillName, rating, image, price } = data;

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <img src={image} alt={skillName} className="w-full h-48 object-cover" />

      {/* Card Body */}
      <div className="p-5">
        {/* Skill Name */}
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

        {/* Price */}
        <p className="text-gray-700 font-semibold mb-4">
          Price: <span className="text-blue-600">${price}</span>
        </p>

        {/* Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PopularSkills;

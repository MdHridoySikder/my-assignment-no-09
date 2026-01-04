import React from "react";

const PopularSkills = ({ data }) => {
  const { title, rating, image } = data;

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Card Body */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400 text-lg">
            {/* Full Stars */}
            {Array(fullStars)
              .fill()
              .map((_, i) => (
                <span key={`full-${i}`}>★</span>
              ))}
            {/* Half Star */}
            {hasHalfStar && <span className="text-yellow-400">☆</span>}
            {/* Empty Stars */}
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

        {/* Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition">
          View Details
        </button>
        {/* <section className="flex justify-center items-center text-center mb-10">
        <Link to="/Apps">
          <p
            className="inline-block px-6 py-2 rounded-lg bg-[#632EE3] text-white
            font-medium hover:bg-[#5225c7] transition duration-200 "
          >
            Show All
          </p>
        </Link>
      </section> */}
      </div>
    </div>
  );
};

export default PopularSkills;

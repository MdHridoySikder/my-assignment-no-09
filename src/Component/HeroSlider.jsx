import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const HeroSlider = ({ skills }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!skills || skills.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === skills.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [skills]);

  if (!skills || skills.length === 0) return null;

  return (
    <div className="relative w-full h-[85vh] overflow-hidden rounded-b-3xl">
      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {skills.map((skill) => (
          <div
            key={skill.skillId}
            className="w-full flex-shrink-0 relative h-full"
          >
            {/* Background Image */}
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl text-white space-y-6"
                >
                  <p className="uppercase tracking-[6px] text-purple-300 text-sm font-semibold">
                    Learn • Share • Grow
                  </p>

                  <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    {skill.skillName}
                  </h1>

                  <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                    {skill.description}
                  </p>

                  <div className="flex gap-4 flex-wrap">
                    <Link to="">
                      <button className="btn btn-primary rounded-full px-8">
                        Explore Skills
                      </button>
                    </Link>

                    <Link to={`/details/${skill.skillId}`}>
                      <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black rounded-full px-8">
                        View Details
                      </button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute flex justify-between left-5 right-5 top-1/2 -translate-y-1/2 z-10">
        <button
          className="btn btn-circle bg-white/20 border-none text-white hover:bg-white hover:text-black"
          onClick={() =>
            setCurrentIndex(
              currentIndex === 0 ? skills.length - 1 : currentIndex - 1,
            )
          }
        >
          ❮
        </button>

        <button
          className="btn btn-circle bg-white/20 border-none text-white hover:bg-white hover:text-black"
          onClick={() =>
            setCurrentIndex(
              currentIndex === skills.length - 1 ? 0 : currentIndex + 1,
            )
          }
        >
          ❯
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {skills.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white scale-125" : "bg-white/40"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

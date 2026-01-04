import React, { useEffect, useState } from "react";

const HeroSlider = ({ skills }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!skills || skills.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === skills.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [skills]);

  if (!skills || skills.length === 0) return null;

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {skills.map((skill) => (
          <div
            key={skill.skillId}
            className="w-full flex-shrink-0 relative h-full"
          >
            {/* Image */}
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="text-white space-y-4 max-w-2xl px-4">
                <h1
                  className="text-4xl md:text-5xl font-bold  text-purple-300 hover:scale-101 
"
                >
                  {skill.skillName}
                </h1>
                <p className="text-sm md:text-xl text-gray-400">
                  {skill.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute flex justify-between left-5 right-5 top-1/2 -translate-y-1/2">
        <button
          className="btn btn-circle"
          onClick={() =>
            setCurrentIndex(
              currentIndex === 0 ? skills.length - 1 : currentIndex - 1
            )
          }
        >
          ❮
        </button>
        <button
          className="btn btn-circle"
          onClick={() =>
            setCurrentIndex(
              currentIndex === skills.length - 1 ? 0 : currentIndex + 1
            )
          }
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;

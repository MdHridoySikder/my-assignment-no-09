import React, { useEffect } from "react";

const HeroSlider = ({ skills }) => {
  useEffect(() => {
    if (!skills || skills.length === 0) return;

    let index = 0;

    const interval = setInterval(() => {
      const slide = document.getElementById(`slide${index}`);

      slide?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });

      index = index === skills.length - 1 ? 0 : index + 1;
    }, 4000);

    return () => clearInterval(interval);
  }, [skills]);

  if (!skills || skills.length === 0) return null;

  return (
    <div className="carousel w-full h-[80vh]">
      {skills.map((skill, index) => (
        <div
          key={skill.skillId}
          id={`slide${index}`}
          className="carousel-item relative w-full"
        >
          {/* Image */}
          <img
            src={skill.image}
            alt={skill.skillName}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="text-white space-y-4 max-w-2xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                {skill.skillName}
              </h1>
              <p className="text-lg md:text-xl">{skill.description}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute flex justify-between left-5 right-5 top-1/2 -translate-y-1/2">
            <a
              href={`#slide${index === 0 ? skills.length - 1 : index - 1}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${index === skills.length - 1 ? 0 : index + 1}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;

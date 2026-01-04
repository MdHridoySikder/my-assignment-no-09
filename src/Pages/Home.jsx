import React from "react";
import PopularSkills from "./PopularSkills";
import { useLoaderData } from "react-router";
import HeroSlider from "../Component/HeroSlider";

const Home = () => {
  const cards = useLoaderData();

  return (
    <div>
      {/* hero slider */}
      <section>
        <HeroSlider skills={cards} />
      </section>

      {/* popular skills */}
      <section className="py-12 bg-gray-50">
        <div className="w-11/12 mx-auto">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-3xl font-bold text-gray-800">Popular Skills</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((data) => (
              <PopularSkills key={data.skillId} data={data} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

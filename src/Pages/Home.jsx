import React from "react";

import PopularSkills from "./PopularSkills";
import { useLoaderData } from "react-router";

const Home = () => {
  const cards = useLoaderData();

  return (
    <div>
      {/* Popular Skills Section */}
      <section className="py-12 bg-gray-50">
        <div className="w-11/12 mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Popular Skills</h2>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
            >
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((data) => (
              <PopularSkills key={data.id} data={data} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

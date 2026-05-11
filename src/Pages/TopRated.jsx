import React from "react";
import { motion } from "framer-motion";

const TopRated = () => {
  const providers = [
    {
      name: "Alex Martin",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Sara Hossain",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "John Carter",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    },
  ];

  const steps = [
    {
      icon: "🛒",
      title: "1. Find Skills",
      description:
        "Go to browse section to find sport, fitness, music, language, art, craft, dance, cooking and many more skills.",
    },
    {
      icon: "🔍",
      title: "2. Connect Locally",
      description:
        "Go to section to ask questions, get answers, and connect with local experts.",
    },
    {
      icon: "🤝",
      title: "3. Exchange & Learn",
      description:
        "Come together and exchange knowledge. Learn from each other and grow together.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      {/* Top Rated Providers */}
      <section className="mb-20">
        <div className="w-11/12 mx-auto">
          <h2 className="text-3xl md:text-3xl font-bold text-[#001931] mb-10">
            Top Rated Providers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {providers.map((provider, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover mb-4 border-4 border-gray-200"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {provider.name}
                </h3>
                <div className="flex justify-center items-center mb-4">
                  <span className="text-yellow-400 text-2xl">★★★★★</span>
                  <span className="ml-2 text-gray-600 font-medium">
                    {provider.rating}
                  </span>
                </div>
                <button className="w-full py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-500 shadow hover:scale-105 transform transition">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="w-11/12 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#001931] mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-5xl mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-800 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50">
        <div className="w-11/12 mx-auto">
          {/* Title */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#001931]">
              Explore Skill Categories
            </h1>
            <p className="text-gray-500 mt-2">
              Learn different types of skills and grow your potential with
              SkillSwap
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
              <h2 className="text-xl font-bold text-purple-600 mb-2">Sports</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Physical and mental activities involving skill, teamwork and
                competition. Sports improve health, discipline and teamwork
                ability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
              <h2 className="text-xl font-bold text-pink-500 mb-2">Language</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                A communication system used by humans to express thoughts, ideas
                and emotions. Learning languages improves global connection.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
              <h2 className="text-xl font-bold text-indigo-500 mb-2">
                Fitness
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Activities that improve physical health, strength and endurance
                like gym, yoga and running.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
              <h2 className="text-xl font-bold text-green-500 mb-2">Music</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Art of sound involving rhythm, melody and harmony that expresses
                emotion.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
              <h2 className="text-xl font-bold text-yellow-500 mb-2">Craft</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Handmade creative works that show skill, patience and artistic
                value.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
              <h2 className="text-xl font-bold text-red-500 mb-2">Art</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creative expression through drawing, painting and design that
                reflects imagination.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopRated;

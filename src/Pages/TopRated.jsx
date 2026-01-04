import React from "react";

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
              <div
                key={index}
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
                {/* Updated Button */}
                <button className="w-full py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-500 shadow hover:scale-105 transform transition">
                  View Details
                </button>
              </div>
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
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-5xl mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-800 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section>
        <div className="w-11/12 mx-auto mt-20">
          <h1 className="text-2xl font-bold mb-5 text-[#001931]">
            Description
          </h1>
          <p className="text-gray-800 text-sm leading-relaxed">
            <span className="font-semibold">Sports</span> are physical or mental
            activities that involve skill, competition, and often teamwork,
            aimed at improving fitness, entertainment, or professional
            achievement. They can range from individual games like tennis or
            swimming to team sports like football, basketball, and cricket.
            Sports promote physical health, mental discipline, social
            interaction, and personal growth.
            <br />
            <br />
            <span className="font-semibold">Language</span> refers to the system
            of communication used by humans, including speaking, writing,
            reading, and listening. Learning a language helps improve
            communication skills, cultural understanding, and cognitive
            abilities. Language courses can range from beginner basics to
            advanced fluency in spoken and written forms.
            <br />
            <br />
            <span className="font-semibold">Fitness</span> refers to activities
            and practices that improve physical health, strength, endurance, and
            overall well-being. Fitness programs can include exercises like
            cardio, strength training, yoga, or flexibility routines, helping
            individuals stay active, healthy, and energized.
            <br />
            <br />
            <span className="font-semibold">Music</span> encompasses the art of
            creating and performing sounds that express emotions, tell stories,
            or entertain. It includes learning instruments, singing, composing,
            and understanding rhythm and melody, helping individuals develop
            creativity, discipline, and a love for sound.
            <br />
            <br />
            <span className="font-semibold"> Craft</span> involves creating
            handmade items using skills like sewing, knitting, woodworking,
            pottery, or paper arts. It encourages creativity, patience, and
            precision while producing unique, tangible works of art or
            functional items.
            <br />
            <br />
            <span className="font-semibold"> Art</span> is the expression of
            creativity and imagination through visual mediums such as painting,
            drawing, sculpture, or digital design. It communicates ideas,
            emotions, and stories, inspiring both the creator and the audience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TopRated;

import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-base-100 py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src="/about.png"
            alt="SkillSwap Community"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}

          <h4 className="text-primary font-semibold mb-2 uppercase tracking-widest">
            About SkillSwap
          </h4>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Learn, Share & Grow Together
          </h2>

          <p className="text-base-content/70 text-lg leading-relaxed mb-5">
            SkillSwap is a modern local skill exchange platform where people can
            teach, learn, and connect through real-world skills like coding,
            music, fitness, and language learning.
          </p>

          <p className="text-base-content/70 text-lg leading-relaxed mb-8">
            We believe learning should be accessible, social, and affordable.
            SkillSwap helps you connect with real people nearby and grow
            together through shared knowledge.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-primary/10 to-base-200 rounded-2xl p-5 text-center shadow hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-primary">500+</h3>
              <p className="text-sm text-base-content/70 mt-1">
                Active Learners
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-base-200 rounded-2xl p-5 text-center shadow hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-primary">120+</h3>
              <p className="text-sm text-base-content/70 mt-1">
                Skill Providers
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

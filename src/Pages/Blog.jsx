import React from "react";
import { FaCode, FaLaptopCode, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Why Skill Sharing is the Future",
      description:
        "Skill sharing platforms help people learn directly from real experiences and connect with talented local mentors.",
      icon: <FaLightbulb className="text-4xl text-primary" />,
    },
    {
      id: 2,
      title: "Top 5 Skills You Can Learn Online",
      description:
        "From web development to photography, online skill exchange makes learning easier and more affordable.",
      icon: <FaLaptopCode className="text-4xl text-secondary" />,
    },
    {
      id: 3,
      title: "How SkillSwap Helps Beginners",
      description:
        "SkillSwap creates opportunities for beginners to improve skills, build confidence, and connect with experts.",
      icon: <FaCode className="text-4xl text-accent" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Latest Blogs</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Explore useful articles, learning tips, and insights from our
          SkillSwap community.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-base-100 shadow-xl rounded-2xl p-6 border hover:shadow-2xl transition duration-300"
          >
            <div className="mb-4">{blog.icon}</div>

            <h2 className="text-2xl font-semibold mb-3">{blog.title}</h2>

            <p className="text-gray-500 mb-5">{blog.description}</p>

            <button className="btn btn-primary btn-sm">Read More</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

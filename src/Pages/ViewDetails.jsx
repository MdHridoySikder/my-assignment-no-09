import React from "react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const ViewDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const skill = data.find((item) => item.skillId === Number(id));

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully");
    e.target.reset();
  };

  if (!skill) {
    return <p className="text-center mt-20 text-red-500">Skill not found</p>;
  }

  return (
    <div className=" py-15">
      <div className="w-11/12 mx-auto bg-white rounded-xl  p-6 grid md:grid-cols-2 gap-8">
        {/* Image */}
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-full  object-cover rounded-lg "
        />

        {/* Details */}
        <div>
          <h2 className="text-2xl font-bold mb-2">{skill.skillName}</h2>
          <p className="text-gray-600 mb-2">{skill.description}</p>

          <ul className="text-sm text-gray-700 space-y-1 mb-4">
            <li>
              <b>Category:</b> {skill.category}
            </li>
            <li>
              <b>Instructor:</b> {skill.providerName}
            </li>
            <li>
              <b>Email:</b> {skill.providerEmail}
            </li>
            <li>
              <b>Rating:</b> {skill.rating}
            </li>
            <li>
              <b>Price:</b> ${skill.price}
            </li>
            <li>
              <b>Available Slots:</b> {skill.slotsAvailable}
            </li>
          </ul>

          {/* Book Session Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="input input-bordered w-full"
              placeholder="Name"
            />

            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="input input-bordered w-full"
              placeholder="Email"
            />

            {/* Updated Button */}
            <button className="w-full py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-500 shadow hover:scale-105 transform transition">
              Book Session
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

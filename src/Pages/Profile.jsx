import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../Firebase/Firebase.config";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaUserEdit, FaEnvelope, FaCamera } from "react-icons/fa";

const Profile = () => {
  const { user, setUser, loading } = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = async () => {
    if (!name) return toast.error("Name required!");

    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });

      setUser({ ...auth.currentUser });
      toast.success("Profile updated!");
      setOpen(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        Please login to continue
      </div>
    );
  }

  return (
    <div className="min-h-screen bg--to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
      >
        {/* LEFT SIDE */}
        <div className="bg-gradient-to-br from-purple-600 to-pink-500 text-white p-10 flex flex-col justify-center items-center text-center">
          <img
            src={user.photoURL || "https://i.ibb.co/2kR9y6F/user.png"}
            className="w-32 h-32 rounded-full border-4 border-white object-cover mb-4"
          />

          <h2 className="text-2xl font-bold">
            {user.displayName || "No Name"}
          </h2>

          <p className="flex items-center gap-2 mt-2 text-sm">
            <FaEnvelope /> {user.email}
          </p>

          <p className="mt-4 text-sm opacity-80">SkillSwap Member Dashboard</p>

          <button
            onClick={() => setOpen(true)}
            className="mt-6 px-6 py-2 bg-white text-purple-600 font-semibold rounded-full hover:scale-105 transition"
          >
            <FaUserEdit className="inline mr-2" />
            Edit Profile
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-10 space-y-6">
          <h2 className="text-2xl font-bold">Profile Overview</h2>

          <div className="space-y-4 text-gray-600">
            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="text-sm">Full Name</p>
              <p className="font-semibold">{user.displayName || "Not set"}</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="text-sm">Email Address</p>
              <p className="font-semibold">{user.email}</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="text-sm">Account Status</p>
              <p className="text-green-600 font-semibold">Active</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl"
          >
            <h2 className="text-xl font-bold mb-4 text-center">
              Update Profile
            </h2>

            <label className="text-sm flex items-center gap-2">
              <FaUserEdit /> Name
            </label>
            <input
              className="w-full p-3 border rounded-lg mb-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label className="text-sm flex items-center gap-2">
              <FaCamera /> Photo URL
            </label>
            <input
              className="w-full p-3 border rounded-lg mb-4"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />

            <div className="flex gap-3">
              <button
                onClick={() => setOpen(false)}
                className="w-1/2 bg-gray-200 py-2 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdate}
                className="w-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-lg"
              >
                Save
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Profile;

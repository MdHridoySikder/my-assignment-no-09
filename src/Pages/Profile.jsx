// Pages/Profile.jsx
import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../Firebase/Firebase.config";

const Profile = () => {
  const { user, setUser, loading } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdateProfile = async () => {
    if (!name) {
      toast.error("Name cannot be empty");
      return;
    }

    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL,
      });

      toast.success("Profile updated successfully!");
      setUser({ ...auth.currentUser });
      setShowModal(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (loading) {
    return (
      <p className="text-center mt-20">
        <span className="loading loading-spinner text-primary"></span>
      </p>
    );
  }

  if (!user) {
    return (
      <p className="text-center mt-20 text-red-500">
        Please login to view your profile
      </p>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl p-8 text-center relative hover:shadow-purple-400 transition-shadow">
        {/* Profile Image */}
        <div className="relative w-28 h-28 mx-auto">
          <img
            src={user.photoURL || "https://i.ibb.co/2kR9y6F/user.png"}
            alt="profile"
            className="w-28 h-28 rounded-full border-4 border-gradient-to-r from-purple-600 to-pink-500 shadow-lg object-cover"
          />
          <span className="absolute -bottom-2 right-0 bg-pink-500 w-5 h-5 rounded-full border-2 border-white animate-pulse"></span>
        </div>

        {/* Name & Email */}
        <h2 className="text-2xl font-bold mt-4 text-gray-800">
          {user.displayName || "No Name"}
        </h2>
        <p className="text-gray-500">{user.email}</p>

        <p className="mt-3 text-sm text-gray-600">
          Welcome back! 🎉 Manage your profile below.
        </p>

        {/* Update Button */}
        <button
          onClick={() => setShowModal(true)}
          className="mt-6 w-full py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow hover:scale-105 transform transition"
        >
          Update Profile
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-8 relative shadow-2xl">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              Update Profile
            </h2>

            {/* Name */}
            <div className="mb-4">
              <label className="label text-gray-700 font-medium">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input w-full border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded-lg"
                placeholder="Enter your name"
              />
            </div>

            {/* Photo URL */}
            <div className="mb-6">
              <label className="label text-gray-700 font-medium">
                Photo URL
              </label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="input w-full border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded-lg"
                placeholder="Enter photo URL"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-sm bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateProfile}
                className="btn btn-sm text-white bg-purple-600 hover:bg-purple-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

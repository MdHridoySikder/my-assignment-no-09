import React, { useEffect, useContext, useState } from "react";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../Firebase/Firebase.config";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  // Load current user info
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setName(currentUser.displayName || "");
        setPhotoURL(currentUser.photoURL || "");
      }
    });
    return () => unsubscribe();
  }, [setUser]);

  const handleUpdateProfile = async () => {
    if (!name) {
      toast.error("Name cannot be empty");
      return;
    }

    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });

      toast.success("Profile updated successfully!");
      // Reload current user
      setUser({ ...auth.currentUser });
      setShowModal(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (!user) {
    return (
      <p className="text-center mt-50 ">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </p>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-[350px] rounded-2xl shadow-lg p-6 text-center">
        <img
          src={user.photoURL || "https://i.ibb.co/2kR9y6F/user.png"}
          alt="profile"
          className="w-24 h-24 mx-auto rounded-full border-4 border-fuchsia-600"
        />

        <h2 className="text-xl font-semibold mt-4">
          {user.displayName || "No Name"}
        </h2>

        <p className="text-gray-500">{user.email}</p>

        <p className="mt-4 text-sm text-gray-600">Welcome to your profile 🎉</p>

        <button
          onClick={() => setShowModal(true)}
          className="mt-5 w-full py-2 rounded-lg bg-fuchsia-700 text-white hover:bg-fuchsia-500"
        >
          Update Profile
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-xl p-6 relative">
            <h2 className="text-xl font-semibold mb-4">Update Profile</h2>

            <label className="label">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input w-full mb-4"
              placeholder="Enter your name"
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input w-full mb-4"
              placeholder="Enter photo URL"
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-sm bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateProfile}
                className="btn btn-sm bg-fuchsia-700 text-white hover:bg-fuchsia-500"
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

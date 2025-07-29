// src/components/ProfileSettings.js
import { useState } from 'react';
import { FiUser, FiMail, FiLock, FiSave } from 'react-icons/fi';

const ProfileSettings = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [avatar, setAvatar] = useState('https://placehold.co/150');
  const [isEditMode, setIsEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your profile update logic here
    console.log('Profile updated:', profile);
    setIsEditMode(false);
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatar(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <FiUser className="mr-2" /> Profile Settings
      </h2>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Avatar Section */}
          <div className="flex flex-col items-center">
            <img 
              src={avatar} 
              alt="Profile picture of user" 
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 mb-4"
            />
            {isEditMode && (
              <label className="cursor-pointer text-sm text-indigo-600 hover:text-indigo-800">
                Change Photo
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleAvatarChange}
                />
              </label>
            )}
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="form-group">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    disabled={!isEditMode}
                    className={`w-full pl-10 pr-3 py-2 rounded-lg border ${isEditMode ? 'border-gray-300' : 'border-transparent bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    disabled={!isEditMode}
                    className={`w-full pl-10 pr-3 py-2 rounded-lg border ${isEditMode ? 'border-gray-300' : 'border-transparent bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  />
                </div>
              </div>
            </div>

            {isEditMode && (
              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-4">Change Password</h3>
                <div className="space-y-4">
                  <div className="form-group">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Current Password
                    </label>
                    <div className="relative">
                      <FiLock className="absolute left-3 top-3 text-gray-400" />
                      <input
                        type="password"
                        name="currentPassword"
                        value={profile.currentPassword}
                        onChange={handleChange}
                        placeholder="Enter current password"
                        className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        New Password
                      </label>
                      <div className="relative">
                        <FiLock className="absolute left-3 top-3 text-gray-400" />
                        <input
                          type="password"
                          name="newPassword"
                          value={profile.newPassword}
                          onChange={handleChange}
                          placeholder="Enter new password"
                          className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <FiLock className="absolute left-3 top-3 text-gray-400" />
                        <input
                          type="password"
                          name="confirmPassword"
                          value={profile.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm new password"
                          className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-end mt-6 space-x-4">
              {isEditMode ? (
                <>
                  <button
                    type="button"
                    onClick={() => setIsEditMode(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
                  >
                    <FiSave className="mr-2" />
                    Save Changes
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsEditMode(true)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;

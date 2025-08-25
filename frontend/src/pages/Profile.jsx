import { useState } from "react";
import Input from "../components/Input";
import { useAuthStore } from "../store/useAuthStore";
import { Mail, User, Lock } from "lucide-react";

// Reusable Edit Button
const EditButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="text-blue-600 text-sm font-medium hover:underline ml-4"
    type="button"
  >
    Edit
  </button>
);

// Reusable Inline Link Button
const LinkButton = ({ href, children }) => (
  <a
    href={href}
    className="text-blue-600 text-sm font-medium hover:underline ml-2"
    tabIndex={0}
  >
    {children}
  </a>
);

const Profile = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();

  const [coverImg] = useState(
    "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=800&q=80"
  );
  const [avatarImg] = useState(
    "https://api.dicebear.com/6.x/adventurer/svg?seed=Rachel"
  );

  const handleImageUpload =  async (e) => {}

  return (
    <div className="min-h-screen bg-bg-dark py-4 px-2 sm:px-4">
      <div className="max-w-5xl mx-auto rounded-xl bg-bg shadow border-1 border-border overflow-hidden mt-16">
        {/* Cover Image/Header */}
        <div className="relative">
          <img
            src={coverImg}
            alt="Cover"
            className="w-full h-30 sm:h-40 object-cover"
          />
          <button className="absolute top-4 right-4 bg-border hover:border/70 text-text text-xs px-3 py-1 rounded shadow-lg font-medium focus:outline-none">
            Upload Cover
          </button>
        </div>

        {/* Profile Card */}
        <div className="relative flex flex-col sm:flex-row items-center sm:items-end gap-6 px-6 -mt-16">
          <div className="flex flex-col items-center">
            <img
              src={ authUser.profilePic || avatarImg}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-border shadow-md object-cover"
            />
            <div className="flex gap-3 mt-1">
              <button className="text-sm text-primary/70 font-medium p-1 rounded-md hover:text-primary focus:outline-none">
                Change
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center sm:items-start pb-3 pt-2">
            <h1 className="text-2xl md:text-3xl font-bold text-text/90">
              Rachel Derek
            </h1>
            <div className="flex flex-wrap gap-x-3 gap-y-1 items-center mt-2 text-text/70 text-sm">
              <span>UI/UX Designer@spotify</span>
            </div>
          </div>
        </div>

        {/* Profile Info Table */}
        <div className="p-6 pt-2">
          {/* Email */}
          <div className="py-4 grid lg:grid-cols-2 space-x-2">
            <div className="flex flex-col space-y-2 px-2">
              <label
                className="px-1 flex items-center gap-2 text-text-muted text-sm"
                htmlFor="fullName"
              >
                <User size={18}></User> Full Name
              </label>
              <Input
                type="text"
                className="cursor-not-allowed"
                name="fullName"
                value={authUser.fullName}
                disabled
              ></Input>
            </div>

            <div className="flex flex-col space-y-2 px-2">
              <label
                className="px-1 flex items-center gap-2 text-text-muted text-sm"
                htmlFor="email"
              >
                <Mail size={18}></Mail> Email Address
              </label>
              <Input
                type="email"
                className="cursor-not-allowed"
                name="email"
                value={authUser.email}
                disabled
              ></Input>
            </div>
          </div>

          {/* Change password */}

          {/* <div className="flex flex-col space-y-2 px-2">
            <label
              className="px-1 flex items-center gap-2 text-text-muted text-sm"
              htmlFor="password"
            >
              <Lock size={18}></Lock> Password
            </label>
            <Input
              type="text"
              className=""
              name="password"
              value={""}
            ></Input>
          </div> */}
        </div>

        {/* Account Information Table */}
        <div className="p-6 pt-2">
          <h3 className="text-md text-text/50 font-semibold px-2 mb-6">
            Account Information
          </h3>
          <dl className="divide-y divide-border/70">
            <div className="flex justify-between space-y-2 px-2 my-2">
              <dt className="font-medium text-text/60">Member Since</dt>
              <dd className="flex items-center">
                <span className="text-text/70">{authUser.createdAt}</span>
              </dd>
            </div>
            <div className="flex justify-between space-y-2 px-2 my-2">
              <dt className="font-medium text-text/60">Account Status</dt>
              <dd className="flex items-center">
                <span className="text-text/70">Active</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Profile;

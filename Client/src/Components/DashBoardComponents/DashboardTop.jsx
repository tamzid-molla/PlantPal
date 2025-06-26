import React, { useContext } from "react";
import { AuthContext } from "../../Context/FirebaseContext";
import { NavLink } from "react-router";
import { FaHome, FaUser, FaCog, FaChartBar } from "react-icons/fa";

const DashboardTop = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="">
      <div className="drawer border-b border-gray-400">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar w-full">
            <div className="flex-none md:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 text-xl font-bold px-2">Dashboard</div>
            <div className="">
              <div className="flex justify-end py-6 px-4">
                <div>
                  <img
                    src={user?.photoURL}
                    alt="User photo"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg hover:bg-green-100 transition-colors ${
                    isActive ? "bg-green-200 font-semibold" : ""
                  }`
                }>
                <FaChartBar className="w-6 h-6 mr-2" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg hover:bg-green-100 transition-colors ${
                    isActive ? "bg-green-200 font-semibold" : ""
                  }`
                }>
                <FaUser className="w-6 h-6 mr-2" />
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/settings"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg hover:bg-green-100 transition-colors ${
                    isActive ? "bg-green-200 font-semibold" : ""
                  }`
                }>
                <FaCog className="w-6 h-6 mr-2" />
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg hover:bg-green-100 transition-colors ${
                    isActive ? "bg-green-200 font-semibold" : ""
                  }`
                }>
                <FaHome className="w-6 h-6 mr-2" />
                Back to Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardTop;

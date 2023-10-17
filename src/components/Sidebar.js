import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-screen w-64 px-4 pt-4">
      <div className="flex items-center justify-center mt-6">
        <span className="text-white text-xl font-semibold uppercase">
          Sidebar
        </span>
      </div>

      <nav className="mt-10">
        <a
          href="#"
          className="flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3 5a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2-2a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1H5z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M3 10a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm2-2a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1v-2a1 1 0 00-1-1H5z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M3 15a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm2-2a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1v-2a1 1 0 00-1-1H5z"
              clipRule="evenodd"
            />
          </svg>

          <span className="mx-3">Dashboard</span>
        </a>
        <a
          href="/contact"
          className="flex items-center mt-4 py-2 px-6 hover:bg-gray-700 bg-gray-700 bg-opacity-25 text-gray-100"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 12a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M3 5a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2-2a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1H5z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M3 10a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm2-2a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1v-2a1 1 0 00-1-1H5z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M3 15a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm2-2a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1v-2a1 1 0 00-1-1H5z"
              clipRule="evenodd"
            />
          </svg>

          <span className="mx-3">Contact Form</span>
        </a>

        <a
          href="#"
          className="flex items-center mt-4 py-2 px-6 hover:bg-gray-700 bg-gray-700 bg-opacity-25 text-gray-100"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 12a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M3 5a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2-2a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1H5z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M3 10a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm2-2a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1v-2a1 1 0 00-1-1H5z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M3 15a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm2-2a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1v-2a1 1 0 00-1-1H5z"
              clipRule="evenodd"
            />
          </svg>

          <span className="mx-3">Settings</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;

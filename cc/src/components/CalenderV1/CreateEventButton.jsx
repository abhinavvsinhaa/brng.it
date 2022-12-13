import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../../context/CalanderContext";

export default function CreateEventButton() {
  // const { setShowEventModal } = useContext(GlobalContext);
  return (
    <Link to='/share'>
      <button
        type="button"
        className="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center"
        style={{
          backgroundColor: 'var(--index)'
        }}
      >
        Create Post
      </button>
    </Link>
  );
}

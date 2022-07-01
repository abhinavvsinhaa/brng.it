import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../../context/CalanderContext";
import CreateEventButton from "./CreateEventButton";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className="px-4 py-2 flex items-center">
      <div
        className="calendar-header-col"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CreateEventButton />
          &nbsp;
          <button
            onClick={handleReset}
            className="border rounded py-2 px-4 mr-5"
            style={{ fontSize: "14px" }}
          >
            Today
          </button>
          <button onClick={handlePrevMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

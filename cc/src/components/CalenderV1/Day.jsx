import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../../context/CalanderContext";

export default function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  console.log(dayjs().isBefore(day));

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }
  function getHoverClass() {
    return dayjs().isBefore(day, "day") || dayjs().isSame(day, "day")
      ? "#fff"
      : "#f5f5f5";
  }
  return (
    <div className={`flex flex-col ${getHoverClass()}`} style={{
      // border: '1px solid #1D3461',
      borderTop: '1px solid #f5f5f5',
      backgroundColor: getHoverClass(),
    }}>
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm pt-2 pb-2" style={{backgroundColor: 'var(--index)', width: '100%', textAlign: 'center', fontWeight: '500', color: 'whitesmoke'}}>{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-md p-1 my-1 text-center  ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={(e) => {
          if (dayjs().isBefore(day, "day") || dayjs().isSame(day, "day")) {
            setDaySelected(day);
            setShowEventModal(true);
          } else {
            alert("Day has passed!");
          }
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => {
              setSelectedEvent(evt);
            }}
            className={`bg-${evt.label}-500 p-1 m-2 text-white text-sm rounded mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "../../util/day";
import CalendarHeader from "./CalenderHeader";
import Month from "./Month";
// import Sidebar from "./Sidebar";
import GlobalContext from "../../context/CalanderContext";
import EventModal from "./EventModal";

const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
    console.log(currentMonth)
  }, [monthIndex]);

  return (
    <>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col p-6">
        <CalendarHeader />
        <div className="flex flex-1">
          {/* <Sidebar /> */}
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
};

export default Calender;

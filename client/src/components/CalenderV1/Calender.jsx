import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "../../util/day";
import CalendarHeader from "./CalenderHeader";
import Month from "./Month";
// import Sidebar from "./Sidebar";
import GlobalContext from "../../context/CalanderContext";
import EventModal from "./EventModal";
import ResponsiveDrawer from "../Navigation/ResponsiveDrawer";

const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
    console.log(currentMonth);
  }, [monthIndex]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-8">
          {showEventModal && <EventModal />}
          <div className="h-screen flex flex-col p-6">
            <CalendarHeader />
            <div className="flex flex-1 shadow-sm">
              {/* <Sidebar /> */}
              <Month month={currentMonth} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;

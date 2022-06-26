import React, { useContext } from "react";
import plusImg from "../../public/assets/plus.svg";
import GlobalContext from "../../hooks/GlobalContext";
import Image from "next/image";

export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
      <Image src={plusImg} alt="create_event" />
      <span className="pl-3 pr-7"> Create</span>
    </button>
  );
}

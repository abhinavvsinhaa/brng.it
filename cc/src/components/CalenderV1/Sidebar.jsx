import React from "react";
import CreateEventButton from "./CreateEventButton";
import CreatePost from "../CreatePost/CreatePost";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";

export default function Sidebar() {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <CreatePost />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}

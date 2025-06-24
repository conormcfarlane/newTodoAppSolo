import React from "react";
import { useTodo } from "../Context/TodoContext";

export default function Tabs() {
  const { selectedTab, setSelectedTab } = useTodo();

  const tabs = ["All", "Active", "Completed"];
  return (
    <div className="flex justify-center gap-5 bg-white rounded-lg px-5 py-2">
      {tabs.map((tab) => (
        <div key={tab}>
          <p
            onClick={() => {
              setSelectedTab(tab);
            }}
            className={`${
              selectedTab === tab ? "text-blue-600 font-semibold" : ""
            } cursor-pointer`}
          >
            {tab}
          </p>
        </div>
      ))}
    </div>
  );
}

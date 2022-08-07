import { Tabs } from "antd";
import React from "react";
import Analytics from "./Analytics";
import UrlFront from "./UrlFront";
import Bulk from "./Bulk";

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const TabPanel = () => (
  <div className="ml-[260px]">
    <Tabs defaultActiveKey="1" onChange={onChange}>
      <TabPane tab="Shortener" key="1">
        <UrlFront />
      </TabPane>
      <TabPane tab="Bulk" key="2">
        <Bulk />
      </TabPane>
      <TabPane tab="Analytics" key="3">
        <Analytics />
      </TabPane>
    </Tabs>
  </div>
);

export default TabPanel;

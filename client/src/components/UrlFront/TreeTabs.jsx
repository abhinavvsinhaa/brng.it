import { Tabs } from "antd";
import React from "react";
import LinkTree from "./LinkTree";
import TreeAnalytics from "./TreeAnalytics";

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const TabPanel = () => (
  <div className="lg:ml-[260px]">
    <Tabs defaultActiveKey="1" onChange={onChange}>
      <TabPane tab="Shortener" key="1">
        <LinkTree />
      </TabPane>
      <TabPane tab="Bulk" key="2"></TabPane>
      <TabPane tab="Analytics" key="3">
        <TreeAnalytics />
      </TabPane>
    </Tabs>
  </div>
);

export default TabPanel;

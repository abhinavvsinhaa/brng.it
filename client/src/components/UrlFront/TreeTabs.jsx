import { Tabs } from "antd";
import React from "react";
import CustomModal from "./CustomModal";
import LinkTree from "./LinkTree/LinkTree";
import TreeAnalytics from "./LinkTree/TreeAnalytics";

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
      <TabPane tab="Custom" key="2">
        <CustomModal />
      </TabPane>
      <TabPane tab="Analytics" key="3">
        <TreeAnalytics />
      </TabPane>
    </Tabs>
  </div>
);

export default TabPanel;

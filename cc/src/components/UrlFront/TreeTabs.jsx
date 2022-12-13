import { Tabs } from "antd";
import React from "react";
import Custom from "./CustomLinkTree/Custom";
import LinkTree from "./LinkTree/LinkTree";
import TreeAnalytics from "./LinkTree/TreeAnalytics";

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const TabPanel = () => (
  <div className="lg:ml-[260px]">
    <Tabs defaultActiveKey="1" onChange={onChange}>
      <TabPane tab="Linktree" key="1">
        <LinkTree />
      </TabPane>
      {/* <TabPane tab="Custom" key="2">
        <Custom />
      </TabPane> */}
      <TabPane tab="Analytics" key="2">
        <TreeAnalytics />
      </TabPane>
    </Tabs>
  </div>
);

export default TabPanel;

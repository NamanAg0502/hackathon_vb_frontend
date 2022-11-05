import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { useState } from "react";

function Dashboard() {
  const [tabHeaders, setTabHeaders] = useState([
    "PERSONALIZED CASES",
    "ALL CASES",
  ]);

  const data = [
    {
      label: "HTML",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];
  return (
    <div className="text-black w-[100vw] ">
      <div className="w-[90vw] md:w-[800px] m-auto mt-10 mb-10 ">
        <Typography variant="h1">Dashboard</Typography>
        <Typography>
          Find all applied and recommended cases at one place
        </Typography>
        <Tabs value="html" className="mt-5">
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}

export default Dashboard;

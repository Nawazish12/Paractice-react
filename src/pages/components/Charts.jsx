import React from "react";
import { Card, Title, DonutChart } from "@tremor/react";
import { Metric, Text, CategoryBar, Legend } from "@tremor/react";
import { Tracking, TrackingBlock, Flex } from "@tremor/react";

const Charts = () => {
  const statusStyles = {
    Operational: "emerald",
    Downtime: "rose",
    Maintenance: "gray",
    Degraded: "amber",
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "40px",
      }}
    >
      <div style={{ width: "500px" }}>
        <Card>
          <Title>Sales by City</Title>
          <DonutChart
            data={cities}
            category="sales"
            dataKey="name"
            //   valueFormatter={valueFormatter}
            marginTop="mt-6"
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
          />
        </Card>
      </div>
      <div style={{ width: "400px" }}>
        <Card>
          <Text> Total users </Text>
          <Metric> 10,345 </Metric>
          <CategoryBar
            categoryPercentageValues={[30, 70]}
            colors={["emerald", "red"]}
            marginTop="mt-4"
          />
          <Legend
            categories={["Active users", "Inactive users"]}
            colors={["emerald", "red"]}
            marginTop="mt-3"
          />
        </Card>
      </div>
      <div style={{ width: "400px" }}>
        <Card maxWidth="">
          <Title>Status monitoring</Title>
          <Text>Lena&apos;s Webshop &bull; May 2022</Text>
          <Flex justifyContent="justify-end" marginTop="mt-4">
            <Text>Uptime 99.4%</Text>
          </Flex>
          <Tracking marginTop="mt-2">
            {data.map((item) => (
              <TrackingBlock
                color={statusStyles[item.status]}
                tooltip={item.status}
                key={item.id}
              />
            ))}
          </Tracking>
        </Card>
      </div>
    </div>
  );
};

export default Charts;

const data = [
  { id: 1, status: "Operational" },
  { id: 2, status: "Operational" },
  { id: 3, status: "Operational" },
  { id: 4, status: "Operational" },
  { id: 5, status: "Operational" },
  { id: 6, status: "Operational" },
  { id: 7, status: "Operational" },
  { id: 8, status: "Operational" },
  { id: 9, status: "Operational" },
  { id: 10, status: "Operational" },
  { id: 11, status: "Operational" },
  { id: 12, status: "Operational" },
  { id: 13, status: "Operational" },
  { id: 14, status: "Operational" },
  { id: 15, status: "Downtime" },
  { id: 16, status: "Operational" },
  { id: 17, status: "Operational" },
  { id: 18, status: "Operational" },
  { id: 19, status: "Operational" },
  { id: 20, status: "Maintenance" },
  { id: 21, status: "Operational" },
  { id: 22, status: "Operational" },
  { id: 23, status: "Operational" },
  { id: 24, status: "Degraded" },
  { id: 25, status: "Operational" },
];

const cities = [
  {
    name: "New York",
    sales: 9800,
  },
  {
    name: "London",
    sales: 4567,
  },
  {
    name: "Hong Kong",
    sales: 3908,
  },
  {
    name: "San Francisco",
    sales: 2400,
  },
  {
    name: "Singapore",
    sales: 1908,
  },
  {
    name: "Zurich",
    sales: 1398,
  },
];

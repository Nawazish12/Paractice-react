import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BarList, Card, Title, Bold, Flex, Text } from "@tremor/react";

const Analytice = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <Card maxWidth="max-w-4xl">
        <Title>Website Analytics</Title>
        <Flex marginTop="mt-4">
          <Text>
            <Bold>Source</Bold>
          </Text>
          <Text>
            <Bold>Visits</Bold>
          </Text>
        </Flex>
        <BarList data={data} marginTop="mt-2" />
      </Card>
    </div>
  );
};

export default Analytice;

const data = [
  { name: "Twitter", value: 456, icon: BsTwitter },
  { name: "Google", value: 351, icon: BsGoogle },
  { name: "GitHub", value: 271, icon: BsGithub },
  { name: "Reddit", value: 191, icon: BsReddit },
  { name: "Youtube", value: 91, icon: BsYoutube },
];

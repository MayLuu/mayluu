import React, { useEffect, useState } from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import axios from "axios";

const defaultData = [
  { info: "70%", text: "FPT University scholarship" },
  { info: "795", text: "TOEIC 795" },
  { info: "3rd prize", text: "FPT CSS battle" },
  { info: "Awards", text: "Creative Awaeds at FPT Hackathon" },
];

const Acomplishments = () => {
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    (async () => {
      const { data: userData } = await getFollowers();
      // console.log(userData);
      if (userData) {
        const newFollowers = data.map((obj) => {
          if (obj.text === "Github Followers") {
            return { ...obj, text: userData.followers };
          }
          return obj;
        });
        setData(newFollowers);
      }
    })();
  }, []);

  return (
    <Section>
      <SectionTitle>Personal Achievements</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{`${card.info}`}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
      <SectionDivider />
    </Section>
  );
};

export default Acomplishments;

const getFollowers = () => {
  return axios.get(
    "https://api.github.com/users/tanv33"
    // "https://api.github.com/users/tanv33/followers?per_page=100"
  );
};

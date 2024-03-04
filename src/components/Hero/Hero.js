import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { FiverUrl, ResumeUrl, UpworkUrl } from "../../constants/constants";
import { IoMdCodeDownload, IoMdDownload } from "react-icons/io";

const handleClickFiverr = () => {
  window.open(FiverUrl, "_blank");
};
const handleClickUpwork = () => {
  window.open(UpworkUrl, "_blank");
};
const handleClickResume = () => {
  window.open(ResumeUrl, "_blank");
};

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I'm My Luu
        </SectionTitle>
        <SectionText>
          A front-end Web and mobile developer specializing in ReactJS. Skilled in creating intuitive, user-friendly, responsive websites and applications.
        </SectionText>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", margin: "0 0 80px", }}>
          {/* <Button alt="upwork" onClick={handleClickUpwork}>
            Upwork
          </Button>
          <Button alt="fiverr" onClick={handleClickFiverr}>
            Fiverr
          </Button> */}
          <Button alt="resume" onClick={handleClickResume}>
            My Resume  <IoMdDownload style={{ paddingLeft: "2px" }} />
          </Button>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const Timeline = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Hi my name is Shon Hazan . i'm a Hardworking Computer Science College
        Student seeking for employment. I have a very well self-taught and
        adopting ability's , i fall in love with coding ever since my first
        hello world , to day i'm always on the search for new technologies and
        opportunities to expand my knowledge,and looking for it to prove it
      </SectionText>
    </Section>
  );
};

export default Timeline;

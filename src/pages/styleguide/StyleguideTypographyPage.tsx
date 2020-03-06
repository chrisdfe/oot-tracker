import React from "react";

import StyleguideSubpageHero from "./components/StyleguideSubpageHero";
import StyleguideSection from "./components/StyleguideSection";
import LoremParagraph from "./components/LoremParagraph";

const StyleguideTypographyPage = () => {
  return (
    <div className="StyleguideTypographyPage">
      <StyleguideSubpageHero title="Typography" />

      <StyleguideSection>
        <h1>h1. Lorem ipsum dolor sit amet</h1>
        <h2>h2. Lorem ipsum dolor sit amet</h2>
        <h3>h3. Lorem ipsum dolor sit amet</h3>
        <h4>h4. Lorem ipsum dolor sit amet</h4>
        <h5>h5. Lorem ipsum dolor sit amet</h5>
        <h6>h6. Lorem ipsum dolor sit amet</h6>
        <LoremParagraph />
        <LoremParagraph />
      </StyleguideSection>
    </div>
  );
};

export default StyleguideTypographyPage;

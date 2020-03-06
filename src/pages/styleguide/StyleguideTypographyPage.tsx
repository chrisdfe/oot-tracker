import React from "react";

import StyleguidePage from "./components/StyleguidePage";
import StyleguideSubpageHero from "./components/StyleguideSubpageHero";
import StyleguideSection from "./components/StyleguideSection";
import LoremParagraph from "./components/LoremParagraph";

const StyleguideTypographyPage = () => {
  return (
    <StyleguidePage>
      <StyleguideSubpageHero title="Typography" />

      <StyleguideSection title="Headings">
        <h1>h1. Lorem ipsum dolor sit amet</h1>
        <h2>h2. Lorem ipsum dolor sit amet</h2>
        <h3>h3. Lorem ipsum dolor sit amet</h3>
        <h4>h4. Lorem ipsum dolor sit amet</h4>
        <h5>h5. Lorem ipsum dolor sit amet</h5>
        <h6>h6. Lorem ipsum dolor sit amet</h6>
      </StyleguideSection>
      <StyleguideSection title="Paragraphs">
        <LoremParagraph />
        <LoremParagraph />
      </StyleguideSection>
    </StyleguidePage>
  );
};

export default StyleguideTypographyPage;

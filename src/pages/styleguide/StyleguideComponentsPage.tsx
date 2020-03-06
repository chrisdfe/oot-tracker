import React, { useState } from "react";

import BackLink from "components/BackLink";
import Button from "components/Button";
import Checkbox from "components/Checkbox";
import FancyBlockLink from "components/FancyBlockLink";
import ProgressBar from "components/ProgressBar";

import StyleguidePage from "./components/StyleguidePage";
import StyleguideSubpageHero from "./components/StyleguideSubpageHero";
import StyleguideSection from "./components/StyleguideSection";

const ButtonSectionContent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        click me
      </Button>
      <p>
        Counter: <strong>{counter}</strong>
      </p>
    </>
  );
};

const CheckboxSectionContent = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <Checkbox
        isChecked={isChecked}
        onClick={() => {
          setIsChecked(!isChecked);
        }}
      />
      <p>
        Is checked: <strong>{isChecked ? "true" : "false"}</strong>
      </p>
    </>
  );
};

const ProgressBarSectionContent = () => {
  const currentAmount = 20;
  const totalAmount = 80;

  return (
    <>
      <ProgressBar currentAmount={currentAmount} totalAmount={totalAmount} />
      <p>
        currentAmount: <strong>{currentAmount}</strong>
        <br />
        totalAmount: <strong>{totalAmount}</strong>
      </p>
    </>
  );
};

const StyleguideComponentsPage = () => {
  return (
    <StyleguidePage>
      <StyleguideSubpageHero title="Components" />

      <StyleguideSection title="BackLink">
        <BackLink to="#" />
      </StyleguideSection>

      <StyleguideSection title="Button">
        <ButtonSectionContent />
      </StyleguideSection>

      <StyleguideSection title="Checkbox">
        <CheckboxSectionContent />
      </StyleguideSection>

      <StyleguideSection title="FancyBlockLink">
        <FancyBlockLink title="FancyBlockLink title" to="#" />
        <FancyBlockLink title="FancyBlockLink title" to="#">
          <h4>With children prop</h4>
        </FancyBlockLink>
      </StyleguideSection>

      <StyleguideSection title="ProgressBar">
        <ProgressBarSectionContent />
      </StyleguideSection>
    </StyleguidePage>
  );
};

export default StyleguideComponentsPage;

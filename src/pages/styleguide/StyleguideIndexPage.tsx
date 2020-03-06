import React from "react";

import Container from "components/layout/Container";
import Hero from "components/layout/Hero";
import FancyBlockLink from "components/FancyBlockLink";

import StyleguideSection from "./components/StyleguideSection";

const LINKS = [
  {
    title: "Components",
    url: "/styleguide/components"
  },
  {
    title: "Regions",
    url: "/styleguide/regions"
  },
  {
    title: "Typography",
    url: "/styleguide/typography"
  }
];

const StyleguideIndexPage = () => {
  return (
    <div className="StyleguideIndexPage">
      <Hero>
        <Container>
          <h1>Styleguide</h1>
        </Container>
      </Hero>
      <StyleguideSection>
        {LINKS.map(({ title, url }) => (
          <FancyBlockLink title={title} to={url} />
        ))}
      </StyleguideSection>
    </div>
  );
};

export default StyleguideIndexPage;

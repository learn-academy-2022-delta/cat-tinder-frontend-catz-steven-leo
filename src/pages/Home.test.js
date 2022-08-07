import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./Home";
Enzyme.configure({ adapter: new Adapter() });

describe("When home renders", () => {
  it("displays an h1 with text", () => {
    const renderedHome = shallow(<Home />);

    const homeWelcomeTag = renderedHome.find("h1");
    const homeWelcomeTagText = homeWelcomeTag.text();

    expect(homeWelcomeTagText).toEqual("Home");
  });
});

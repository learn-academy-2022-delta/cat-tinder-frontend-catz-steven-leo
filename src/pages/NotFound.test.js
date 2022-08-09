import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotFound from "./NotFound";
Enzyme.configure({ adapter: new Adapter() });

describe("When NotFound renders", () => {
  it("displays a heading", () => {
    const notFound = shallow(<NotFound />);
    const notFoundHeadingText = notFound.find("h3").text();
    expect(notFoundHeadingText).toEqual("Ooops, no cats here!");
  });
});
describe("When NotFound renders", () => {
  it("displays an h1 with text", () => {
    const renderedNotFound = shallow(<NotFound />);

    const notFoundTag = renderedNotFound.find("h1");
    const notFoundTagText = notFoundTag.text();

    expect(notFoundTagText).toEqual("NotFound");
  });
});

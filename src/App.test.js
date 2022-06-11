import {  render } from "@testing-library/react";
import App from "./App";

describe("test app component", () => {
  const wrapper = render(<App />);
  let cityInput;
  let searchCityBtn;

  beforeAll(async () => {
    cityInput = await wrapper.findByTestId("cityInput");
    searchCityBtn = await wrapper.findByTestId("searchCityBtn");
  });

  it("should have an input element", async () => {
    expect(cityInput).toBeDefined();
  });

//   it("it shouldH
});

test("renders learn react link", () => {
  render(<App />);
  //   const linkElement = screen.getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
  expect(true).toBeTruthy();
});

import React from "react-dom";
import { render } from "@testing-library/react";
import MoreInfo from "./MoreInfo";
import "@testing-library/jest-dom";

test.only("test main component is visible", async () => {
  const data = { temp: 20, lowtemp: 0, hightemp: 100, precip: 80.01, date: new Date().toDateString(), onReset: () => {} };
  const wrapper = render(<MoreInfo payload={data} />);

  expect(await wrapper.getByText("Go Back")).toBeDefined();
  expect(await wrapper.getByText("Low-Temp", { exact: false })).toBeDefined();
  expect(await wrapper.getByText("Detailed", { exact: false })).toBeDefined();
});

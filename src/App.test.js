import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App renders without errors", () => {
  render(<App />);
  // screen.debug();
});

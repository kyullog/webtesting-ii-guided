import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import App from "./App";
describe("the App component", () => {
  xit("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders without crashing", () => {
    render(<App />);
  });

  it("displays hello world", () => {
    const { queryByText } = render(<App />);
    const text = queryByText(/hello world/i);

    expect(text).toBeInTheDocument();
  });

  it("displays greeting when 'greet' button is clicked", () => {
    //render the page
    const { getByText } = render(<App />);
    //find the button
    const button = getByText(/greet/i);
    //click the button
    fireEvent.click(button);
    //find the greeting
    const display = getByText(/hello web students/i);
  });
});

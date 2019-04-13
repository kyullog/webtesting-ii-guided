import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

import Players from "./Players";

describe("The Players Component", () => {
  it("renders without crashing", () => {
    render(<Players />);
  });

  it("should display the player list header when there are players", () => {
    const players = [
      { id: 1, name: "Sam" },
      { id: 2, name: "Bilbo" },
      { id: 3, name: "Frodo" }
    ];
    const { getByText } = render(<Players players={players} />);
    // const heading = queryByText(/player list/i);
    // expect(heading).toBeInTheDocument();
    getByText(/player list/i);
    cleanup();
  });

  it("should display default message there are no players", () => {
    const { getByText } = render(<Players />);
    getByText(/no players available/i);
  });
});

it("should render a list of players", () => {
  const players = [
    { id: 1, name: "Sam" },
    { id: 2, name: "Bilbo" },
    { id: 3, name: "Frodo" }
  ];

  const { getAllByTestId } = render(<Players players={players} />);
  const playersDivs = getAllByTestId("player-name");

  expect(playersDivs.length).toBe(players.length);

  const playerNames = players.map(p => p.name);
  const divContent = playersDivs.map(d => d.textContent);

  expect(playerNames).toEqual(divContent);
});

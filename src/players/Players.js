import React from "react";

function Players(props) {
  const { players = [] } = props;

  if (!props.players) {
    return <h3>No Players Available</h3>;
  }

  return (
    <>
      <h3>Player List</h3>
      {players.map(p => (
        <div data-testid="player-name" key={p.id}>
          {p.name}
        </div>
      ))}
    </>
  );
}

export default Players;

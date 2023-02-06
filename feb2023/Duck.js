// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)
function duckDuckGoose(players, goose) {
  let playerPos = goose % players.length;
  return playerPos == 0
    ? players[players.length - 1].name
    : players[playerPos - 1].name;
}

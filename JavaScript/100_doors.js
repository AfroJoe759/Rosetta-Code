function getFinalOpenedDoors(numDoors) {
  let doors = new Array(100);
  let open = [];

  for (let i = 0; i < doors.length; i++) {
    for (let j = i; j < doors.length; j += (i + 1)) {
      if (doors[j] !== true) {
        doors[j] = true;
      } else {
        doors[j] = false;
      }
    }

    if (doors[i] === true) {
      open.push(i + 1);
    }
  }

  return open;
}

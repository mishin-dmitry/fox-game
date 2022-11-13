export const getNextHungryTime = (clock) =>
  Math.floor(Math.random() * 3) + 5 + clock;

export const getNextDieTime = (clock) =>
  Math.floor(Math.random() * 2) + 3 + clock;

export const getNextPoopTime = (clock) =>
  Math.floor(Math.random() * 3) + 4 + clock;

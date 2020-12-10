function theLift(input) {
  let waitingFor = +input[0];
  const maxAllowed = 4;
  const capacisty = input[1].split(" ").length * maxAllowed;
  const lifts = input[1].split(" ").map(Number);

  for (let i = 0; i < lifts.length && waitingFor > 0; i++) {
    if (lifts[i] < maxAllowed) {
      while (lifts[i] < maxAllowed && waitingFor > 0) {
        lifts[i]++;
        waitingFor--;
      }
    }
  }

  const filledUp = lifts.reduce((p, c) => (p += c));

  if (filledUp === capacisty && waitingFor <= 0) {
    console.log(lifts.join(" "));
  } else if (waitingFor > 0) {
    console.log(
      `There isn't enough space! ${waitingFor} people in a queue!\n${lifts.join(
        " "
      )}`
    );
  } else if (waitingFor <= 0) {
    console.log(`The lift has empty spots!\n${lifts.join(" ")}`);
  }
}
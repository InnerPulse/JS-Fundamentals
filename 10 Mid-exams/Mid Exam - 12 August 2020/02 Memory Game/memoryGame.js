function memoryGame(input) {
  let counter = 0;
  const log = [];
  let sequence = input[0].split(" ");
  const elements = input.slice(1);

  for (const el of elements) {
    counter++;
    let tempArr = el.split(" ");

    // end
    if (tempArr.length <= 1) {
      log.push(`Sorry you lose :(
        ${sequence.join(" ")}`);
      break;
    } else {
      tempArr = tempArr.map(Number);
    }

    // cheating

    if (
      tempArr[0] === tempArr[1] ||
      sequence[tempArr[0]] === undefined ||
      sequence[tempArr[1]] === undefined
    ) {
      log.push(`Invalid input! Adding additional elements to the board`);
      const insert = `-${counter}a`;
      sequence.splice(sequence.length / 2, 0, insert, insert);
      continue;
    }

    // matching

    if (sequence[tempArr[0]] === sequence[tempArr[1]]) {
      const extracted = sequence[tempArr[0]];
      log.push(`Congrats! You have found matching elements - ${extracted}!`);

      sequence = sequence.filter((element) => element !== extracted);
    }
    // no match
    else {
      log.push(`Try again!`);
    }

    // if won

    if (sequence.length <= 0) {
      log.push(`You have won in ${counter} turns!`);
      break;
    }
  }

  log.forEach((log) => console.log(log));
}
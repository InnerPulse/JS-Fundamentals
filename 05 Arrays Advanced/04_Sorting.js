function foo(arr) {
    let sliced = arr.slice();
    const biggestNumbers = arr.sort((x, y) => y - x);
    const lowestNumbers = sliced.sort((x, y) => x - y);
    const concatArray = [];

    biggestNumbers.forEach((x, i) => {
        concatArray.push(x);
        concatArray.push(lowestNumbers[i]);
    });

    console.log(
        concatArray
            .splice(concatArray.length / 2)
            .reverse()
            .join(' ')
    );
}

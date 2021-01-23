<<<<<<< HEAD:07 Associative Arrays/02_OddOccurrences.js
function foo(arr) {
    const entries = [
        ...arr
            .split(" ")
            .map(x => x.toLocaleLowerCase())
            .reduce((a, v) => (a.get(v) !== undefined ? a.set(v, a.get(v) + 1) : a.set(v, 1)), new Map())
            .entries(),
    ]
    return entries
        .filter(x => x[1] % 2 !== 0)
        .map(x => x[0])
        .join(" ")
}
=======
function foo(arr) {
    const entries = [
        ...arr
            .split(" ")
            .map(x => x.toLocaleLowerCase())
            .reduce((a, v) => (a.get(v) !== undefined ? a.set(v, a.get(v) + 1) : a.set(v, 1)), new Map())
            .entries(),
    ]
    return entries
        .filter(x => x[1] % 2 !== 0)
        .map(x => x[0])
        .join(" ")
}
>>>>>>> 5a98ce5d5fdd2e9f3692071c42f71fcf00192295:07 Associative Arrays/02_OddOccurences.js

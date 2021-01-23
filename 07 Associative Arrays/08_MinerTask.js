<<<<<<< HEAD:07 Associative Arrays/08_MinerTask.js
function foo(arr) {
    let result = {}
    for (let i = 0; i < arr.length; i += 1) {
        if (i % 2 === 0) {
            if (result[arr[i]] === undefined) result[arr[i]] = 0
        } else {
            result[arr[i - 1]] += Number(arr[i])
        }
    }

    Object.entries(result).forEach(x => console.log(`${x[0]} -> ${x[1]}`))
}
=======
function foo(arr) {
    let result = {}
    for (let i = 0; i < arr.length; i += 1) {
        if (i % 2 === 0) {
            if (result[arr[i]] === undefined) result[arr[i]] = 0
        } else {
            result[arr[i - 1]] += Number(arr[i])
        }
    }

    Object.entries(result).forEach(x => console.log(`${x[0]} -> ${x[1]}`))
}
>>>>>>> 67fe0501e121141605e4d373d81b6af86bc463d4:07 Associative Arrays/08_aMinerTask.js

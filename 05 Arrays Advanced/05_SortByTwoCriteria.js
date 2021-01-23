<<<<<<< HEAD:05 Arrays Advanced/05_SortByTwoCriteria.js
function foo(arr) {
    return arr
        .sort((x, y) => {
            return x.length - y.length !== 0
                ? x.length - y.length
                : x.toLocaleLowerCase().localeCompare(y.toLocaleLowerCase())
        })
        .forEach(x => console.log(x))
}
=======
function foo(arr) {
    return arr
        .sort((x, y) => {
            return x.length - y.length !== 0
                ? x.length - y.length
                : x.toLocaleLowerCase().localeCompare(y.toLocaleLowerCase())
        })
        .forEach(x => console.log(x))
}
>>>>>>> 67fe0501e121141605e4d373d81b6af86bc463d4:05 Arrays Advanced/05_sortAnArrayBy2Criteria.js

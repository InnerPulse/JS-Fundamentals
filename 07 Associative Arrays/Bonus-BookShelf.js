function bookShelf(input) {
    const arrCopy = input.slice();
    const shelves = {};

    for (const line of arrCopy) {
        const checkData = line.split(' -> ');
        if (checkData.length > 1) {
            const [id, genre] = checkData;
            if (!shelves[id]) {
                shelves[id] = {
                    genre,
                    books: [],
                };
            }
        } else {
            const [title, info] = line.split(': ');
            const [author, genre] = info.split(', ');
            const checkKey = Object.keys(shelves).find(
                (k) => shelves[k].genre === genre
            );

            if (shelves[checkKey]) {
                shelves[checkKey].books.push({
                    title,
                    author,
                    genre: genre,
                });
            }
        }
    }

    Object.keys(shelves)
        .sort((a, b) => shelves[b].books.length - shelves[a].books.length)
        .map((key) => {
            shelves[key].books = shelves[key].books.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
            return key;
        })
        .forEach((key) => {
            console.log(
                `${key} ${shelves[key].genre}: ${
                    shelves[key].books.length
                }\n${shelves[key].books
                    .map((book) => `--> ${book.title}: ${book.author}`)
                    .join('\n')}`
            );
        });
}

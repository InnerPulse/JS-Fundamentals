function bookShelf(input) {
  const arrCopy = input.slice();
  const shelfs = {};

  for (const line of arrCopy) {
    const checkData = line.split(" -> ");
    if (checkData.length > 1) {
      const [id, genre] = checkData;
      if (!shelfs[id]) {
        shelfs[id] = {
          genre,
          books: [],
        };
      }
    } else {
      const [title, info] = line.split(": ");
      const [author, genre] = info.split(", ");
      const checkKey = Object.keys(shelfs).find((k) => shelfs[k].genre === genre);

      if (shelfs[checkKey]) {
        shelfs[checkKey].books.push({
          title,
          author,
          genre: genre,
        });
      }
    }
  }

  Object.keys(shelfs)
    .sort((a, b) => shelfs[b].books.length - shelfs[a].books.length)
    .map((key) => {
      shelfs[key].books = shelfs[key].books.sort((a, b) => a.title.localeCompare(b.title));
      return key;
    })
    .forEach((key) => {
      console.log(
        `${key} ${shelfs[key].genre}: ${shelfs[key].books.length}\n${shelfs[key].books
          .map((book) => `--> ${book.title}: ${book.author}`)
          .join("\n")}`
      );
    });
}
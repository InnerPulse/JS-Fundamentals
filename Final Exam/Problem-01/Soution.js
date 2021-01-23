function problem01(input) {
  let [string, ...lines] = input;
  lines.pop();
  const toParams = (line) => line.split(" ");
  const log = [];

  lines.forEach((line) => {
    const [command, ...params] = toParams(line);

    switch (command) {
      case "Change":
        const [char, replacement] = params;
        string = string.replace(new RegExp(char, "g"), replacement);
        log.push(string);

        break;
      case "Includes":
        const [includesString] = params;
        log.push(string.includes(includesString) ? "True" : "False");
        break;

      case "End":
        const [endString] = params;
        log.push(string.endsWith(endString) ? "True" : "False");

        break;
      case "Uppercase":
        string = string.toUpperCase();
        log.push(string);

        break;
      case "FindIndex":
        const [charToFindIndexOf] = params;
        log.push(string.indexOf(charToFindIndexOf));

        break;
      case "Cut":
        const [startIndex, length] = params;
        string = string.substr(startIndex, length);
        log.push(string);

        break;
    }
  });

  console.log(log.join("\n"));
}

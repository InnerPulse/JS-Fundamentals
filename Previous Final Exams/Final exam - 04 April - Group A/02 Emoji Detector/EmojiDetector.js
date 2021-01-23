function emojiDetector(arr) {

  const input = arr.join('')  
  const logs = [];
  const emojis = input.match(/((\*{2}|:{2})[A-Z]{1}[a-z]{2,}\2)/g);
  const threshold = input
    .match(/\d/g)
    .map(Number)
    .reduce((p, c) => (p *= c));

  logs.push(`Cool threshold: ${threshold}`);
  logs.push(`${emojis.length} emojis found in the text. The cool ones are:`);

  const coolEmojis = [];

  while (emojis.length) {
    const convertToASCII = [];

    Array.from(emojis[0].match(/[A-z]/g)).forEach((ch) => {
      convertToASCII.push(ch.charCodeAt());
    });

    convertToASCII.reduce((p, c) => (p += c)) > threshold ? coolEmojis.push(emojis.shift()) : emojis.shift();
  }

  coolEmojis.map((emoji) => logs.push(emoji));
  logs.forEach((log) => console.log(log));
}

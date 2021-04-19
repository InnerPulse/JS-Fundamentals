function problem02(input) {
    const logs = [];
    const inputs = input.slice(1, Number(input[0] + 1));
    const patter = /^(\$|%){1}[A-Z]{1}[a-z]{2,}\1: (\[\d+?\]\|)(\[\d+?\]\|)(\[\d+?\]\|)$/g;

    for (const input of inputs) {
        const message = input.match(patter);
        if (message !== null) {
            const tag = message[0].match(/[A-Za-z]+/g);
            const chars = message[0]
                .match(/\d+/g)
                .map((el) => String.fromCharCode(el));
            logs.push(`${tag}: ${chars.join('')}`);
        } else {
            logs.push(`Valid message not found!`);
        }
    }
    logs.forEach((log) => console.log(log));
}

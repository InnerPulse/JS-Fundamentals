function activationKey(input) {
    const arrCopy = input.slice();
    const key = Array.from(arrCopy.shift());
    const logs = [];

    const actions = {
        Contains: (args) => {
            key.join('').indexOf(args[0]) !== -1
                ? logs.push(`${key.join('')} contains ${args[0]}`)
                : logs.push(`Substring not found!`);
        },

        Flip: (args) => {
            const [flip, a, b] = args;
            for (let i = +a; i < +b; i++) {
                if (flip === 'Upper') {
                    key[i] = key[i].toUpperCase();
                } else {
                    key[i] = key[i].toLowerCase();
                }
            }
            logs.push(key.join(''));
        },

        Slice: (args) => {
            const [a, b] = args;
            key.splice(+a, +b - +a);
            logs.push(key.join(''));
        },
    };

    while (arrCopy[0] !== 'Generate') {
        const [command, ...args] = arrCopy.shift().split('>>>');
        const action = actions[command];
        action(args);
    }

    logs.push(`Your activation key is: ${key.join('')}`);
    logs.forEach((log) => console.log(log));
}

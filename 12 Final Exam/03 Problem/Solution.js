function problem03(input) {
    const lines = input.slice(0, input.indexOf('Results'));
    let battles = {};
    const logs = [];

    const actions = {
        Add: (args) => {
            if (!battles[args[0]]) {
                battles[args[0]] = {
                    health: Number(args[1]),
                    energy: Number(args[2]),
                };
            } else {
                battles[args[0]].health += Number(args[1]);
            }
        },

        Attack: (args) => {
            const attacker = args[0];
            const defender = args[1];

            if (battles[attacker] && battles[args[1]]) {
                battles[defender].health -= Number(args[2]);
                if (battles[defender].health <= 0) {
                    logs.push(`${defender} was disqualified!`);
                    delete battles[defender];
                }
                battles[attacker].energy -= 1;
                if (battles[attacker].energy <= 0) {
                    logs.push(`${attacker} was disqualified!`);
                    delete battles[attacker];
                }
            }
        },

        Delete: (args) => {
            if (args[0] !== 'All') {
                delete battles[args[0]];
            } else {
                battles = {};
            }
        },
    };

    for (const line of lines) {
        const [command, ...args] = line.split(':');
        const action = actions[command];
        action(args);
    }

    logs.forEach((log) => console.log(log));
    console.log(`People count: ${Object.keys(battles).length}`);

    Object.keys(battles)
        .sort(
            (a, b) =>
                battles[b].health - battles[a].health || a.localeCompare(b)
        )
        .forEach((key) =>
            console.log(
                `${key} - ${battles[key].health} - ${battles[key].energy}`
            )
        );
}

function pirates(input) {
    const logs = [];
    const targets = {};
    const towns = input.slice(0, input.indexOf('Sail'));
    const events = input.slice(input.indexOf('Sail') + 1, input.indexOf('End'));

    const compare = (a, b) => {
        let result = b[1].gold - a[1].gold;
        if (result === 0) {
            return a[0].localeCompare(b[0]);
        }
        return result;
    };

    const eventsFunctions = {
        Plunder: (data) => {
            const [town, killed, stolenGold] = data;
            targets[town].population -= Number(killed); /// Something wrong !
            targets[town].gold -= Number(stolenGold);
            logs.push(
                `${town} plundered! ${stolenGold} gold stolen, ${killed} citizens killed.`
            );
            if (targets[town].population === 0 || targets[town].gold === 0) {
                logs.push(`${town} has been wiped off the map!`);
                delete targets[town];
            }
        },
        Prosper: (data) => {
            const [town, goldIncreased] = data;
            if (goldIncreased > 0) {
                targets[town].gold += Number(goldIncreased);
            }
            Number(goldIncreased) < 0
                ? logs.push(`Gold added cannot be a negative number!`)
                : logs.push(
                      `${goldIncreased} gold added to the city treasury. ${town} now has ${targets[town].gold} gold.`
                  );
        },
    };

    while (towns.length) {
        const [town, population, gold] = towns.shift().split('||');

        if (targets[town]) {
            targets[town].gold += Number(gold);
            targets[town].population += Number(population);
        } else {
            targets[town] = {
                population: Number(population),
                gold: Number(gold),
            };
        }
    }

    while (events.length) {
        const [event, ...args] = events.shift().split('=>');
        const action = eventsFunctions[event];
        action(args);
    }

    if (Object.keys(targets) < 1) {
        logs.push(
            `Ahoy, Captain! All targets have been plundered and destroyed!`
        );
    } else {
        logs.push(
            `Ahoy, Captain! There are ${
                Object.keys(targets).length
            } wealthy settlements to go to:`
        );
        const sorted = Object.entries(targets)
            .sort(compare)
            .forEach((town) =>
                logs.push(
                    `${town[0]} -> Population: ${town[1].population} citizens, Gold: ${town[1].gold} kg`
                )
            );
    }

    logs.forEach((log) => console.log(log));
}

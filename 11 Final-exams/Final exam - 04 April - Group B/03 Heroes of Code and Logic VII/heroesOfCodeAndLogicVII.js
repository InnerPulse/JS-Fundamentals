function heroesOfCode(input) {

  const actions = {

    CastSpell: (heroes, [name, mpCost, spell]) => {
      const hero = heroes[name];
      mpCost = +mpCost;
      if (hero.mp >= mpCost) {
        hero.mp -= mpCost;
        console.log(`${name} has successfully cast ${spell} and now has ${hero.mp} MP!`);
      } else {
        console.log(`${name} does not have enough MP to cast ${spell}!`);
      }
    },

    TakeDamage: (heroes, [name, damage, source]) => {
      let hero = heroes[name];
      damege = +damage;
      hero.hp -= damage;
      if (hero.hp > 0) {
        // let hero = heroes[name]
        console.log(`${name} was hit for ${damage} HP by ${source} and now has ${hero.hp} HP left!`);// ?? 
      } else {
        console.log(`${name} has been killed by ${source}!`);
      }
    },

    Recharge: (heroes, [name, mpAmt]) => {
      const hero = heroes[name];
      mpAmt = +mpAmt;
      if (hero.mp + mpAmt > 200) {
        mpAmt = 200 - hero.mp;
      }
      hero.mp += mpAmt;
        console.log(`${name} recharged for ${mpAmt} MP!`);
    },

    Heal: (heroes, [name, hpAmt]) => {
      const hero = heroes[name];
      hpAmt = +hpAmt;
      if (hero.hp + hpAmt > 100) {
        hpAmt = 100 - hero.hp;
      }
      hero.hp += hpAmt;
      console.log(`${name} healed for ${hpAmt} HP!`);
    },
  };

  // make a coppy of the input
  const arrCopy = input.slice(0);

  // read number of heroes
  const n = Number(arrCopy.shift());

  const heroes = {};

  for (let i = 0; i < n; i++) {
    const [name, hp, mp] = arrCopy.shift().split(" ");

    // Pharse each hero
    heroes[name] = {
      hp: Number(hp), // +hp?
      mp: Number(mp), // +mp?
    };
  }

  // for each command untl end
  while (arrCopy[0] !== "End") {

    // pharse and execute command
    const [command, ...args] = arrCopy.shift().split(" - ");
    const action = actions[command];
    action(heroes, args); //??
  }

  // sort heroes
  const sorted = Object.entries(heroes)
    .filter(([n, { hp, mp }]) => hp > 0)
    .sort(compareHeroes);

  // print result
  for (const hero of sorted) {
    console.log(hero[0]);
    console.log(`  HP: ${hero[1].hp}`);
    console.log(`  MP: ${hero[1].mp}`);
  }

  function compareHeroes(a, b) {
    let heroA = a[1];
    let heroB = b[1];
    let result = heroB.hp - heroA.hp;

    if (result == 0) {
      result = a[0].localeCompare(b[0]);
    }
    
    return result;
  }
}
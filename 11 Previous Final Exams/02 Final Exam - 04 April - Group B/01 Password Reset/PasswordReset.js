function paswordReset(input) {
    const logs = [];
    const arrCopy = input.slice();
    const password = arrCopy.shift().split('');
    const actions = {
        TakeOdd: () => {
            const newPassword = [];
            for (let i = 1; i < password.length; i += 2) {
                newPassword.push(password[i]);
            }
            password.splice(0, password.length);
            while (newPassword.length) {
                password.push(newPassword.shift());
            }
            logs.push(password.join(''));
        },

        Cut: (index, length) => {
            password.splice(+index, +length);
            logs.push(password.join(''));
        },

        Substitute: (substring, substitute) => {
            const removeChars = password.join('').split(substring);
            const newPassword = [];

            if (removeChars.length > 1) {
                password.splice(0, password.length);
                for (let i = 0; i < removeChars.length; i++) {
                    newPassword.push(removeChars[i]);
                    newPassword.push(substitute);
                }
                newPassword.pop();
                const toArr = Array.from(newPassword.join(''));
                while (toArr.length) {
                    password.push(toArr.shift());
                }
                logs.push(password.join(''));
            } else {
                logs.push('Nothing to replace!');
            }
        },
    };

    while (arrCopy[0] !== 'Done') {
        const [command, arg1, arg2] = arrCopy.shift().split(' ');
        const action = actions[command];
        action(arg1, arg2);
    }

    logs.forEach((log) => console.log(log));
    console.log(`Your password is: ${password.join('')}`);
}

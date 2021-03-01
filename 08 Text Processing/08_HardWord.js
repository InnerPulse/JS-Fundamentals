function foo(arr) {
    arr[1].forEach((x) => {
        let hole = '';
        for (let i = 0; i < x.length; i++) {
            hole += '_';
        }
        const expr = `\\b${hole}\\b`;
        const pattern = new RegExp(expr, 'm');
        arr[0] = arr[0].replace(pattern, x);
    });

    return arr[0];
}

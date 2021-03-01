function fаncyBarcodes(input) {
    const barcodes = input.slice(1, Number(input[0]) + 1);
    const logs = [];
    const validation = /@+#+[A-Z]+[A-Za-z0-9]{4,}[A-Z]+@+#+/g;

    for (const line of barcodes) {
        if (new RegExp(validation).test(line)) {
            const toArr = Array.from(line);
            const log = 'Product group:';
            const productGroup = toArr.reduce((a, b) => {
                if (!isNaN(b)) {
                    a += b;
                }
                return a;
            }, '');

            productGroup.length > 0
                ? logs.push(`${log} ${productGroup}`)
                : logs.push(`${log} 00`);
        } else {
            logs.push(`Invalid barcode`);
        }
    }
    logs.forEach((log) => console.log(log));
}

function computerStore(arr){
    let customer = arr.pop();
    let parts = arr.map(Number);
    let sum = 0;
 
    for (let elements of parts){
        if (elements < 0){
            console.log('Invalid price!')
        } else {
            sum += elements;
        }
    }
    let taxes = sum * 0.2
    let total = taxes + sum;
 
    if (customer == 'special'){
        total -= total * 0.1
    } 
 
    if (total == 0){
        console.log('Invalid order!')
    } else {
        console.log(`Congratulations you've just bought a new computer!`)
        console.log(`Price without taxes: ${sum.toFixed(2)}$`)
        console.log(`Taxes: ${taxes.toFixed(2)}$`)
        console.log(`-----------`)
        console.log(`Total price: ${total.toFixed(2)}$`)
    }
}
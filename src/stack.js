import _ from 'underscore';

let stack = [];

// Lägger ett element överst i stacken
export function push (x) {
    stack.push(x);
}

// Returnerar det översta elementet i stacken och tar bort det
export function pop () {
    return stack.pop();
}

// Returnerar det översta elementet i stacken
export function peek () {
    return _.last(stack);
}

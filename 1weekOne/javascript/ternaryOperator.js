//ternary operator is a shorthand of an if statement
let canAfford = (itemPrice, accountBalance) => {
    if (itemPrice > accountBalance) {
        return `Cannot afford! You are $${itemPrice - accountBalance} short`;
    } else {
        return "Can afford!";
    }
};

//ternary statemnet
let canAffordPlus = (itemPrice, accountBalance) => {
    return itemPrice > accountBalance 
    ? `Cannot afford! You are $${itemPrice - accountBalance} short`
    : "Can afford";
    // is the itemprice > accountBalance
    // yes? then return "cannot afford"
    //no then return "can afford"
};
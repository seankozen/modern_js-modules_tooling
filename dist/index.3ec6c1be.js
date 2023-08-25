const budget = [
    {
        value: 250,
        description: "Sold old TV \uD83D\uDCFA",
        user: "jonas"
    },
    {
        value: -45,
        description: "Groceries \uD83E\uDD51",
        user: "jonas"
    },
    {
        value: 3500,
        description: "Monthly salary \uD83D\uDC69‍\uD83D\uDCBB",
        user: "jonas"
    },
    {
        value: 300,
        description: "Freelancing \uD83D\uDC69‍\uD83D\uDCBB",
        user: "jonas"
    },
    {
        value: -1100,
        description: "New iPhone \uD83D\uDCF1",
        user: "jonas"
    },
    {
        value: -20,
        description: "Candy \uD83C\uDF6D",
        user: "matilda"
    },
    {
        value: -125,
        description: "Toys \uD83D\uDE82",
        user: "matilda"
    },
    {
        value: -1800,
        description: "New Laptop \uD83D\uDCBB",
        user: "jonas"
    }
];
const spendingLimits = {
    jonas: 1500,
    matilda: 100
};
const addExpense = function(value, description, user) {
    if (!user) user = "jonas";
    user = user.toLowerCase();
    let lim;
    if (spendingLimits[user]) lim = spendingLimits[user];
    else lim = 0;
    if (value <= lim) budget.push({
        value: -value,
        description: description,
        user: user
    });
};
addExpense(10, "Pizza \uD83C\uDF55");
addExpense(100, "Going to movies \uD83C\uDF7F", "Matilda");
addExpense(200, "Stuff", "Jay");
console.log(budget);
const check = function() {
    for (const el of budget){
        let lim;
        if (spendingLimits[el.user]) lim = spendingLimits[el.user];
        else lim = 0;
        if (el.value < -lim) el.flag = "limit";
    }
};
check();
console.log(budget);
const bigExpenses = function(limit) {
    const output = "";
    for (const el of budget)if (el.value <= -limit) output += el.description.slice(-2) + " / "; // Emojis are 2 chars
    output = output.slice(0, -2); // Remove last '/ '
    console.log(output);
};

//# sourceMappingURL=index.3ec6c1be.js.map

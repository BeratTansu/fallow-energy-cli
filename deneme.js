const numbers = [7, 5, 9, 3, 8];

const strongDays = numbers.filter((number) => {
    return number >= 7;
});

console.log(strongDays);
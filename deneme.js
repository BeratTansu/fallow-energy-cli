const numbers = [7, 5, 9, 3, 8];

const highEnergy = numbers.filter(function(number) {
    return number >= 7; 
});

console.log(highEnergy);
const numbers = [7, 5, 9, 3, 8];

const total = numbers.reduce(function(sum,number) {
    return sum + number;
}, 0);

const ortalama = total / numbers.length;

console.log(total);
console.log(ortalama);
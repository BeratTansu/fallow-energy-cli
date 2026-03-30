const { getCoachMessage } = require("./coach");

const readline = require("readline");

const appName = "FALLOW";
const version = "0.1";
const user = {
    name: "Berat",
    isPremium: false,
    energyLevel: 0
};

const energyHistory = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function showReport() {
    const result = getCoachMessage(user.energyLevel);

    console.log("");
    console.log("--------------------------------");
    console.log(`${result.emoji}  Enerji: ${user.energyLevel}/10`);
    console.log(`💬 FALLOW: "${user.name}, ${result.message}"`);
    console.log("--------------------------------");
    console.log("📊 Geçmiş: ");
    for (let i = 0; i < energyHistory.length; i++) {
        console.log(`Gün ${i + 1}: ${energyHistory[i]}`);
    }

    const totalEnergy = energyHistory.reduce((sum, number) => {
        return sum + number;
    }, 0);

    const ort = totalEnergy / energyHistory.length;
    console.log(`⭐ Ortalama Enerji: ${ort}/10`);

    const strongDays = energyHistory.filter((number) => {
        return number>= 7;
    });

    const lowDays = energyHistory.filter((number) => {
        return number <= 4;
    });

    console.log(`💪 Güçlü günlerin: ${strongDays}`);
    console.log(`😴 Düşük enerjili günlerin: ${lowDays}`);
}

console.log("================================");
console.log(`  ${appName} Energy Tracker ${version}`);
console.log("================================");
console.log("Bugün enerjini nasıl hissediyorsun?");
console.log("");
askEnergy();

function askEnergy() {
    rl.question("Enerji Seviyeni gir (1-10): ", (answer) => {
        user.energyLevel = Number(answer);
        energyHistory.push(user.energyLevel);
        showReport();

        rl.question("Yeni giriş yapmak ister misin? (e/h): ", (choice) => {
            if (choice === "e") {
                askEnergy();
            } else if (choice === "h") {
                console.log("Görüşürüz! 👋");
                rl.close();
            } else {
                console.log("Tanımlanamayan bir değişken girdiniz, tekrar girin: ");
            }
        })
    })
}
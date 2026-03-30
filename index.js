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

function getCoachMessage(energy) {
    if (energy >= 8) {
        return { emoji: "🔥", message: "Harika! Bu enerjiyle bugün büyük iş çıkarırsın." };
    } else if (energy >= 5) {
        return { emoji: "⚡", message: "İyi gidiyorsun. Küçük adımlarla devam et." };
    } else if (energy >= 3) {
        return { emoji: "🌱", message: "Kendine iyi bak. Dinlenmek de bir alışkanlık." };
    } else {
        return { emoji: "💙", message: "Zor bir gün. En küçük adım bile sayılır." };
    }
}

console.log("================================");
console.log(`  ${appName} Energy Tracker ${version}`);
console.log("================================");
console.log("Bugün enerjini nasıl hissediyorsun?");
console.log("");

rl.question("Enerji seviyeni gir (1-10): ", function (answer) {
    user.energyLevel = Number(answer);
    energyHistory.push(user.energyLevel);
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
    rl.close();
});
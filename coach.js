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
};

module.exports = { getCoachMessage };
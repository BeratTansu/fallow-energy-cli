require("dotenv").config();
const Groq = require("groq-sdk");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

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

const getAICoachMessage = async (energy, userName) => {
    const response = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
            {
                role: "system",
                content: "Sen FALLOW uygulamasının AI koçusun. Kullanıcının enerji seviyesine göre kısa, motive edici ve samimi mesajlar veriyorsun. Maksimum 2 cümle yaz."
            },
            {
                role: "user",
                content: `Kullanıcı adı: ${userName}. Bugünkü enerji seviyesi: ${energy}/10`
            }
        ]
    });

    return response.choices[0].message.content;
}

module.exports = { getCoachMessage, getAICoachMessage };
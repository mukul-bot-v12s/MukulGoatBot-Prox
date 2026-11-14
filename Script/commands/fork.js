
module.exports = {
  config: {
    name: "fork",
    version: "1.1.0",
    author: "MR JUWEL",
    countDown: 5,
    role: 0,
    shortDescription: "Fork Mukul Chat Bot",
    longDescription: "GitHub repository information",
    category: "info",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
    const github =
      "https://github.com/mukul-bot-v12s/MukulGoatBot-Prox";

    const msg = `
╔══════════════════════╗
       MUKUL CHAT BOT
╚══════════════════════╝

🐐 MIRAI + GOAT MIX BOT

⚡ GITHUB REPOSITORY
${github}

👑 HELP BY MR JUWEL

╔══════════════════════╗
       FORK THIS BOT
╚══════════════════════╝

⭐ Star the Repository
🍴 Fork the Repository

THANKS FOR USING MUKUL BOT ❤️
`;

    return message.reply(msg);
  }
};

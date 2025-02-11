// Log message to console to confirm that the JS file is loaded
console.log("Top 10 Anime of 2025 Website Loaded!");

document.addEventListener("DOMContentLoaded", function () {
    // Create a container for characters
    const characterContainer = document.createElement("div");
    characterContainer.id = "character-container";
    document.body.appendChild(characterContainer);

    // Character 1 (Inspired by Gojo)
    const character1 = document.createElement("div");
    character1.className = "anime-character left";
    character1.innerHTML = `
        <img src="C:\Users\ASUS\Downloads\op.jpg.webp" alt="White-haired Character">
        <p class="char-dialogue">👋 Yo! Anime talk time?</p>
    `;
    characterContainer.appendChild(character1);

    // Character 2 (Inspired by Sung Jin-Woo)
    const character2 = document.createElement("div");
    character2.className = "anime-character right";
    character2.innerHTML = `
        <img src="C:\Users\ASUS\Downloads\wow.jpg.webp" alt="Black-haired Character">
        <p class="char-dialogue">💭 Hmm... let's see what you got.</p>
    `;
    characterContainer.appendChild(character2);

    // Random Anime Chat Lines
    const chatLines = [
        ["🔥 Who has the best transformation in anime?", "Definitely Goku’s Ultra Instinct!"],
        ["💪 Strongest anime protagonist?", "Saitama, no debate!"],
        ["🎬 First anime you watched?", "Probably Naruto. What about you?"],
        ["🎶 Best anime opening ever?", "Tokyo Ghoul's Unravel is legendary!"],
        ["⚔️ Best anime fight scene?", "Levi vs Beast Titan was insane!"],
        ["🤯 Most shocking anime twist?", "Attack on Titan never fails to surprise!"],
        ["😂 Funniest anime character?", "Konosuba's Kazuma is pure comedy gold!"],
        ["🥲 Saddest anime moment?", "Maes Hughes' funeral in FMA. Still hurts..."],
        ["🎭 Most complex anime villain?", "Johan Liebert from Monster, hands down!"],
        ["🏆 Best anime of all time?", "Depends, but Fullmetal Alchemist: Brotherhood is a solid pick!"],
        ["😱 Scariest anime you've seen?", "Another had some creepy moments!"],
        ["🚀 Anime world you'd love to live in?", "Pokémon! Who wouldn’t want their own Pikachu?"],
        ["💔 Most heartbreaking anime death?", "Ace from One Piece... I still can’t get over it."],
        ["📺 Underrated anime everyone should watch?", "Erased. A masterpiece of mystery and emotion!"],
    ];
    

    // Function for typing animation
    function typeText(element, text) {
        element.textContent = "";
        let i = 0;
        const typing = setInterval(() => {
            element.textContent += text[i];
            i++;
            if (i >= text.length) clearInterval(typing);
        }, 50);
    }

    // Character Interaction (Simulating a conversation)
    character1.addEventListener("click", function () {
        const dialogue1 = character1.querySelector(".char-dialogue");
        const dialogue2 = character2.querySelector(".char-dialogue");

        const randomChat = chatLines[Math.floor(Math.random() * chatLines.length)];
        typeText(dialogue1, `🤔 ${randomChat[0]}`);

        setTimeout(() => {
            typeText(dialogue2, `💬 ${randomChat[1]}`);
        }, 2000);
    });

    character2.addEventListener("click", function () {
        character1.click(); // Clicking on character 2 will trigger the same chat
    });
});

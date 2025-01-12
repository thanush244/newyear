const predictions = [
    "January: You'll find ₹500 in an old jacket. Congrats!",
    "February: Beware of emails that say, 'Congratulations!' 😂",
    "March: You’ll accidentally go viral for something silly. 🌟",
    "April: You’ll discover a hidden talent for cooking… or ordering food!",
    "May: Your favorite TV show will have an unexpected twist.",
    "June: You’ll bump into an old friend and laugh like never before."
];

const introForm = document.getElementById("intro-form");
const nameInput = document.getElementById("name");
const dobInput = document.getElementById("dob");
const predictionsSection = document.getElementById("predictions");
const unlockSection = document.getElementById("unlock");
const userNameDisplay = document.getElementById("user-name");
const predictionBox = document.getElementById("prediction");
const revealBtn = document.getElementById("reveal-btn");
const whatsappShare = document.getElementById("whatsapp-share");

let currentPredictionIndex = 0;

// Handle form submission
introForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = nameInput.value.trim();
    const userDob = dobInput.value;

    if (userName && userDob) {
        userNameDisplay.innerText = userName;
        document.getElementById("intro").classList.add("hidden");
        predictionsSection.classList.remove("hidden");
    }
});

// Reveal Predictions
revealBtn.addEventListener("click", () => {
    if (currentPredictionIndex < predictions.length) {
        predictionBox.innerText = predictions[currentPredictionIndex];
        currentPredictionIndex++;

        if (currentPredictionIndex === predictions.length) {
            // All first six months revealed
            revealBtn.disabled = true;
            unlockSection.classList.remove("hidden");
        }
    }
});

// WhatsApp Share
whatsappShare.addEventListener("click", () => {
    const message = encodeURIComponent(
        `Discover your 2025 predictions and unlock hilarious forecasts for the entire year! Check it out here: [YOUR_WEBSITE_LINK]`
    );
    const whatsappLink = `https://wa.me/?text=${message}`;
    window.open(whatsappLink, "_blank");
});

// Function to Show Surprise Message
function showMessage(eventId) {
    let message = document.getElementById(eventId + "Message");
    message.classList.toggle("hidden");

    // Special Animations for Certain Events
    if (eventId === 'engagement') {
        createRosePetals();
    } else if (eventId === 'proposal') {
        createGlowingHearts();
    }
}

// Falling Rose Petals Effect (Engagement)
function createRosePetals() {
    for (let i = 0; i < 10; i++) {
        let rose = document.createElement("div");
        rose.classList.add("rose");
        rose.style.left = Math.random() * 100 + "vw";
        rose.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(rose);

        setTimeout(() => { rose.remove(); }, 5000);
    }
}

// Glowing Hearts Effect (Proposal)
function createGlowingHearts() {
    let heart = document.createElement("div");
    heart.classList.add("glowing-heart");
    heart.innerHTML = "❤";
    document.body.appendChild(heart);

    setTimeout(() => { heart.remove(); }, 3000);
}

function showMessage(eventId) {
    let message = document.getElementById(eventId + "Message");
    message.classList.toggle("hidden");

    // Stop all other music
    let allAudio = document.querySelectorAll("audio");
    allAudio.forEach(audio => audio.pause());

    // Play specific music for each event
    if (eventId === 'engagement') {
        document.getElementById("engagementMusic").play();
        createRosePetals();
    } else if (eventId === 'proposal') {
        document.getElementById("proposalMusic").play();
        createGlowingHearts();
    } else if (eventId === 'birthday') {
        document.getElementById("birthdayMusic").play();
    } else if (eventId === 'yourBirthday') {
        document.getElementById("yourBirthdayMusic").play();
    }
}
// Hardcoded data for the Super Bowl teams and players
const players = [
    {
        name: "Matt",
        picture: "Assets/matt.png",
        afcTeam: "Kansas City Chiefs",
        nfcTeam: "Philadelphia Eagles"
    },
    {
        name: "Gaz",
        picture: "Assets/gaz.png",
        afcTeam: "Buffalo Bills",
        nfcTeam: "San Francisco 49ers"
    },
    {
        name: "Ste",
        picture: "Assets/ste.png",
        afcTeam: "Baltimore Ravens",
        nfcTeam: "Dallas Cowboys"
    },
    {
        name: "Jarv",
        picture: "Assets/jarv.png",
        afcTeam: "Cincinnati Bengals",
        nfcTeam: "Detroit Lions"
    },
    {
        name: "Joe",
        picture: "Assets/joe.png",
        afcTeam: "Miami Dolphins",
        nfcTeam: "Minnesota Vikings"
    },
    {
        name: "Ben",
        picture: "Assets/ben.png",
        afcTeam: "Jacksonville Jaguars",
        nfcTeam: "New Orleans Saints"
    },
    {
        name: "Mark",
        picture: "Assets/mark.png",
        afcTeam: "Los Angeles Chargers",
        nfcTeam: "Seattle Seahawks"
    }
];

// Update Player Picks Table
function updatePlayerPicks() {
    const tbody = document.getElementById("playerPicksBody");
    if (!tbody) {
        console.error("Player Picks table body not found.");
        return;
    }

    tbody.innerHTML = ""; // Clear existing rows

    players.forEach(player => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${player.picture}" alt="${player.name}" class="player-pic">
                ${player.name}
            </td>
            <td class="centered">${player.afcTeam}</td>
            <td class="centered">${player.nfcTeam}</td>
        `;
        tbody.appendChild(row);
    });
}

// Update Winner and Loser Section
function updateWinnerAndLoser(winnerIndex, loserIndex) {
    const winner = players[winnerIndex];
    const loser = players[loserIndex];

    const winnerPic = document.getElementById("winnerPic");
    const winnerName = document.getElementById("winnerName");
    const loserPic = document.getElementById("loserPic");
    const loserName = document.getElementById("loserName");

    if (winnerPic && winnerName && loserPic && loserName) {
        winnerPic.src = winner.picture;
        winnerName.textContent = winner.name;

        loserPic.src = loser.picture;
        loserName.textContent = loser.name;
    } else {
        console.error("Winner or Loser elements not found in the DOM.");
    }
}

// Initial Render
document.addEventListener("DOMContentLoaded", () => {
    updatePlayerPicks();
    updateWinnerAndLoser(0, 6); // Example: Matt as winner, Mark as loser
});

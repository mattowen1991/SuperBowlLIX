// Hardcoded data for the Super Bowl teams and players
const players = [
    { name: "Matt", picture: "Assets/matt.png", afcTeam: "Kansas City Chiefs", nfcTeam: "Detroit Lions" },
    { name: "Gaz", picture: "Assets/gaz.png", afcTeam: "Buffalo Bills", nfcTeam: "Green Bay Packers" },
    { name: "Colesy", picture: "Assets/coley.png", afcTeam: "Denver Broncos", nfcTeam: "Minnesota Vikings" },
    { name: "Jarv", picture: "Assets/jarv.png", afcTeam: "Baltimore Ravens", nfcTeam: "Los Angeles Rams" },
    { name: "Joe", picture: "Assets/joe.png", afcTeam: "Los Angeles Chargers", nfcTeam: "Tampa Bay Buccaneers" },
    { name: "Ben", picture: "Assets/ben.png", afcTeam: "Pittsburgh Steelers", nfcTeam: "Philadelphia Eagles" },
    { name: "Mark", picture: "Assets/mark.png", afcTeam: "Houston Texans", nfcTeam: "Washington Redskins" }
];

// List of eliminated teams
const eliminatedTeams = [
    "Minnesota Vikings",
    "Los Angeles Chargers",
    "Pittsburgh Steelers",
    "Denver Broncos",
    "Green Bay Packers",
    "Tampa Bay Buccaneers",
    "Detroit Lions",
    "Los Angeles Rams",
    "Baltimore Ravens",
    "Houston Texans",
    "Buffalo Bills",
    "Washington Redskins",
    "Kansas City Chiefs"
];

// Define the Super Bowl winning team
const superBowlWinner = "Philadelphia Eagles"; // Change this if the winner is different

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
            <td class="centered 
                ${eliminatedTeams.includes(player.nfcTeam) ? 'eliminated' : ''} 
                ${player.nfcTeam === superBowlWinner ? 'super-bowl-winner' : (eliminatedTeams.includes(player.nfcTeam) ? 'eliminated' : '')}">
                ${player.nfcTeam}
            </td>
            <td class="centered 
                ${eliminatedTeams.includes(player.afcTeam) ? 'eliminated' : ''} 
                ${player.afcTeam === superBowlWinner ? 'super-bowl-winner' : (eliminatedTeams.includes(player.afcTeam) ? 'eliminated' : '')}">
                ${player.afcTeam}
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Update Winner and Loser Section
function updateWinnerAndLoser(winnerIndex = null, loserIndex = null) {
    const winnerPic = document.getElementById("winnerPic");
    const winnerName = document.getElementById("winnerName");
    const loserPic = document.getElementById("loserPic");
    const loserName = document.getElementById("loserName");

    if (winnerIndex !== null && loserIndex !== null) {
        const winner = players[winnerIndex];
        const loser = players[loserIndex];

        winnerPic.src = winner.picture;
        winnerName.textContent = winner.name;

        loserPic.src = loser.picture;
        loserName.textContent = loser.name;
    } else {
        winnerPic.src = "Assets/winnertbc.png";
        winnerName.textContent = "TBC";

        loserPic.src = "Assets/losertbc.png";
        loserName.textContent = "TBC";
    }
}

// Initial Render
document.addEventListener("DOMContentLoaded", () => {
    updatePlayerPicks();
    updateWinnerAndLoser(); // Initially show TBC for winner and loser
});

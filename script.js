// Hardcoded player data with their teams
const players = [
    { name: "Matt", team: "TBC" },
    { name: "Jarv", team: "TBC" },
    { name: "Gaz", team: "TBC" },
    { name: "Joe", team: "TBC" },
    { name: "Ben", team: "TBC" },
    { name: "Coley", team: "TBC" },
    { name: "Mark", team: "TBC" }
];

// Hardcoded winner and loser
const superBowlResults = {
    winner: { name: "TBC", picture: "Assets/winnertbc.png" },
    loser: { name: "TBC", picture: "Assets/losertbc.png" }
};

// Populate the Player Picks Table
function populatePlayerPicks() {
    const tableBody = document.getElementById('playerPicksBody');
    tableBody.innerHTML = '';

    players.forEach(player => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${player.name}</td>
            <td>${player.team}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Display winner and loser
function displayWinnerAndLoser() {
    const winnerPic = document.getElementById('winnerPic');
    const winnerName = document.getElementById('winnerName');
    const loserPic = document.getElementById('loserPic');
    const loserName = document.getElementById('loserName');

    winnerPic.src = superBowlResults.winner.picture;
    winnerPic.alt = superBowlResults.winner.name;
    winnerName.textContent = superBowlResults.winner.name;

    loserPic.src = superBowlResults.loser.picture;
    loserPic.alt = superBowlResults.loser.name;
    loserName.textContent = superBowlResults.loser.name;
}

// Initial render
populatePlayerPicks();
displayWinnerAndLoser();

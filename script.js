// Hardcoded player data with their teams
const players = [
    { name: "Matt", team: "Kansas City Chiefs" },
    { name: "Jarv", team: "Philadelphia Eagles" },
    { name: "Gaz", team: "San Francisco 49ers" },
    { name: "Joe", team: "Cincinnati Bengals" },
    { name: "Ben", team: "Buffalo Bills" },
    { name: "Coley", team: "Dallas Cowboys" },
    { name: "Mark", team: "Miami Dolphins" }
];

// Hardcoded winner and loser
const superBowlResults = {
    winner: { name: "Matt", picture: "Assets/matt.png" },
    loser: { name: "Jarv", picture: "Assets/jarv.png" }
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

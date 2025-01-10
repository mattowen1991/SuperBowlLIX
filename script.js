// Hardcoded player data with profile pictures and their teams
const players = [
    { name: "Matt", team: "TBC", picture: "Assets/matt.png" },
    { name: "Jarv", team: "TBC", picture: "Assets/jarv.png" },
    { name: "Gaz", team: "TBC", picture: "Assets/gaz.png" },
    { name: "Joe", team: "TBC", picture: "Assets/joe.png" },
    { name: "Ben", team: "TBC", picture: "Assets/ben.png" },
    { name: "Coley", team: "TBC", picture: "Assets/coley.png" },
    { name: "Mark", team: "TBC", picture: "Assets/mark.png" }
];

// Hardcoded winner and loser
const superBowlResults = {
    winner: { name: "TBC", picture: "Assets/winnertbc.png" },
    loser: { name: "TBC", picture: "Assets/losertbc.png" }
};

// Populate the Player Picks Table with profile pictures
function populatePlayerPicks() {
    const tableBody = document.getElementById('playerPicksBody');
    tableBody.innerHTML = '';

    players.forEach(player => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${player.picture}" alt="${player.name}" class="player-pic">
                ${player.name}
            </td>
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

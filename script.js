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
    tbody.innerHTML = "";

    players.forEach(player => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${player.picture}" alt="${player.name}" class="player-pic">
                ${player.name}
            </td>
            <td>${player.afcTeam}</td>
            <td>${player.nfcTeam}</td>
        `;
        tbody.appendChild(row);
    });
}

// Update Winner and Loser Section (Optional)
function updateWinnerAndLoser(winner, loser) {
    document.getElementById("winnerPic").src = winner.picture;
    document.getElementById("winnerName").textContent = winner.name;

    document.getElementById("loserPic").src = loser.picture;
    document.getElementById("loserName").textContent = loser.name;
}

// Initial Render
updatePlayerPicks();
updateWinnerAndLoser(players[0], players[6]); // Example: Matt as winner, Mark as loser

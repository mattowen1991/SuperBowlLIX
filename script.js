const players = [
    { name: "Matt", picture: "Assets/matt.png" },
    { name: "Jarv", picture: "Assets/jarv.png" },
    { name: "Gaz", picture: "Assets/gaz.png" },
    { name: "Joe", picture: "Assets/joe.png" },
    { name: "Ben", picture: "Assets/ben.png" },
    { name: "Coley", picture: "Assets/coley.png" }
];

const teams = ["Eagles", "Chiefs", "49ers", "Bills", "Cowboys", "Bengals"]; // Example teams

// Randomly assign teams
players.forEach((player, index) => {
    player.team = teams[index];
});

// Populate player picks table
const playerPicksBody = document.getElementById("playerPicksBody");
players.forEach(player => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td><img src="${player.picture}" alt="${player.name}" class="player-pic">${player.name}</td>
        <td>${player.team}</td>
    `;
    playerPicksBody.appendChild(row);
});

// Set winner and loser (Example data)
const winner = players[0]; // Change as needed
const loser = players[5]; // Change as needed

document.getElementById("winnerPic").src = winner.picture;
document.getElementById("winnerName").textContent = winner.name;

document.getElementById("loserPic").src = loser.picture;
document.getElementById("loserName").textContent = loser.name;

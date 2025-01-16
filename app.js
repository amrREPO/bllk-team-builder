// Define different formations with pixel positions and roles for each node
const formations = {
    "4-4F-2": [
        { top: 100, left: 220, role: "ST" },
        { top: 100, left: 340, role: "ST" },
        { top: 300, left: 100, role: "LM" },
        { top: 300, left: 220, role: "CM" },
        { top: 300, left: 340, role: "CM" },
        { top: 300, left: 460, role: "RM" },
        { top: 450, left: 100, role: "LB" },
        { top: 500, left: 220, role: "CB" },
        { top: 500, left: 340, role: "CB" },
        { top: 450, left: 460, role: "RB" },
        { top: 650, left: 280, role: "GK" }
    ],
    "4-4A-2": [
        { top: 100, left: 220, role: "ST" },
        { top: 100, left: 340, role: "ST" },
        { top: 200, left: 100, role: "LM" },
        { top: 230, left: 280, role: "CAM" },
        { top: 350, left: 280, role: "CDM" },
        { top: 200, left: 460, role: "RM" },
        { top: 450, left: 100, role: "LB" },
        { top: 500, left: 220, role: "CB" },
        { top: 500, left: 340, role: "CB" },
        { top: 450, left: 460, role: "RB" },
        { top: 650, left: 280, role: "GK" }
    ],
    "3-4-1-2": [
        { top: 100, left: 220, role: "ST" },
        { top: 100, left: 340, role: "ST" },
        { top: 250, left: 100, role: "LM" },
        { top: 350, left: 220, role: "CM" },
        { top: 200, left: 280, role: "CAM" },
        { top: 350, left: 340, role: "CM" },
        { top: 250, left: 460, role: "RM" },
        { top: 500, left: 160, role: "CB" },
        { top: 500, left: 280, role: "CB" },
        { top: 500, left: 400, role: "CB" },
        { top: 650, left: 280, role: "GK" }
    ],
    "3-5D-2": [
        { top: 100, left: 220, role: "ST" },
        { top: 100, left: 340, role: "ST" },
        { top: 250, left: 100, role: "LM" },
        { top: 300, left: 220, role: "CM" },
        { top: 400, left: 280, role: "CDM" },
        { top: 300, left: 340, role: "CM" },
        { top: 250, left: 460, role: "RM" },
        { top: 500, left: 160, role: "CB" },
        { top: 500, left: 280, role: "CB" },
        { top: 500, left: 400, role: "CB" },
        { top: 650, left: 280, role: "GK" }
    ],
    "3-5F-2": [
        { top: 100, left: 220, role: "ST" },
        { top: 100, left: 340, role: "ST" },
        { top: 250, left: 100, role: "LM" },
        { top: 350, left: 160, role: "CM" },
        { top: 350, left: 280, role: "CM" },
        { top: 350, left: 400, role: "CM" },
        { top: 250, left: 460, role: "RM" },
        { top: 500, left: 160, role: "CB" },
        { top: 500, left: 280, role: "CB" },
        { top: 500, left: 400, role: "CB" },
        { top: 650, left: 280, role: "GK" }
    ],
    "3-5-1-1": [
        { top: 100, left: 280, role: "ST" },
        { top: 200, left: 280, role: "CAM" },
        { top: 300, left: 100, role: "LM" },
        { top: 380, left: 160, role: "LDM" },
        { top: 400, left: 280, role: "CDM" },
        { top: 380, left: 400, role: "RDM" },
        { top: 300, left: 460, role: "RM" },
        { top: 500, left: 160, role: "CB" },
        { top: 500, left: 280, role: "CB" },
        { top: 500, left: 400, role: "CB" },
        { top: 650, left: 280, role: "GK" }
    ],
    "3-4-3": [
        { top: 150, left: 130, role: "LW" },
        { top: 100, left: 280, role: "ST" },
        { top: 150, left: 430, role: "RW" },
        { top: 300, left: 100, role: "LM" },
        { top: 350, left: 220, role: "CM" },
        { top: 350, left: 340, role: "CM" },
        { top: 300, left: 460, role: "RM" },
        { top: 500, left: 160, role: "CB" },
        { top: 500, left: 280, role: "CB" },
        { top: 500, left: 400, role: "CB" },
        { top: 650, left: 280, role: "GK" }
    ],
    "4-3F-3": [
        { top: 150, left: 130, role: "LW" },
        { top: 100, left: 280, role: "ST" },
        { top: 150, left: 430, role: "RW" },
        { top: 300, left: 160, role: "LM" },
        { top: 300, left: 280, role: "CM" },
        { top: 300, left: 400, role: "RM" },
        { top: 450, left: 100, role: "LB" },
        { top: 500, left: 220, role: "CB" },
        { top: 500, left: 340, role: "CB" },
        { top: 450, left: 460, role: "RB" },
        { top: 650, left: 280, role: "GK" }
    ],
    "4-3A-3": [
        { top: 150, left: 130, role: "LW" },
        { top: 100, left: 280, role: "ST" },
        { top: 150, left: 430, role: "RW" },
        { top: 250, left: 200, role: "LCM" },
        { top: 350, left: 280, role: "CM" },
        { top: 250, left: 360, role: "RCM" },
        { top: 450, left: 100, role: "LB" },
        { top: 500, left: 220, role: "CB" },
        { top: 500, left: 340, role: "CB" },
        { top: 450, left: 460, role: "RB" },
        { top: 650, left: 280, role: "GK" }
    ],
    "4-3-1-2": [
        { top: 100, left: 220, role: "ST" },
        { top: 100, left: 340, role: "ST" },
        { top: 200, left: 280, role: "CAM" },
        { top: 320, left: 160, role: "LM" },
        { top: 350, left: 280, role: "CM" },
        { top: 320, left: 400, role: "RM" },
        { top: 450, left: 100, role: "LB" },
        { top: 500, left: 220, role: "CB" },
        { top: 500, left: 340, role: "CB" },
        { top: 450, left: 460, role: "RB" },
        { top: 650, left: 280, role: "GK" }
    ],
    "4-5-1": [
        { top: 150, left: 280, role: "ST" },
        { top: 250, left: 80, role: "LM" },
        { top: 300, left: 200, role: "LCM" },
        { top: 350, left: 280, role: "CM" },
        { top: 300, left: 360, role: "RCM" },
        { top: 250, left: 480, role: "RM" },
        { top: 450, left: 100, role: "LB" },
        { top: 500, left: 220, role: "CB" },
        { top: 500, left: 340, role: "CB" },
        { top: 450, left: 460, role: "RB" },
        { top: 650, left: 280, role: "GK" }
    ],
    "5-2-3": [
        { top: 200, left: 130, role: "LW" },
        { top: 150, left: 280, role: "ST" },
        { top: 200, left: 430, role: "RW" },
        { top: 350, left: 220, role: "CM" },
        { top: 350, left: 340, role: "CM" },
        { top: 450, left: 80, role: "LB" },
        { top: 500, left: 180, role: "LCB" },
        { top: 500, left: 280, role: "CB" },
        { top: 500, left: 380, role: "RCB" },
        { top: 450, left: 480, role: "RB" },
        { top: 650, left: 280, role: "GK" }
    ]
};

// Example array of player objects
const players = [
    // **Bastard Munchen:**
    { firstName: 'Yoichi', lastName: 'Isagi', team: 'Bastard Munchen', overall: 88 },
    { firstName: 'Rensuke', lastName: 'Kunigami', team: 'Bastard Munchen', overall: 91 },
    { firstName: 'Gin', lastName: 'Gagamaru', team: 'Bastard Munchen', overall: 87 },
    { firstName: 'Jingo', lastName: 'Raichi', team: 'Bastard Munchen', overall: 81 },
    { firstName: 'Gurimu', lastName: 'Igarashi', team: 'Bastard Munchen', overall: 'N/A' },
    { firstName: 'Kenyu', lastName: 'Yukimiya', team: 'Bastard Munchen', overall: 84 },
    { firstName: 'Yo', lastName: 'Hiori', team: 'Bastard Munchen', overall: 'N/A' },
    { firstName: 'Ranze', lastName: 'Kurona', team: 'Bastard Munchen', overall: 83 },
    { firstName: 'Jin', lastName: 'Kiyora', team: 'Bastard Munchen', overall: 80 },
    { firstName: 'Michael', lastName: 'Kaiser', team: 'Bastard Munchen', overall: 98 },
    { firstName: 'Alexis', lastName: 'Ness', team: 'Bastard Munchen', overall: 93 },
    { firstName: 'Teppei', lastName: 'Neru', team: 'Bastard Munchen', overall: 'N/A' },

    // **Ubers:**
    { firstName: 'Shohei', lastName: 'Barou', team: 'Ubers', overall: 92 },
    { firstName: 'Ikki', lastName: 'Niko', team: 'Ubers', overall: 82 },
    { firstName: 'Oliver', lastName: 'Aiku', team: 'Ubers', overall: 85 },
    { firstName: 'Shuto', lastName: 'Sendo', team: 'Ubers', overall: 85 },
    { firstName: 'Don', lastName: 'Lorenzo', team: 'Ubers', overall: 96 },
    { firstName: 'Jyubei', lastName: 'Aryu', team: 'Ubers', overall: 80 },
    { firstName: 'Gen', lastName: 'Fukaku', team: 'Ubers', overall: 'N/A' },

    // **Manshine City:**
    { firstName: 'Seishiro', lastName: 'Nagi', team: 'Manshine City', overall: 92 },
    { firstName: 'Hyoma', lastName: 'Chigiri', team: 'Manshine City', overall: 90 },
    { firstName: 'Reo', lastName: 'Mikage', team: 'Manshine City', overall: 85 },
    { firstName: ' ', lastName: 'Agi', team: 'Manshine City', overall: 85 },
    { firstName: 'Kazuma', lastName: 'Nio', team: 'Manshine City', overall: 'N/A' },
    

    // **PXG:**
    { firstName: 'Rin', lastName: 'Itoshi', team: 'PXG', overall: 'N/A' },
    { firstName: 'Tabito', lastName: 'Karasu', team: 'PXG', overall: 'N/A' },
    { firstName: 'Tsurugi', lastName: 'Zantetsu', team: 'PXG', overall: 'N/A' },
    { firstName: 'Aoshi', lastName: 'Tokimitsu', team: 'PXG', overall: 'N/A' },
    { firstName: 'Nijiro', lastName: 'Nanase', team: 'PXG', overall: 'N/A' },
    { firstName: 'Ryusei', lastName: 'Shidou', team: 'PXG', overall: 'N/A' },
    { firstName: 'Charles', lastName: 'Chevalier', team: 'PXG', overall: 'N/A' },
    { firstName: 'Kento', lastName: 'Cho', team: 'PXG', overall: 'N/A' },

    // **Barcha:**
    { firstName: 'Meguru', lastName: 'Bachira', team: 'Barcha', overall: 86 },
    { firstName: 'Eita', lastName: 'Otoya', team: 'Barcha', overall: 'N/A' },
    { firstName: 'Itsuki', lastName: 'Wakatsuki', team: 'Barcha', overall: 'N/A' },
    { firstName: 'Miroku', lastName: 'Darai', team: 'Barcha', overall: 'N/A' },
    { firstName: 'Teru', lastName: 'Kitsunezato', team: 'Barcha', overall: 'N/A' },
    { firstName: 'Haru', lastName: 'Hayate', team: 'Barcha', overall: 'N/A' },
    

    // **World:**
    { firstName: 'Itoshi', lastName: 'Sae', team: 'World', overall: 'N/A' },
    { firstName: 'Julian', lastName: 'Loki', team: 'World', overall: 'N/A' },
    { firstName: 'Leonardo', lastName: 'Luna', team: 'World', overall: 'N/A' },
    { firstName: 'Dada', lastName: 'Silva', team: 'World', overall: 'N/A' },
    { firstName: 'Adam', lastName: 'Blake', team: 'World', overall: 'N/A' },
    { firstName: 'Pablo', lastName: 'Cavasoz', team: 'World', overall: 'N/A' },
    { firstName: 'Marc', lastName: 'Snuffy', team: 'World', overall: 'N/A' },
    { firstName: 'Noel', lastName: 'Noa', team: 'World', overall: 'N/A' },
    { firstName: 'Chris', lastName: 'Prince', team: 'World', overall: 'N/A' },
    { firstName: ' ', lastName: 'Lavinho', team: 'World', overall: 'N/A' }
];


let assignedPlayers = []; // Track players who are assigned to nodes
let selectedPlayer = null; // Track currently selected player in the sidebar
let lastClickedNode = null; // Track the last clicked node for node-to-node swapping

// Function to handle squad selection and update player list
function updateSquad() {
    const selectedSquad = document.getElementById("squad").value; // Get the selected squad
    const sidebar = document.getElementById('player-list');
    sidebar.innerHTML = ''; // Clear the existing player list

    // Filter players based on the selected squad
    const filteredPlayers = players.filter(player => player.team === selectedSquad);

    // Update the sidebar with players from the selected squad, excluding those who are assigned
    filteredPlayers.forEach(player => {
        // Only add player if they're not already assigned
        if (!assignedPlayers.includes(player.lastName)) {
            const playerItem = document.createElement('div');
            playerItem.classList.add('player-item');
            playerItem.textContent = `${player.firstName} ${player.lastName}`;
            playerItem.dataset.player = JSON.stringify(player);  // Store the full player object in the dataset

            playerItem.addEventListener('click', function() {
                if (selectedPlayer) {
                    selectedPlayer.classList.remove('selected');
                }

                selectedPlayer = playerItem;
                selectedPlayer.classList.add('selected');
            });

            // Hover functionality to show player image and name when hovering over sidebar item
            playerItem.addEventListener('mouseenter', function() {
                showPlayerInfo(player);
            });

            playerItem.addEventListener('mouseleave', function() {
                hidePlayerInfo();
            });

            sidebar.appendChild(playerItem);
        }
    });
}

// Function to update the formation and player positions
function updateFormation() {
    const selectedFormation = document.getElementById("formation").value;
    const formation = formations[selectedFormation];

    for (let i = 0; i < formation.length; i++) {
        const node = document.getElementById(`node${i + 1}`);
        const centerText = node.querySelector(".center-text");
        centerText.textContent = formation[i].role;
        node.style.top = `${formation[i].top}px`;
        node.style.left = `${formation[i].left}px`;
    }
}

// Function to handle node click and swap players
function handleNodeClick(event) {
    const clickedNode = event.target.closest('.node');
    if (!clickedNode) return;

    // If there was a previously clicked node, remove its highlight
    if (lastClickedNode && lastClickedNode !== clickedNode) {
        lastClickedNode.classList.remove('highlighted');
    }

    // Add a visual highlight to the clicked node
    clickedNode.classList.add('highlighted');

    // Get the player name text of the clicked node
    const playerName = clickedNode.querySelector('.player-name');

    // If a player is selected from the sidebar
    if (selectedPlayer) {
        const player = JSON.parse(selectedPlayer.dataset.player);  // Retrieve the full player object

        // If node is empty, assign the player
        if (playerName.textContent.trim() === "") {
            playerName.textContent = player.lastName;
            assignedPlayers.push(player.lastName); // Add the player to the assigned list
            selectedPlayer.classList.remove('selected');
            selectedPlayer = null;
            updateSquad(); // Update the sidebar after assigning a player
            clickedNode.classList.remove('highlighted'); // Remove highlight after assignment
        } else {
            // Swap logic if there's already a player in the node
            const currentNodePlayer = playerName.textContent;
            playerName.textContent = player.lastName;

            // Remove the swapped player from the field
            assignedPlayers = assignedPlayers.filter(player => player !== currentNodePlayer); 
            assignedPlayers.push(player.lastName); // Add the newly assigned player to the list

            // Now, remove the swapped-out player from the sidebar (if it's there)
            const sidebar = document.getElementById('player-list');
            const swappedPlayerItem = [...sidebar.children].find(item => {
                return item.textContent.includes(currentNodePlayer); 
            });

            if (swappedPlayerItem) {
                swappedPlayerItem.remove();  // Remove the swapped-out player from the sidebar
            }

            // Reset the selected player and update sidebar to reflect changes
            selectedPlayer.classList.remove('selected');
            selectedPlayer = null;

            clickedNode.classList.remove('highlighted'); // Remove highlight after swap
        }
        // After the swap, update sidebar and player hover info
        updateSquad(); // Re-render the sidebar with the updated list of available players
    } else {
        // If no player is selected from the sidebar, enable node-to-node swapping
        if (!lastClickedNode) {
            lastClickedNode = clickedNode;
            return;
        }

        const lastNodePlayerName = lastClickedNode.querySelector('.player-name').textContent.trim();

        if (playerName.textContent.trim() === "" && lastNodePlayerName) {
            // Move player from last clicked node to current node if current node is empty
            playerName.textContent = lastNodePlayerName;
            assignedPlayers.push(lastNodePlayerName); // Add the player to the assigned list
            lastClickedNode.querySelector('.player-name').textContent = '';
        } else if (playerName.textContent.trim() && lastNodePlayerName) {
            // Swap players between nodes if both nodes are occupied
            const currentNodePlayer = playerName.textContent;
            playerName.textContent = lastNodePlayerName;
            assignedPlayers.push(lastNodePlayerName); // Add the swapped player to the assigned list
            assignedPlayers = assignedPlayers.filter(player => player !== currentNodePlayer); // Remove the old player
            lastClickedNode.querySelector('.player-name').textContent = currentNodePlayer;
        }

        // Reset the lastClickedNode and remove highlight from both nodes after swapping
        lastClickedNode.classList.remove('highlighted');
        clickedNode.classList.remove('highlighted');
        lastClickedNode = null; // Reset the clicked node reference
    }
}

// Function to show player info on hover
// Function to show player info on hover
function showPlayerInfo(player) {
    const playerImage = document.getElementById('player-image');
    const playerFullName = document.getElementById('player-name');
    const playerOverall = document.createElement('div'); // Create a new element for the overall stat

    playerImage.src = `images/${player.lastName}.png`; // Assuming the image file is named after the player's last name
    playerImage.style.display = 'block'; // Show the image

    playerFullName.textContent = `${player.firstName} ${player.lastName}`; // Set full name
    playerFullName.style.display = 'block'; // Show the name

    // Add the overall stat below the player's name
    playerOverall.textContent = `${player.overall} OVR`;
    playerOverall.classList.add('player-overall'); // Add the class for styling
    playerFullName.parentNode.appendChild(playerOverall); // Append the overall stat

    // Show the player info section
    document.querySelector('.player-info').style.display = 'block';
}


// Function to hide player info when mouse leaves
function hidePlayerInfo() {
    document.querySelector('.player-info').style.display = 'none';

    // Remove the player overall element when hiding the info
    const playerOverall = document.querySelector('.player-overall');
    if (playerOverall) {
        playerOverall.remove();
    }
}


// Add event listeners to all nodes for swapping players
document.querySelectorAll('.node').forEach(node => {
    node.addEventListener('click', handleNodeClick);
    node.addEventListener('mouseenter', function() {
        const playerName = node.querySelector('.player-name').textContent.trim();
        const player = players.find(p => p.lastName === playerName);
        if (player) {
            showPlayerInfo(player);
        }
    });

    node.addEventListener('mouseleave', hidePlayerInfo);
});

// Initialize the page by setting up the formation and player sidebar
window.onload = function() {
    updateFormation();
    updateSquad(); // Ensure the squad is correctly initialized
    
    var popup = document.getElementById("popupModal");
    popup.style.display = "flex"; // Display the pop-up modal

    // Add event listener for closing the modal
    var closeButton = document.getElementById("closePopup");
    closeButton.addEventListener("click", function() {
        popup.style.display = "none"; // Hide the pop-up
    });
};

document.getElementById("closePopup").onclick = function() {
    var popup = document.getElementById("popupModal");
    popup.style.display = "none"; // Hide the pop-up
}
// Add event listener to update squad when dropdown is changed
document.getElementById('squad').addEventListener('change', updateSquad);



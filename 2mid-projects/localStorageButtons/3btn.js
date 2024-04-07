document.getElementById('storeBtn').addEventListener('click', storeData);
document.getElementById('retrieveBtn').addEventListener('click', retrieveData);
document.getElementById('clearBtn').addEventListener('click', clearData);
document.getElementById('deleteBtn').addEventListener('click', deleteData);

function storeData() {
    let currentValue = localStorage.getItem("storedValue") ||  0;
    currentValue = parseInt(currentValue);
    localStorage.setItem("storedValue", currentValue + 1);
    updateOutput();
}

function retrieveData() {
    let currentValue = localStorage.getItem("storedValue") ||  0;
    currentValue = parseInt(currentValue);
    localStorage.setItem("storedValue", currentValue - 1);
    updateOutput();
}

function clearData() {
    localStorage.removeItem("storedValue");
    updateOutput();
}

function deleteData() {
    let keyToDelete = prompt("Enter the name of the Local Storage key to delete:");
    if (keyToDelete !== null) {
        localStorage.removeItem(keyToDelete);
        updateOutput();
    }
}

function updateOutput() {
    let storedValue = localStorage.getItem("storedValue");
    let outputDiv = document.getElementById("output");
    outputDiv.textContent = "Local Storage Value: " + (storedValue || "N/A");
}

// Initial update
updateOutput();
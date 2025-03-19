// Add an event listener to the submit button
document.getElementById('submitButton').addEventListener('click', function() {
    const idNumber = document.getElementById('idNumber').value; // Get the ID number
    const diamonds = document.getElementById('diamonds').value; // Get the diamonds input

    // Check if the ID number and diamonds input are not empty
    if (idNumber && diamonds) {
        // Redirect to the congratulations page with parameters
        window.location.href = `congratulations.html?idNumber=${encodeURIComponent(idNumber)}&diamonds=${encodeURIComponent(diamonds)}`;
    } else {
        alert('Please enter both an ID number and the number of diamonds.'); // Alert if any input is empty
    }
});

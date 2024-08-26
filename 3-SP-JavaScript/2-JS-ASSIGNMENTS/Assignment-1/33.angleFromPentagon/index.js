// Function to check if the angles form a pentagon
function isPentagon(angles) {
    // A pentagon must have exactly 5 angles
    if (angles.length !== 5) {
        return false;
    }

    // The sum of the interior angles of a pentagon should be 540 degrees
    let sum = angles.reduce((total, angle) => total + angle, 0);
    return sum === 540;
}

// Get 5 angles from the user
let angles = [];
for (let i = 0; i < 5; i++) {
    let angle = parseFloat(prompt(`Enter angle ${i + 1}: `));
    angles.push(angle);
}

// Check if the given angles form a pentagon
if (isPentagon(angles)) {
    document.write("The angles can form a pentagon.");
} else {
    document.write("The angles cannot form a pentagon.");
}
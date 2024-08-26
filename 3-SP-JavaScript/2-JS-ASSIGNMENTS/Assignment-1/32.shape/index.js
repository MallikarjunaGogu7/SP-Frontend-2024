// Function to check if the angles form a triangle
function isTriangle(angles) {
    // A triangle must have exactly 3 angles
    if (angles.length !== 3) {
        return false;
    }

    // The sum of the interior angles of a triangle should be 180 degrees
    let sum = angles.reduce((total, angle) => total + angle, 0);
    return sum === 180;
}

// Get 3 angles from the user
let angles = [];
for (let i = 0; i < 3; i++) {
    let angle = parseFloat(prompt(`Enter angle ${i + 1}: `));
    angles.push(angle);
}

// Check if the given angles form a triangle
if (isTriangle(angles)) {
    document.write("The angles can form a Triangle.");
} else {
    document.write("The angles cannot form a Triangle.");
}

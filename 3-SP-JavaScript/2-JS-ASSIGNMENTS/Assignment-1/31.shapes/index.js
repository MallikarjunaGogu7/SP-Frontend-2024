// Function to determine the shape based on the number of sides
function determineShape(sides) {
    if (sides === 3) {
        return "Triangle";
    } else if (sides === 4) {
        return "Square";
    } else if (sides === 5) {
        return "Pentagon";
    } else {
        return "Not a Triangle, Square, or Pentagon";
    }
}

// Get the number of sides from the user
let sides = parseInt(prompt("Enter the number of sides: "));

// Determine the shape and print the result
let shape = determineShape(sides);
document.write(`The shape with ${sides} sides is: ${shape}`);


        // Conversion factor: 1 acre = 4,046,856,422.4 square centimeters
        const SQUARE_CM_TO_ACRES = 4046856422.4;

        // Function to convert square centimeters to acres
        function convertToAcres(squareCentimeters) {
            return squareCentimeters / SQUARE_CM_TO_ACRES;
        }

        // Get user input for the area in square centimeters
        let squareCentimeters = parseFloat(prompt("Enter the area in square centimeters: "));

        // Convert the given square centimeters to acres
        let acres = convertToAcres(squareCentimeters);

        // Print the result
        document.write(`${squareCentimeters} square centimeters is approximately ${acres} acres.`);


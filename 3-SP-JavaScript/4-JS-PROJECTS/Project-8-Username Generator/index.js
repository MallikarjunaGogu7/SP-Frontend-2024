function generateUsername(firstName, lastName) {
    const initial1 = firstName.charAt(0).toLowerCase();
    const initial2 = lastName.charAt(0).toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);

    const username = initial1 + initial2 + randomNumber;
    return username;
}

// Example values for testing
const firstName = "John";
const lastName = "Doe";

const username = generateUsername(firstName, lastName);
console.log("Generated username:", username);

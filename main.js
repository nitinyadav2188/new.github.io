const words = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m',
    'A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','Q','W','E','R','T','Y','U','I','O','P']; // List of words for generating parts of the password

function generatePassword() {
    const chars = '0123456789!@#$%&';
    const clength = chars.length; // Length of characters to choose from for special characters and numbers
    let password = ''; // Variable to store the generated password

    // Loop until password reaches desired length
    while (password.length < 16) {
        password = password.concat(randomWord()); // Append a random word from the list
        password = password.concat(chars[randomNumber(clength)]); // Append a random special character or number
    }

    password = password.substring(0, 16); // Trim password to desired length (16 characters)
    document.getElementById('password').value = password; // Display the generated password
}

function randomNumber(l) {
    return Math.floor(Math.random() * l); // Function to generate random number up to 'l'
}

function randomWord() {
    const number = randomNumber(words.length); // Generate random index within the range of 'words'
    return words[number]; // Return a random word from the 'words' array
}
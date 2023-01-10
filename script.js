// Array of special characters to be included in password
var specialCharacters = [
	'@',
	'%',
	'+',
	'\\',
	'/',
	"'",
	'!',
	'#',
	'$',
	'^',
	'?',
	':',
	',',
	')',
	'(',
	'}',
	'{',
	']',
	'[',
	'~',
	'-',
	'_',
	'.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

	/**
	* Character types
		* Lowercase
		* Uppercase
		* Numeric
		* Special characters ($@%&*, etc)
	* Code should validate for each input and at least one character type should be selected
	* Once prompts are answered then the password should be generated and displayed in an alert or written to the page
	*/

	
	let passwordLength,
		lowercase,
		uppercase,
		numeric,
		specialCharacters;
	
	// Using condition to continue showing the prompt in case it was empty or canceled.
	do {
		let input = prompt("Please enter length of password.");
		// Check if input is only number
		if ( isNaN( input ) || input == null || input == "" ) {
			input = prompt( "Please input only number." );
		} else {
			passwordLength = parseInt( input );
		}
	} while ( passwordLength == null || passwordLength == "" );
	console.log( passwordLength );

	// Check if input is in the range or not
	if ( passwordLength < 10 || passwordLength > 64 ) {
		do {
			passwordLength = prompt("At least 10 characters but no more than 64.");
		} while ( passwordLength == null || passwordLength == "" );
	}

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

	getPasswordOptions();

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


/**
 * Add this part after adding copy button into HTML file
 * 
  function copyPassword() {
	var copyText = document.getElementById("password");
	copyText.select();
	document.execCommand("copy");  
  }
 * 
 */

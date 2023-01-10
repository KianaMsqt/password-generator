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
	* Code should validate for each input and at least one character type should be selected
	* Once prompts are answered then the password should be generated and displayed in an alert or written to the page
	*/

	
	let passwordLength,
		lowercase,
		uppercase,
		numeric,
		specialCharacters;
	
	/**  PASSWORD LENGTH */
	var givePasswordLength = function ( message ) {
		do {
			var input = prompt( message );
			input = parseInt( input );
			message = "Enter password length."
			while ( isNaN( input ) ) {
				input = givePasswordLength( "Password length must be number." );
				while ( input < 10 || input > 64 ) {
					input = givePasswordLength( "Password length must be between 10 to 64." );
				}
			}
		} while ( input == null || input == "" );
		return input;
		// TODO: If user enters a string starting with number but including NaN charachter function will return it as integer.
	}

	passwordLength = givePasswordLength("Enter password length.");
	/**  password length */

	/** LOWERCASE */
	var includingLowerCase = function() {
		if( confirm( "Do you want the password includes in lowercase?" ) ) {
			return true;
		} else {
			return false;
		}
	}
	/** lowercase */
	
	
	/** UPPERCASE */
	var includingUpperCase = function() {
		if( confirm( "Do you want the password includes in uppercase?" ) ) {
			return true;
		} else {
			return false;
		}
	}
	/** uppercase */
	
	/** NUMERIC */
	var includingNumber = function() {
		if( confirm( "Do you want the password includes in numbers?" ) ) {
			return true;
		} else {
			return false;
		}
	}
	/** numeric */
	
	/** SPECIAL CHARACTERS */
	var includingSpecialChar = function() {
		if( confirm( "Do you want the password includes in special characters ($@%&*, etc)?" ) ) {
			return true;
		} else {
			return false;
		}
	}
	//** special characters */
	
	// Validating if at least one character type is selected
	var checkCharacterType = function() {
		lowercase = includingLowerCase();
		uppercase = includingUpperCase();
		numeric = includingNumber();
		specialCharacters = includingSpecialChar();
		while ( !(lowercase || uppercase || numeric || specialCharacters) ) {
			alert( "Please confirm at least one character type." )
			checkCharacterType();
		}
	}

	checkCharacterType();

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

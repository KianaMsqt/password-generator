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

	let passwordLength,
		lowercase,
		uppercase,
		numeric,
		specialCharacters;
	
	/**  PASSWORD LENGTH */

	var givePasswordLength = function () {

		var showPrompt = function( message ) {
			return prompt( message );
		};
		var input,
			length;

		do {
			if ( input == null || input == "" || input == undefined ) {
				input = showPrompt( "Enter password length." );
			} else if ( !( Number.isInteger( Number( input ) ) ) ) {
				input = showPrompt( "Password length must be a whole number." );
			} else if ( Number( input ) < 10 || Number( input ) > 64 ) {
				input = showPrompt( "Password length must be between 10 to 64." );
			} else {
				length = input;
			}
		} while ( length == null );

		return length;

	}

	passwordLength = givePasswordLength();
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

	var passwordOptions = {
		"passwordLength" : passwordLength,
		"lowercase" : lowercase,
		"uppercase" : uppercase, 
		"numeric" : numeric,
		"specialCharacters" : specialCharacters
	}

	return( passwordOptions );

}

// Function for getting a random element from an array
function getRandom( arr ) {

	// get random index value
	const randomIndex = Math.floor(Math.random() * arr.length);
	
	// get random item
	const character = arr[randomIndex];

	return character;

}

// Function to generate password with user input
function generatePassword() {

	var passwordOptions = getPasswordOptions(),
		passwordLength = passwordOptions.passwordLength,
		lowercase = passwordOptions.lowercase,
		uppercase = passwordOptions.uppercase,
		numeric = passwordOptions.numeric,
		symbols = passwordOptions.specialCharacters,
		characters = [],
		password = "";

	if ( lowercase ) {
		characters = characters.concat( lowerCasedCharacters );
	}

	if ( uppercase ) {
		characters = characters.concat( upperCasedCharacters );
	}

	if ( numeric ) {
		characters = characters.concat( numericCharacters );
	}

	if ( symbols ) {
		characters = characters.concat( specialCharacters );
	}

	for ( var i = 0; i < passwordLength; i++ ) {
		password += getRandom( characters );
	}

	return password;
	
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


// Get references to the #copy element
var copyBtn = document.querySelector('#copy');

// Copy generated password
function copyPassword() {
	var copyText = document.getElementById("password");
	copyText.select();
	document.execCommand("copy");  
}

copyBtn.addEventListener('click', copyPassword);

// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName = 'Ethan ';
console.log ( firstName );

// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName = 'Kavanagh';
console.log ( lastName );

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
let fullName = firstName + lastName;

// 4 - Console log the value of `fullName`
console.log( fullName );

// 5 - Create a variable called `age` and assign it the value of your age
let age = 18;
console.log( age );

// 6 - Console log this sentence, adding in the variables you created above:
// 'My name is (full name), and I am (age) years old.'.
// Refer back to the videos if you need help with this one.
console.log( 'My name is ' + fullName + ', and I am ' + age + ' years old.' );

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = true;
console.log( adventurous );

// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food = 'Ice Cream';
console.log( food );

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = 3;
console.log( pets );

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 2;
console.log( friendsPets );
// 11 - Add two pets to your `pets` variable
pets += 2;
console.log( pets );

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 5;

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"
if( adventurous === true ){
  console.log( 'Adventures are great!' );
}
else{
  console.log( 'How about we stay home?' );
}

// STRETCH GOALS:
// 14 - Create a compound conditional: if age is greater than 18 and adventurous is true,
// console log "Hurray!"
if( age > 18 && adventurous === true ){
  console.log( 'Hurray!' );
} //I checked it if I was 19 and it works since it wouldn't show up since I'm 18.

// 15 - Write a conditional that console logs "I can have more pets!"
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.
if( pets <= allowedPets ){
  console.log( 'I have enough pets' );
}
else{
  console.log( 'Oh no, I have too many pets' );
} //Shouldn't it be less than or equal?

// 16 - Write a conditional that assigns the value of the `pets` variable
// to a new variable called `mostPets` IF `pets` is greater than `friendsPets`.
// If `friendsPets` is greater than `pets`, assign the value of the `friendsPets`
// variable to `mostPets`. Console log the value of `mostPets`.

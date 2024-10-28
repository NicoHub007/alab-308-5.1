/* Write a function named planetHasWater using the function expression syntax.

It will have one parameter: planet.
Return true if the planet argument is either "Earth" or "Mars", otherwise return false.
Bonus points if you ensure the function will work regardless of the casing of the planet being passed in ('earth', 'MARS', etc.).
Invoke the function a couple of times to test it! */

// ***** Practice Activity 2: write a Function Expression
const planetHasWater = function (planet) {
    planet = planet.toLowerCase();
    if (planet === 'earth' || planet === 'mars') {
        return true;
    } else {
        return false;
    }
    // an alternative
    // return (planet === 'earth' || planet === 'mars);
}
console.log(planetHasWater('mArS'));
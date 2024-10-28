/* 
Write a function named computeArea using the function declaration approach.

It will have two parameters: width & height.
It will compute the area of a rectangle (width multiplied by height) and return a string in the following form:

The area of a rectangle with a width of _ and a height of _ is ___ square units.

Invoke the function to test it.
*/
function computeArea(width, height){
   let area = width*height;
    return (`The area of a rectangle with a width ${width} and a height of ${height} is ${area} square units.`);
}

console.log(computeArea(4,7));
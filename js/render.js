function greet(name)
{
    console.log("hello" + name + "!");
}

function welcome() {
    console.log("welcome to the program");
    greet("alice")
}


function main() {
    console.log("Starting the program.");
    welcome();
    console.log("Program ended");
}

main();

const multiply = (x, y) => x * y;
const square = x => (multiply(x, x));
const isRightTriangle = (a, b, c) => {

    return square(a) + square(b) === square(c);
}

console.log(isRightTriangle(3, 4, 5));

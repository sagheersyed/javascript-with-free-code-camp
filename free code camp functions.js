
//simple function with no parameter or argument
function reusable()
{
    console.log("hey world");
}
reusable();
reusable();

//function with two parameters or arguments a & b
var globalVariable = 10;//Global variable is always created outside the function or method...

function param(a ,  b)//we can't allow to declare the data type of variable in function(parameters) it will give an error
    {
        //non-globle variable..  
        c = a + b; // we can use this variable outside the this function because we can't declare it a variable
        //so it will automatically convert in globle variable...

        console.log("the product of a and b is: " , a*b);
        console.log(c);
        console.log("global variable: " + globalVariable)
    }
//we can't need to declare the data type of the variables inside the funtion.
param(2,4);
function global()
{
    console.log("converts in globle variable: " + c)
}
global();

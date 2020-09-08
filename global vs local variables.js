
//global variable it will access able in any where.
var name = "sagheer";
name = "bashar";
function local()
{
    var name = "wajid";//local variables are just access-able in the body of the function.
    console.log(name);
}
local();
console.log(name);

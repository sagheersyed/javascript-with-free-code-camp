var a;
a=11;
var b = a + 5;
var emp = false;
console.log(b);
console.log("hello al");
function valid()
{
    if(a==1)
    {
        console.log("hurrah");
        emp = true;
    }
    else if(a==10)
    {
        console.log("i am a legend");
        emp = true;
    }
    else
    {
        console.log("you are liar");
    }
}
console.log(valid())



//initilize the variables
var c = 1;
var d = 2;
var e = "my name is";


c = c + 10;
d = d + 5;
e = e + " Sagheer"
console.log(c +"\n"+ d +"\n" + e)



//var multiply decimal number
var product = 10.2*1.12;
console.log(product)



// remiender 

function remiender()
{

    var a = 10;
    var b = 4;
    b +=5;
    var remienders = a % b;
    var name2 = "sagheers";
    var length = name2.length;
    var name = 'my name is ' + name2 + ' I am 24 year old';
    var turns = "        first line \r\t       second line \r \t third line \\ fourth line           "
    console.log(remienders +"\n"+ name +"\n"+ turns.trim() + length);
}
console.log(remiender())

function codecamp()
{
    var string = "";
    var firstName = "Sagheer";
    var lastName = "hey";
    string = firstName[0];
    string = lastName[lastName.length - 1];
    lastName.length;
    console.log(string + lastName.length);
}
console.log(codecamp());

// array

var arr = ["sagheer" , 24 , true];
console.log(arr[arr.length - 2]);

// nested array

var arr1 = [['sagheer' , 4] , ['wajid' , 34 , ['hey' , 22 , ['legend' , 999]]]];
//arr1.push(['buu' , 2]);
arr1.pop();
arr1[0][0] = 6;
console.log(arr1);


var arr2 = [1,0,'black'];
arr2.push(['sagheer' , 24]);
arr2.pop();
console.log(arr2);



//multiple array with push

var arr3 = [["sagheer" , 24] , ["wajid" , 34]];
arr3.push(['bashar' , 28]);
arr3.push(['hey']);
console.log(arr3);

// multiple array with pop
arr3.pop();
console.log(arr3);




//string as for loop
var str = "hello";
console.log(str.length);
for(var i=0; i<str.length; i++)
{
    console.log(str[i]);
}
for(var str1 of str)
{
    console.log("fasd" + str1);
}


var str3 = '"hello" "my" "friends1"';
console.log(str3);
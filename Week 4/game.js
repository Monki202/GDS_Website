//#region start
// console.log("World hello")

// var canvas = document.querySelector("canvas")
// var ctx = canvas.getContext("2d")

// var person ={
//     first: "Brady",
//     last: "Mersch",

//     firstAndLastName: function()
//     {
//         alert("My name is: " + this.first + this.last)
//     }
// }

// person.firstAndLastName()
// console.log(person.first + person.last)

// var square =
// {
//     x:  500,
//     y: 500,
//     width:100,
//     height:100,
//     color: "red",
// }

// var copy = square;
// copy.x = 200

// ctx.fillStyle = square.color
// ctx.fillRect(square.x,square.y,square.width,square.height)


// for(var i = 0; i < 20 ; i++)
// {
//     console.log(i)
// }

// for(var s = 0; s < 20; s++)
// {
//     ctx.fillStyle = "olive"
//     ctx.fillRect(s * 5 * (20/2),s , 20, 20)
// }


// var colors = []
// colors[0] = "red"
// colors[1] = "olive"
// colors[2] = "yellow"

// var person = ["brady", "james", "joel"] 

// colors[4] = "blue"
// console.log(colors[1])
// console.log(colors[3])

// var twodArray = 
// [
// [1,1,1,1,1,1,1,1],
// [2,2,2,2,2,2,2,2],
// [3,3,3,3,3,3,3,3],
// [4,4,4,4,4,4,4,4]
// ]

// for(var x = 0; x < twodArray.length; x++)
// {
//     console.log(twodArray[x][4])
// }

// for(var x = 0; x<twodArray.length; x++)
// {
//     for(var y = 0; y < 8; y++)
//     {
//         console.log(twodArray[x][y])
//     }
// }

// var whileInt = 0;
// while(whileInt < 20 * 4)
// {
//     whileInt++;
//     console.log(whileInt)
// }
//#endregion

var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")
var timer = setInterval(main, 1000/60)

var x = 50;
var y = canvas.height/2;
var w = 100;
var h = 100;
var moveAmountX = 5.08;
var moveAmountY = 5.05;

var jimmyTheBox = new GameObject(canvas);
jimmyTheBox.width = 100;
jimmyTheBox.height = 100;
jimmyTheBox.x = 72;
jimmyTheBox.y = 84

var paulTheBox = new GameObject(canvas)
paulTheBox.width = 50;
paulTheBox.height = 50 
paulTheBox.x = canvas.width / 2;
paulTheBox.y = canvas.height / 2;
paulTheBox.color = "blanchedalmond"


//the main function
function main()
{
    ctx.clearRect(0,0, canvas.width, canvas.height)
    
    x += moveAmountX;
    y += moveAmountY;

    ctx.fillStyle = "olive"
    
    ctx.beginPath();
    ctx.arc(x,y,50,0,2 * Math.PI);
    ctx.fill();

    if(x > canvas.width - 50 )
    {
        moveAmountX *= -1.02
    }
    
    if(y > canvas.height - 50)
    {
        moveAmountY *= -1.02
    }

    if(x<50)
    {
        moveAmountX *= -1.02
    }

    if(y<50)
    {
        moveAmountY *= -1.02
    }

    jimmyTheBox.renderRect();
    paulTheBox.renderRect();
    

    jimmyTheBox.move();
    paulTheBox.move();

    
    
}
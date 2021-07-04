var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

var car1x =10;
var car1y=10;
var car1_width=120;
var car1_height=70;
var car1_img="car1.png";

var car2x =10;
var car2y=100;
var car2_width=120;
var car2_height=70;
var car2_img="car2.png";

var background_img="racing.jpg";

function add() {
    background_imgload=new Image();
    background_imgload.src=background_img;
    background_imgload.onload=fn_uploadbackground;

    car1_imgload=new Image();
    car1_imgload.src=car1_img;
    car1_imgload.onload=fn_uploadcar1;

    car2_imgload=new Image();
    car2_imgload.src=car2_img;
    car2_imgload.onload=fn_uploadcar2;
}
function fn_uploadbackground()  {
    ctx.drawImage(background_imgload,0,0,canvas.width,canvas.height);
}
function fn_uploadcar1()  {
    ctx.drawImage(car1_imgload,car1x,car1y,car1_width,car1_height);
}
function fn_uploadcar2()  {
    ctx.drawImage(car2_imgload,car2x,car2y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='38')
{car1_up();
console.log("up arrow key");
}

if(keyPressed=='40')
{car1_down();
console.log("down arrow key");
}

if(keyPressed=='37')
{car1_left();
console.log("left arrow key");
}

if(keyPressed=='39')
{car1_right();
console.log("right arrow key");
}

if(keyPressed=='87')
{car2_up();
console.log("key w");
}

if(keyPressed=='83')
{car2_down();
console.log("key s");
}

if(keyPressed=='65')
{car2_left();
console.log("key a");
}
if(keyPressed=='68')
{car2_right();
console.log("key d");
}

}
function car1_left(){
    if(car1x>0){
        car1x=car1x-10;
        fn_uploadbackground();
        fn_uploadcar1();
        fn_uploadcar2();
    }
}
function car1_right(){
    if(car1x<500){
        car1x=car1x+10;
        fn_uploadbackground();
        fn_uploadcar1();
        fn_uploadcar2();
    }
}
function car2_left(){
    if(car2x>0){
        car2x=car2x-10;
        fn_uploadbackground();
        fn_uploadcar1();
        fn_uploadcar2();
    }
}
function car2_right(){
    if(car2x<500){
        car2x=car2x+10;
        fn_uploadbackground();
        fn_uploadcar1();
        fn_uploadcar2();
    }
}
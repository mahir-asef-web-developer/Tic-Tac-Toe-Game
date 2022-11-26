//! Selecting elements from DOM

const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const div4 = document.querySelector("#div4");
const div5 = document.querySelector("#div5");
const div6 = document.querySelector("#div6");
const div7 = document.querySelector("#div7");
const div8 = document.querySelector("#div8");
const div9 = document.querySelector("#div9");

div1.value = "";
div2.value = "";
div3.value = "";
div4.value = "";
div5.value = "";
div6.value = "";
div7.value = "";
div8.value = "";
div9.value = "";

//! Declaring Utilites

var count = 0;

function divf1(){
    if(count%2 == 0){
        div1.value = "O";
    }
    else{
        div1.value = "X";
    }
    count++;
}
function divf2(){
    if(count%2 == 0){
        div2.value = "O";
    }
    else{
        div2.value = "X";
    }
    count++;
}
function divf3(){
    if(count%2 == 0){
        div3.value = "O";
    }
    else{
        div3.value = "X";
    }
    count++;
}
function divf4(){
    if(count%2 == 0){
        div4.value = "O";
    }
    else{
        div4.value = "X";
    }
    count++;
}
function divf5(){
    if(count%2 == 0){
        div5.value = "O";
    }
    else{
        div5.value = "X";
    }
    count++;
}
function divf6(){
    if(count%2 == 0){
        div6.value = "O";
    }
    else{
        div6.value = "X";
    }
    count++;
}
function divf7(){
    if(count%2 == 0){
        div7.value = "O";
    }
    else{
        div7.value = "X";
    }
    count++;
}
function divf8(){
    if(count%2 == 0){
        div8.value = "O";
    }
    else{
        div8.value = "X";
    }
    count++;
}
function divf9(){
    if(count%2 == 0){
        div9.value = "O";
    }
    else{
        div9.value = "X";
    }
    count++;
}

function restart(){
    div1.value = "";
    div2.value = "";
    div3.value = "";
    div4.value = "";
    div5.value = "";
    div6.value = "";
    div7.value = "";
    div8.value = "";
    div9.value = "";
}
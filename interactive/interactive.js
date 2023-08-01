let counter=0;
function addCSS(){
    counter++
    if(counter %2!==0){
        document.getElementById("head").innerHTML='<title>Spicy Hunt</title> \n<link rel="stylesheet" href="./interactive.css" />'
    }else{
        document.getElementById("head").innerHTML='<title>Spicy Hunt</title>'
    }
}
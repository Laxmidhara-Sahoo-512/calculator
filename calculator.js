let display=document.getElementById("display")
display.value="";
function show(a){
    display.value+=a;
}
function ans(){
    let b=eval(display.value);
    display.value=b.toString();
}
function cl(){

    
display.value=""
    
}
function fd(){
    display.value=display.value.slice(1);
}
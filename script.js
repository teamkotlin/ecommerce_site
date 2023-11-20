var nav  =  document.getElementById("navbar");
var menu = document.getElementById("mobile");
var close = document.getElementById("close");
if(menu){
    menu.addEventListener("click",()=>{
        nav.classList.add('active');
    });
}
if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove('active');
    });
}

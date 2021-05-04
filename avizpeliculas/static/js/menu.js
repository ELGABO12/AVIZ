function abrirMenu(){
    var btn_menu = document.getElementById("btn-menu");
    var menu = document.getElementById("menu");
    var btn_close_menu = document.getElementById("btn-close-menu");

    btn_menu.addEventListener("click", function(e){
        menu.style.top = "61px";
        menu.style.transition = ".4s ease all";        
    });
    btn_close_menu.addEventListener("click", function(e){
        e.preventDefault();
        menu.style.top = "-500px";
        menu.style.transition = ".5s ease all";
    });
}
abrirMenu();


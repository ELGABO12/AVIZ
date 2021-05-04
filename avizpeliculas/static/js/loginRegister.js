function abrirLogin() {
    var btn_login = document.getElementById("btn-login");
    var btn_suscribe = document.getElementById("btn-suscribe");
    var ventana_login = document.getElementById("login-window");
    var ventana_suscribe = document.getElementById("suscribe-window");

    btn_login.addEventListener("click", function (e) {
        e.preventDefault();
        ventana_login.style.marginTop = "150px";
        ventana_login.style.transition = ".4s ease all";
        ventana_login.style.transitionDelay = ".2s";
        ventana_suscribe.style.marginTop = "-1000px";
        ventana_suscribe.style.transition = ".3s ease all"
    });
    btn_suscribe.addEventListener("click", function (e) {
        e.preventDefault();
        ventana_suscribe.style.marginTop = "120px";
        ventana_suscribe.style.transition = ".4s ease all";
        ventana_suscribe.style.transitionDelay = ".2s";
        ventana_login.style.marginTop = "-1000px";
        ventana_login.style.transition = ".3s ease all";
    });
}
abrirLogin();

function valdiarCorreoSuscribe() {
    var expReg = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    var btn_suscribe = document.getElementById("btn-suscribirse");
    var btn_reintentar = document.getElementById("btn-reintentar");
    var btn_suscribe_pc = document.getElementById("suscribirse-pcMode");
    var btn_suscribe_mobile = document.getElementById("suscribirse-mbMode");
    var ventana_reintentar = document.getElementById("window-reintentar");
    var input_email = document.getElementById("input-email");
    var input_contraseña = document.getElementById("contraseña-input");
    var input_reContraseña = document.getElementById("reContraseña-input");
    var input_userName = document.getElementById("user-input")
    var texto_ReConf = document.getElementById("texto-ReConf");
    var subtexto_ReConf = document.getElementById("subtexto-ReConf");
    var icon_ReConf = document.getElementById("icon-ReConf");
    var p_icon_ReConf = document.getElementById("p-icon-ReConf");

    btn_suscribe.addEventListener("click", function (e) {
        e.preventDefault();
        if (!expReg.test(input_email.value)) {
            icon_ReConf.innerHTML = '<i class="fas fa-sad-tear">';
            texto_ReConf.innerHTML = "Dirección de correo electrónico inválida";
            subtexto_ReConf.innerHTML = "Por favor, ingrese un correcto válido";
            ventana_reintentar.style.marginTop = "9%";
            ventana_reintentar.style.transition = ".3s ease all";
            btn_reintentar.addEventListener("click", function (e) {
                ventana_reintentar.style.marginTop = "-1000px";
                ventana_reintentar.style.transition = ".3s ease all";
                input_email.focus();
            });
        }
        else if (input_contraseña.value == "" || input_contraseña.value == null) {
            icon_ReConf.innerHTML = '<i class="fas fa-sad-tear">';
            texto_ReConf.innerHTML = "Contraseña sin datos";
            subtexto_ReConf.innerHTML = "Por favor, ingrese una contraseña, este apartado es obligatorio.";
            ventana_reintentar.style.marginTop = "9%";
            ventana_reintentar.style.transition = ".3s ease all";
            btn_reintentar.addEventListener("click", function (e) {
                ventana_reintentar.style.marginTop = "-1000px";
                ventana_reintentar.style.transition = ".3s ease all";
                input_contraseña.focus();
            });
        }
        else if (input_reContraseña.value == "" || input_reContraseña.value == null) {
            icon_ReConf.innerHTML = '<i class="fas fa-sad-tear">';
            texto_ReConf.innerHTML = "Contraseña sin datos";
            subtexto_ReConf.innerHTML = "Por favor, ingrese una contraseña, este apartado es obligatorio.";
            ventana_reintentar.style.marginTop = "9%";
            ventana_reintentar.style.transition = ".3s ease all";
            btn_reintentar.addEventListener("click", function (e) {
                ventana_reintentar.style.marginTop = "-1000px";
                ventana_reintentar.style.transition = ".3s ease all";
                input_reContraseña.focus();
            });
        }
        else if (input_contraseña.value != input_reContraseña.value) {
            icon_ReConf.innerHTML = '<i class="fas fa-sad-tear">';
            texto_ReConf.innerHTML = "Vaya, al parecer las contraseñas no concuerdan entre si.";
            subtexto_ReConf.innerHTML = "Por favor, vuelve a ingresar la contraseña y vuelve a intentarlo.";
            btn_reintentar.innerHTML = "Reintentar";
            ventana_reintentar.style.marginTop = "9%";
            ventana_reintentar.style.transition = ".3s ease all";
            btn_reintentar.addEventListener("click", function (e) {
                ventana_reintentar.style.marginTop = "-1000px";
                ventana_reintentar.style.transition = ".3s ease all";
                input_reContraseña.value = "";
                input_reContraseña.focus();
            });
        }
        else if (input_userName.value == "" || input_userName == null) {
            icon_ReConf.innerHTML = '<i class="fas fa-sad-tear">';
            texto_ReConf.innerHTML = "Nombre de usuario sin datos";
            subtexto_ReConf.innerHTML = "Por favor, ingrese un nombre de usuario, este apartado es obligatorio.";
            ventana_reintentar.style.marginTop = "9%";
            ventana_reintentar.style.transition = ".3s ease all";
            btn_reintentar.addEventListener("click", function (e) {
                ventana_reintentar.style.marginTop = "-1000px";
                ventana_reintentar.style.transition = ".3s ease all";
                input_userName.focus();
            });
        }
        else{
            icon_ReConf.innerHTML = '<i class="fas fa-thumbs-up">';
            btn_suscribe_pc.innerHTML = input_userName.value;
            texto_ReConf.innerHTML = "Todo OK! Bienvenido(a) a AVIZ! " + input_userName.value + "";
            btn_suscribe_mobile.innerHTML = input_userName.value;
            btn_suscribe_mobile.style.backgroundColor = "white";
            btn_suscribe_mobile.style.color = "black";
            btn_suscribe_mobile.style.fontFamily = "Copperplate, Copperplate Gothic Light, fantasy";
            subtexto_ReConf.innerHTML = "Por ser cliente nuevo te regalamos tu primer mes GRATIS! Disfruta de la experiencia AVIZ.";
            btn_reintentar.innerHTML = "Aceptar";
            ventana_reintentar.style.marginTop = "9%";
            ventana_reintentar.style.transition = ".3s ease all";
            btn_reintentar.addEventListener("click", function (e) {
                e.preventDefault();
                ventana_reintentar.style.marginTop = "-1000px";
                ventana_reintentar.style.transition = ".3s ease all";
                input_email.value = "";
                input_contraseña.value = "";
                input_reContraseña.value = "";
                localStorage.setItem("suscribeLoginMobile", input_userName.value);
             /*    window.open("../index.html", "_self"); */
            });
        }
    });
}
valdiarCorreoSuscribe();
/* 
function enviarEmailWelcome(){
    var input_email = document.getElementById("input-email");

} */
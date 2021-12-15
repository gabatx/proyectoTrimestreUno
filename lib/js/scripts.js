// -----------------------------------------------------
// --------- CABECERA - MENU DE NAVEGACIÓN -------------
// -----------------------------------------------------

//- Ruta para que haga el previo: 'backstagepeluqueria.com/public'
const previoLocalHostJavaScript = "";
const medidaMediaQueryMovil = "(max-width: 1284px)";
const medidaMediaQueryDesktop = "(min-width: 1285px)";


// ------ AÑADIR ESTILO AL HACER CLICK SOBRE BOTON-HAMBURGUESA ---------

const menuIzquierdo = document.querySelector('.botones');

menuIzquierdo.addEventListener('click', (e) => { // Registra un evento a un objeto en específico. Cuando haga click en el contenedor botones
  const claseMenu = e.target.classList; // Mete en una variable una lista de clases de un elemento para después verificar que exista la clase que llamemos.

  // Selecciona el contenedor
  const contenedor = document.querySelector('.cabecera'),
      botHamburguesa = document.querySelector('.fa-bars'),
      botXcerrar = document.querySelector('.fa-times');

  if (claseMenu.contains('fa-bars')) {
    // cerrar el menú lateral
    contenedor.classList.add('no-menu');
    e.target.style.display = 'none'; // e.target hace referencia al objeto en el cual se lanzo el evento, en este caso "fa-bars"
    botXcerrar.style.display = 'block';
  } else if (claseMenu.contains('fa-times')) {
    contenedor.classList.remove('no-menu');
    e.target.style.display = 'none';
    botHamburguesa.style.display = 'block';
  }

  // CERRAR MENU LATERAL AL HACER CLICK FUERA - JQUERY

  const $menuPrimerNivel = $('.menu-primer-nivel');
  const $menu = $('.cabecera');

  $(document).mouseup(e => {
    if (!$menuPrimerNivel.is(e.target) // Si al hacer clic no es el contenedor
        && $menuPrimerNivel.has(e.target).length === 0) // ... ni un descendiente del contenedor
    {
      $menu.removeClass('no-menu');
      botXcerrar.style.display = 'none'; // Quita el botón cerrar
      botHamburguesa.style.display = 'block'; // Añade el botón hamburguesa
    }
  });

  $('.toggle').on('click', () => {
    $menu.toggleClass('no-menu');

  });
});


// -------------------------------------------------------------
// ------ ABRIR SUBMENU EN MENU MÓVIL AL HACER CLICK -----------
// -------------------------------------------------------------


// --- PARA CORTE ---

$("html").click(function cerrarSubMenuWeb() { // Cerrar submenú al hacer clic fuera

  var vermediaquery = window.matchMedia(medidaMediaQueryMovil); // Inicializamos la mediaquery
  if (vermediaquery.matches) {

    const $subMenuCorte = $('#submenu-segundo-nivel-corte');
    const $flechitaCorte = $('#flechitaCorte');

    $($subMenuCorte).css("overflow", "hidden");
    $($subMenuCorte).css("maxHeight", "0px");
    $($flechitaCorte).css("transform", "rotate(0)");
  }
});

$('#corte').click(function cerrarSubMenuWeb(e) {
  var vermediaquery = window.matchMedia(medidaMediaQueryMovil); // Inicializamos la mediaquery
  if (vermediaquery.matches) {

    var $subMenuCorte = $('#submenu-segundo-nivel-corte');
    var $flechitaCorte = $('#flechitaCorte');


    if ($($subMenuCorte).css('overflow') === 'hidden') {  //Si está cerrado el submenú abre el menú

      $($subMenuCorte).css("overflow", "visible");
      $($subMenuCorte).css("maxHeight", "2000px");
      $($flechitaCorte).css("transform", "rotate(180deg)");

    } else { // sino realiza un cierra el menú

      $($subMenuCorte).css("overflow", "hidden");
      $($subMenuCorte).css("maxHeight", "0px");
      $($flechitaCorte).css("transform", "rotate(0)");
    }

    e.stopPropagation();
  }
});


// -----------------------------------------------------
// --------- AÑADIR ESTILO AL BAJAR SCROLL -------------
// -----------------------------------------------------

window.onscroll = function () {
  const varCabeceraEncoge = document.getElementById('cabecera');
  const varIconoLogoEncoge = document.getElementById('logo');
  const varlinkHablamosEncoge = document.getElementById('linkHablamos');
  const varHablamos = document.getElementById('hablamos');

  if (window.pageYOffset > 1) {
    varCabeceraEncoge.classList.add("cabeceraEncoge");
    varIconoLogoEncoge.classList.add("logoEncoge");
    varlinkHablamosEncoge.classList.add("linkHablamosEncoge");
    varHablamos.classList.add("hablamosEncoge");



  } else {
    varCabeceraEncoge.classList.remove("cabeceraEncoge");
    varIconoLogoEncoge.classList.remove("logoEncoge");
    varlinkHablamosEncoge.classList.remove("linkHablamosEncoge");
    varHablamos.classList.remove("hablamosEncoge");
  }
}

// --------------------------------------------
// --------- FORMULARIO DE CONTACTO -----------
// --------------------------------------------

// --------- AÑADIR ESTILO AL HACER CLICK SOBRE BOTON-ENVIAR CONTACTO -----------

function mailMensajeRecibido() {

  var varPantallaTotal = document.getElementById('idEnviarMail');

  varPantallaTotal.classList.remove("no-mostrar-mensaje-mail-enviado");
  varPantallaTotal.classList.add("mostrar-mensaje-mail-enviado");

  // --------- CIERRA VENTANA AL HACER DARLE AL BOTÓN -----------

  const BotonCerrarVentana = document.getElementById('idBotonCerrarVentana');

  BotonCerrarVentana.addEventListener('click', (e) => {

    varPantallaTotal.classList.add("no-mostrar-mensaje-mail-enviado");
    setTimeout(RemoveClassMostrarMensaje, 300); // El tiempo que dura la transición fade out

    function RemoveClassMostrarMensaje() {
      varPantallaTotal.classList.remove("mostrar-mensaje-mail-enviado");
    }
  });

  const xCerrarVentana = document.getElementById('idXCerrarVentana');

  xCerrarVentana.addEventListener('click', (e) => {

    varPantallaTotal.classList.add("no-mostrar-mensaje-mail-enviado");
    setTimeout(RemoveClassMostrarMensaje, 300); // El tiempo que dura la transición fade out

    function RemoveClassMostrarMensaje() {
      varPantallaTotal.classList.remove("mostrar-mensaje-mail-enviado");
    }
  });
}


// ----- ENVIAR FORMULARIO SIN RECARGAR PÁGINA MEDIANTE AJAX ------

function enviarMensaje() {

  // Capturamos todos los valores
  const nombre = document.getElementById('idNombre').value;
  const asunto = document.getElementById('idasunto').value;
  const telefono = document.getElementById('idTelefono').value;
  const email = document.getElementById('idEmail').value;
  const mensaje = document.getElementById('idMensaje').value;
  // Hacemos una nueva httpRequest
  const xhttp = new XMLHttpRequest();
  //Cuando el xhttp esté listo
  xhttp.onreadystatechange = function () {
    // Si hay 5 tipos de xhttp.readyState. El 1 no se ha enviado, el 2 que se recibió,  el 3 se está procesando, el 4 se procesó y ya se recibieron los datos.
    // Status solo hay dos. 200 que se procesó toro bien y el 404 que es error.
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      // El elemento que tenga el id (formularioContacto), lo va a refrescar y a poner a cero.
      //document.getElementById("formularioContacto").innerHTML = xhttp.responseText;
    }
  };

  // El método post es más robusto el get es más rápido
  // Llama al fichero contacto.php y asíncrono (true).
  xhttp.open("POST", previoLocalHostJavaScript + "/lib/php/contacto.php", true);
  // El header es tipo de encabezado. Content-type es el tipo de contenido.
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // El nombre entre comillas es el nombre que se va a agarrar en $_POST en php. El nombre entre signos más es el valor del var de más arriba.
  xhttp.send("nombre=" + nombre + "&asunto=" + asunto + "&telefono=" + telefono + "&email=" + email + "&mensaje=" + mensaje + "");

  // Limpiar el formulario
  document.getElementById("formularioContacto").reset();

  mailMensajeRecibido();
}


// --------------------------------------------
// --------- FORMULARIO TE LLAMAMOS -----------
// --------------------------------------------

// --------- AÑADIR ESTILO AL HACER CLICK SOBRE BOTON-ENVIAR CONTACTO -----------

function telefonoRecibido() {

  var varPantallaTotal = document.getElementById('idEnviarMailTeLlamamos');

  varPantallaTotal.classList.remove("no-mostrar-mensaje-telefono-recibido");
  varPantallaTotal.classList.add("mostrar-mensaje-telefono-recibido");


  // --------- CIERRA VENTANA AL HACER DARLE AL BOTÓN -----------

  const BotonCerrarVentanaTeLlamamos = document.getElementById('idBotonCerrarVentanaTeLlamamos');

  BotonCerrarVentanaTeLlamamos.addEventListener('click', (e) => {

    varPantallaTotal.classList.add("no-mostrar-mensaje-telefono-recibido");
    setTimeout(RemoveClassMostrarMensaje, 300); // El tiempo que dura la transición fade out

    function RemoveClassMostrarMensaje() {
      varPantallaTotal.classList.remove("mostrar-mensaje-telefono-recibido");
    }
  });

  const xCerrarVentanaTeLlamamos = document.getElementById('idXCerrarVentanaTeLlamamos');

  xCerrarVentanaTeLlamamos.addEventListener('click', (e) => {

    varPantallaTotal.classList.add("no-mostrar-mensaje-telefono-recibido");
    setTimeout(RemoveClassMostrarMensaje, 300); // El tiempo que dura la transición fade out

    function RemoveClassMostrarMensaje() {
      varPantallaTotal.classList.remove("mostrar-mensaje-telefono-recibido");
    }
  });
}


// ----- ENVIAR FORMULARIO SIN RECARGAR PÁGINA MEDIANTE AJAX ------

function teLlamamos() {

  // Capturamos todos los valores
  var telefonoTeLlamamos = document.getElementById('idTelefonoLlamamos').value;
  // Hacemos una nueva httpRequest
  var xhttpTeLlamamos = new XMLHttpRequest();
  //Cuando el xhttp esté listo
  xhttpTeLlamamos.onreadystatechange = function () {
    // Si hay 5 tipos de xhttp.readyState. El 1 no se ha enviado, el 2 que se recibió,  el 3 se está procesando, el 4 se procesó y ya se recibieron los datos.
    // Status solo hay dos. 200 que se procesó toro bien y el 404 que es error.
    if (xhttpTeLlamamos.readyState === 4 && xhttpTeLlamamos.status === 200) {
      // El elemento que tenga el id (formularioContacto), lo va a refrescar y a poner a cero.
      //document.getElementById("formularioContacto").innerHTML = xhttp.responseText;
    }
  };

  // El método post es más robusto el get es más rápido
  // Llama al fichero contacto.php y asíncrono (true).
  xhttpTeLlamamos.open("POST", previoLocalHostJavaScript + "/lib/php/te_llamamos.php", true);
  // El header es tipo de encabezado. Content-type es el tipo de contenido.
  xhttpTeLlamamos.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // El nombre entre comillas es el nombre que se va a agarrar en $_POST en php. El nombre entre signos más es el valor del var de más arriba.
  xhttpTeLlamamos.send("&nameTelefonoTeLlamamos=" + telefonoTeLlamamos + "");

  // Limpiar el formulario
  document.getElementById("formularioTeLlamamos").reset();
  telefonoRecibido();
}


// GALERIA IMAGENES HOVER OSCURECE LAS DEMÁS Y ACLARA LA SELECCIONADA:


$(document).ready(function () {

  let letMediaQueryDesktop = window.matchMedia(medidaMediaQueryDesktop); // Inicializamos la mediaquery

  //--  HOVER SOBRE UN PROYECTO
  function hoverProyecto() {

    $(".proyecto").hover(
        function () {
          $(this).removeClass("img-blanco-negro-encoge");
          $(this).addClass("img-color-agranda-hover");
        },
        function () {
          // código a ejecutarse cuando el apuntador sale del elemento
          $(this).removeClass("img-color-agranda-hover");
          $(this).addClass("img-contenedor img-blanco-negro-encoge");
        }
    );
  }

  //--  TRANSICIÓN DE SALIDA

  if (letMediaQueryDesktop.matches) { //- Media query solo para escritorio
    //--  HOVER SOBRE EL CONTENEDOR PROYECTOS
    $(".proyectos").hover(
        function () {
          // código a ejecutarse cuando el apuntador pasa por encima
          $(".proyecto").addClass("img-contenedor img-blanco-negro-encoge");
          hoverProyecto();
        },
        function () {
          window.setTimeout(function () {
            // código a ejecutarse cuando el apuntador sale del elemento
            $(".proyecto").removeClass("img-contenedor img-blanco-negro-encoge");
          }, 300);
        }
    );
  }
});
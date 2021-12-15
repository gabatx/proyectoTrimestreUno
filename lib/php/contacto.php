<?php
session_start();
// Rellenar:
$email_empresa = "backstagelinares@gmail.com";
// -------
$_SESSION['nombre']        = $_POST["nombre"];
$_SESSION['asunto']        = $_POST["asunto"];
$_SESSION['telefono']      = $_POST["telefono"];
$_SESSION['email_cliente'] = $_POST["email"];
$_SESSION['mensaje']       = nl2br(htmlspecialchars($_POST["mensaje"]));

// Datos para el email
$to      = $_SESSION['email_cliente'];
$subject = 'Contacto | ' . $_SESSION['nombre'] . ' ' . $_SESSION['asunto'];
$headers = 'From: ' . $email_empresa . "\r\n" . 'Reply-To: ' . $email_empresa . "\r\n" . 'X-Mailer: PHP/' . phpversion();
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

// Para capturar el archivo en una variable sin mostrarlo
ob_start(); # apertura de bufer
include('email_cliente.php');
$mensaje_cliente = ob_get_contents();
ob_end_clean(); # cierre de bufer

// Para capturar el archivo en una variable sin mostrarlo
ob_start(); # apertura de bufer
include('email_empresa.php');
$mensaje_empresa = ob_get_contents();
ob_end_clean(); # cierre de bufer

//Mensaje para cliente:
mail($to, $subject, $mensaje_cliente, $headers);
//Mensaje para empresa:
mail($email_empresa, $subject, $mensaje_empresa, $headers);

// Cerramos sesión
session_destroy();






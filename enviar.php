<?php

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$consulta = $_POST['consulta'];

$formcontent="
    Nombre: $nombre \n
    Apellido: $apellido \n
    Correo: $correo
    Telefono: $telefono \n
    Consulta: $consulta
";

$recipient = "tomysaave@gmail.com";

$subject = "Test - 1 de marzo 2024";

$header = "From: $email \r\n";
$header .= "Content-Type: text/plain; charset=UTF-8";
mail($recipient, $subject, $formcontent, $header) or die("Error!");
header("Location: index.html");

?>
<?php

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$consulta = $_POST['consulta'];

echo $nombre

// $formcontent="
//     Nombre: $nombre \n
//     Apellido: $apellido \n
//     Correo: $correo \n
//     Telefono: $telefono \n
//     Consulta: $consulta
// ";

// $recipient = "tomysaave@gmail.com";

// $subject = "Consulta por Belgrano 475 - $nombre";

// mail($recipient, $subject, $formcontent);
header("Location:index.html");
?>
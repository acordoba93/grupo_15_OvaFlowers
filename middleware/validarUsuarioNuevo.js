const { body } = require("express-validator");
const bcryptjs = require("bcryptjs");

const validarUsuarioNuevo = [
    body("nombre").notEmpty().withMessage("debe poseer Nombre y Apellido"),
    body("nacimiento").notEmpty().withMessage("debe colocar una fecha de nacimiento"),
    body("pais").notEmpty().withMessage("debe seleccionar una de las opciones disponibles"),
    body("celular").notEmpty().withMessage("debe colocar un telefono de contacto"),
    body("email").notEmpty().withMessage("debe colocar una direccion de correo"),
    body("usuario").notEmpty().withMessage("debe tener un usuario"),
    body("password").notEmpty().withMessage("debe tener una contraseña"),
    body("repetir").notEmpty().withMessage("debe repetir la contraseña creada")
]

module.exports = validarUsuarioNuevo;